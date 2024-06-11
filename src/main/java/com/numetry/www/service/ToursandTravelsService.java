package com.numetry.www.service;


import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.numetry.www.Repository.CategoryRepository;
import com.numetry.www.Repository.CustumerRepository;
import com.numetry.www.Repository.PlaceRepository;
import com.numetry.www.Repository.StateRepository;
import com.numetry.www.dto.CategoryDTO;
import com.numetry.www.dto.CustumerDTO;
import com.numetry.www.dto.PlaceDTO;
import com.numetry.www.dto.StateDTO;
import com.numetry.www.entity.Category;
import com.numetry.www.entity.Custumer;
import com.numetry.www.entity.Login;
import com.numetry.www.entity.Place;
import com.numetry.www.entity.State;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.validation.Valid;

@Service
@Validated
public class ToursandTravelsService 
{
	@Autowired
	CustumerRepository custumerRepository;
	
	@Autowired
	ModelMapper modelMapper;
	


	
	 @Value("${spring.mail.username}") 
	   private String sender;
	   
	@Autowired JavaMailSender javaMailSender;
		
	   	SimpleMailMessage smm= new SimpleMailMessage();
	
	// To Register
	public ResponseEntity<String> createCustumer(@Valid CustumerDTO custumer) throws MessagingException {
	    // Check for existing user details
	    if (custumerRepository.findByUserName(custumer.getUserName()) != null) {
	        return ResponseEntity.badRequest().body("Username already exists. Please try with another username.");
	    }

	    if (custumerRepository.findByEmail(custumer.getEmail()) != null) {
	        return ResponseEntity.badRequest().body("Email already exists. Please try with another email address.");
	    }

	    if (custumerRepository.findByMobileNumber(custumer.getMobileNumber()) != null) {
	        return ResponseEntity.badRequest().body("Mobile number already exists. Please try with another mobile number.");
	    }

	    // Check if passwords match
	    if (!custumer.getPassword().equals(custumer.getConfirmPassword())) {
	        return ResponseEntity.badRequest().body("Password and confirm password must be the same.");
	    }
	    
	    // Check for admin limit
	    if (custumer.getEmail().endsWith("@numetry.in")) {
	        int adminCount = custumerRepository.countByEmailDomain("numetry.in");
	        if (adminCount >=2) {
	            return ResponseEntity.internalServerError().body("Admins limit exceeded");
	        }
	    }
	    
	    // Assign role
	    String role = custumer.getEmail().endsWith("@numetry.in") ? "admin" : "user";
	    custumer.setRole(role);

	    // Map DTO to entity and save
	    Custumer user = modelMapper.map(custumer, Custumer.class);
	    custumerRepository.save(user);
	    
	 // Create a MimeMessage
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        // Build the email content using HTML
        StringBuilder emailContent = new StringBuilder();
        emailContent.append("Dear, <b>").append(custumer.getFullName()).append("</b> </p>")
                    .append("<p>Thank you for registrating with Travel Bliss. Your Registration was succesfully Completed.</p>")
                    .append("<p>Your Details as follows:</p>")
                    .append("<p>userName: "+custumer.getUserName()+"</p>")
                    .append("<p>password: "+custumer.getPassword()+"</p>")
                    .append("<p>Mobile Number: "+custumer.getMobileNumber()+"</p>")
//                   .append("<p>Thank you for registion with travel Bliss.</p>")
                    .append("<p>If you have any queries please feel free to contact us at support@travelbliss.com or +91 9876543210 </p>")
                    .append("<p>Best Regards,<br>Travel Bliss Team</p>");

        // Set email details
        helper.setText(emailContent.toString(), true); // true indicates HTML
        helper.setFrom(sender);
        helper.setTo(custumer.getEmail());
        helper.setSubject("Registration Completed for Travel Bliss");
        javaMailSender.send(mimeMessage);
	    return ResponseEntity.ok().body("User registration successfully completed");
	}


	//To get all users
	public ResponseEntity<List<CustumerDTO>> getCustumers()
	{
		List<Custumer> users=custumerRepository.findAll();
		List<CustumerDTO> custumerDto= (List<CustumerDTO>) modelMapper.map(users,CustumerDTO.class);
		return ResponseEntity.ok(custumerDto);
		
		
	}
	
	// login Functionality
	public ResponseEntity<String> checkLogin(@Valid Login login) {
	    Custumer users = custumerRepository.findByUserName(login.getUserName());
	    
	    if (users != null && users.getPassword().equals(login.getPassword())) {
	        String role = users.getRole();
	        return ResponseEntity.accepted().body("Login Successful as " + role);
	    } else {
	        return ResponseEntity.badRequest().body("Invalid credentials");
	    }
	}


	//Update User based on userName
	public ResponseEntity<String> updateuser(@Valid CustumerDTO custumerDTO, String userName) {
		
		Custumer existingCustumer= custumerRepository.findByUserName(userName);
		existingCustumer.setFullName(custumerDTO.getFullName());
		existingCustumer.setEmail(custumerDTO.getEmail());
		existingCustumer.setUserName(custumerDTO.getUserName());
		existingCustumer.setMobileNumber(custumerDTO.getMobileNumber());
		existingCustumer.setPassword(custumerDTO.getPassword());
		existingCustumer.setConfirmPassword(custumerDTO.getConfirmPassword());
		existingCustumer.setRole(custumerDTO.getRole() != null ? custumerDTO.getRole() : existingCustumer.getRole());

		
		custumerRepository.save(existingCustumer);
		return ResponseEntity.ok().body("user Details Updated Successfully");
	}


	//Delete user based on UserName
	public ResponseEntity<String> deleteUserDetails(String userName) {
		
		Custumer custumer=custumerRepository.findByUserName(userName);
		if(custumer!=null)
		{
			custumerRepository.delete(custumer);
			return ResponseEntity.noContent().build();
		}
		else
		{
			return ResponseEntity.badRequest().body("Invalid userName");
		}
		

	}
	
	@Autowired
	private StateRepository stateRepository; 
	 
	@Autowired
	private CategoryRepository categoryRepository;
	 
	@Autowired
	private PlaceRepository placeRepository;
	

	//to Find the Details by stateName
	public StateDTO getStateByName(String stateName)
	{
	    State state = stateRepository.findByStateName(stateName);

	    return  modelMapper.map(state, StateDTO.class);
	}


//	to save StateDetails
	public StateDTO  postStateDetails(StateDTO state) 
	{
		State existingState=stateRepository.findByStateName(state.getStateName());
		if(existingState!=null)
		{
			stateRepository.save(existingState);
			return modelMapper.map(stateRepository.save(existingState), StateDTO.class);
		}
		
		State state1=modelMapper.map(state, State.class);
		
		stateRepository.save(state1);
		
		return modelMapper.map(state1, StateDTO.class);	
	}


	// to Save CategoryDetails
	public ResponseEntity<String> saveCategory(Category category)
	{
        
		State state = stateRepository.findById(category.getState().getStateId()).orElseThrow(() -> new IllegalArgumentException("Invalid state ID"));
        
        category.setState(state);
        
        categoryRepository.save(category);
        
         modelMapper.map(category, CategoryDTO.class);
         return ResponseEntity.ok().body("Category Stored Succesfully");
    }


	//to Store place Details
	public ResponseEntity<String> savePlace(Place place) 
	{
        Category category = categoryRepository.findById(place.getCategory().getCategoryId())
            .orElseThrow(() -> new IllegalArgumentException("Invalid category ID: " + place.getCategory().getCategoryId()));
        
        place.setCategory(category);
        
        placeRepository.save(place);
         
        return ResponseEntity.ok().body("places Stored Succesfully");
        
	}
	
	//to store state, category and place detaild at a time 


public State saveAllatATime(StateDTO stateRequestDTO) {
    State stateEntity = modelMapper.map(stateRequestDTO, State.class);
    stateEntity = stateRepository.save(stateEntity);
    System.out.println("Saved StateEntity: " + stateEntity);

    for (CategoryDTO categoryDTO : stateRequestDTO.getCategories()) {
        Category categoryEntity = modelMapper.map(categoryDTO, Category.class);
        categoryEntity.setState(stateEntity);
        categoryEntity = categoryRepository.save(categoryEntity);
        System.out.println("Saved CategoryEntity: " + categoryEntity);

        for (PlaceDTO placeDTO : categoryDTO.getPlaces()) {
            Place placeEntity = modelMapper.map(placeDTO, Place.class);
            placeEntity.setCategory(categoryEntity);
            placeEntity.setState(stateEntity);
            placeEntity = placeRepository.save(placeEntity);
            System.out.println("Saved PlaceEntity: " + placeEntity);
        }
    }

    return stateEntity;
}
	
	
}
package com.numetry.www.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class HotelBookingDTO 
{
	@NotBlank(message="to book hotel, name is required")
	@Size(min=6 , max=20, message="name must be between 6 to 30 characters")
	@Pattern(regexp="^[a-zA-z]{6,20}$", message="name must contains alphabets")
	private String name;
	
	@NotBlank(message="mobile is required")
	@Size(min=10, max=10, message="mobileNumber must be 10 digits")
	@Pattern(regexp="^[6-9][0-9]{9}$", message="invalid mobile number")
	private String mobileNumber;
	
	@NotBlank(message="aadhar number is required")
	@Size(min=12, max=12, message="Aadhar number must be 10 digits")
	@Pattern(regexp = "^[2-9]{1}[0-9]{11}$")
	private String aadhar;
	
	@NotBlank(message="email is required")
	@Pattern(regexp = "^(?!.?\\.\\.)(?!.?\\.(|\\.|\\.))([a-zA-Z0-9]+[a-zA-Z]*)(?:[.][a-zA-Z0-9]+)?(?:[.]?[a-zA-Z0-9]+)?@[a-zA-Z.]+(?:[a-zA-Z0-9]+)?\\.[a-zA-Z]{2,3}$", message="Invalid email address")
	private String email;
	
	@NotBlank(message = "bookingDate is required")
	private LocalDate bookingDate;
	
	@NotBlank(message="bookingTime is required")
	private LocalTime bookingTime;
	
	@NotBlank(message="startDate is required")
	private LocalDate startDate;
	
	@NotBlank(message="endDate is required")
	private LocalDate endDate;
	
}

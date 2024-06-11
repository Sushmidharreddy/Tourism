package com.numetry.www.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CustumerDTO 
{

	@NotBlank(message="fullName is required")

	@Size(min=6, max=30, message = "size must be between 6 to 30 characters")
	@Pattern(regexp="^[a-zA-Z. ]{6,30}$", message="fullName must contains alphabets")
	private String fullName;
	
	@NotBlank(message="Email is required")
//	@Pattern(regexp="^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{6,}$", message="Invalid email address")
	@Pattern(regexp = "^(?!.?\\.\\.)(?!.?\\.(|\\.|\\.))([a-zA-Z0-9]+[a-zA-Z]*)(?:[.][a-zA-Z0-9]+)?(?:[.]?[a-zA-Z0-9]+)?@[a-zA-Z.]+(?:[a-zA-Z0-9]+)?\\.[a-zA-Z]{2,3}$", message="Invalid email address")
	private String email;
	
	@NotBlank(message="mobileNumber is required")
	@Size(min=10,max=10, message="mobileNumber must be 10 digits")
	@Pattern(regexp="^[6-9][0-9]{9}$", message="Invalid mobileNumber")
	private String mobileNumber;

	
	@NotBlank(message="userName is required")
	@Size(min=4, max=10)
	@Pattern(regexp="^[a-zA-Z0-9_@.-]{4,10}$",  message = "Username must consist of alphanumeric characters, underscores, or hyphens Only")
	private String userName;
	
	
	@NotBlank(message="password is required")
	@Size(min=8, max=15)
	@Pattern(regexp="^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&_\\-\\*&])[A-Za-z\\d!@#$%^&_\\-\\*&]{8,}$", message="password strength is weak, must be contains one uppercase letter, one lowercase letter, one digit and one special charecter")
	private String password;

	@NotBlank(message="please confirm your password")
	@Size(min=8, max=15)
	@Pattern(regexp="^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&_\\-\\*&])[A-Za-z\\d!@#$%^&_\\-\\*&]{8,}$", message="password strength is weak, must be contains one uppercase letter, one lowercase letter, one digit and one special charecter")
	private String confirmPassword;
	
	private String role;
}



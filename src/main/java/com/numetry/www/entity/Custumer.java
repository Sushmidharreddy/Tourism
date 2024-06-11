package com.numetry.www.entity;





import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Custumer 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
//	@NotBlank(message="fullName is required")
//	@Size(min=6, max=20)
//	@Pattern(regexp="^[a-z][A-Z]{6,12}$", message="fullName must contains alphabets")
	private String fullName;
	
//	@NotBlank(message="Email is required")
//	@Pattern(regexp="^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{6,}$", message="Invalid email address")
//	@Pattern(regexp="^/^(?!.?\\.\\.)(?!.?\\.(|\\.|\\.))([a-zA-Z0-9]+[a-zA-Z]*)(?:[.][a-zA-Z0-9]+)?(?:[.]?[a-zA-Z0-9]+)?@[a-zA-Z.]+(?:[a-zA-Z0-9]+)?\\.[a-zA-Z]{2,3}$", message="Invalid email address")
	private String email;
	
//	@NotBlank(message="mobileNumber is required")
//	@Size(max=10)
//	@Pattern(regexp="^[6-9][0-9]{9}$", message="Invalid mobileNumber")
	private String mobileNumber;
	
	
	
//	@NotBlank(message="userName is required")
//	@Size(min=4, max=10)
//	@Pattern(regexp="^[a-zA-Z0-9_.-]{3,16}$",  message = "Username must consist of alphanumeric characters, underscores, or hyphens and be between 3 and 16 characters long")
	private String userName;
	
	
//	@NotBlank(message="password is required")
//	@Size(min=8, max=15)
//	@Pattern(regexp="^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$", message="password strength is weak, must be contains one uppercase letter, one lowercase letter, one digit and one special charecter and min length 8 and max length 15")
	private String password;
	
	
//	@NotBlank(message="please confirm your password")
//	@Size(min=8, max=15)
//	@Pattern(regexp="^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$", message="not matching with password")
	private String confirmPassword;
	
	
	private String role;
	
	
	

}

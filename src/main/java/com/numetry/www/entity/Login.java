package com.numetry.www.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class Login 
{
	private String userName;
	
	private String password;
	
}

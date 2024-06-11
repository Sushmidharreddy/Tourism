package com.numetry.www.entity;

import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Verification 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String emailId;
	
	private String emailOtp;
	
	private String mobileNumber;
	
	private String mobileOtp;
	
	private LocalTime emailOtpCreatedTime;
	
	private LocalTime mobileOtpCreatedTime;
	

}

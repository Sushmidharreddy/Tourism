package com.numetry.www.dto;

import java.time.LocalTime;

import lombok.Data;

@Data
public class VerificationDTO
{
	private long id;
	
	private String emailId;
	
	private String emailOtp;
	
	private String mobileNumber;
	
	private String mobileOtp;
	
	private LocalTime emailOtpCreatedTime;
	
	private LocalTime mobileOtpCreatedTime;
}

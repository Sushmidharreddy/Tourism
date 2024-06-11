package com.numetry.www.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class TripBookingDTO 
{
	private String userId;
	
	private String userName;
	
	private String emailId;
	
	private String mobileNumber;
	
	@NotBlank(message="bookingDate is required")
    private LocalDate bookingDate;
    
	@NotBlank(message="bookingTime is required")
    private LocalTime bookingTime;
    
	@NotBlank(message="tripStartDate is required")
    private LocalDate tripStartDate;
    
	@NotBlank(message = "tripEndDate is required")
    private LocalDate tripEndDate;
    
    @NotBlank(message="source must not be Blank")
    @Pattern(regexp="^[a-zA-z]{3,20}$", message="source must be contain alphabets")
    private String source;
    
    @NotBlank(message="destination must not be Blank")
    @Pattern(regexp="^[a-zA-z]{3,20}$", message="source must be contain alphabets")
    private String destination;
    
    private String price;
    
    private String distance;
    
}

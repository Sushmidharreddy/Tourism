package com.numetry.www.dto;

import com.numetry.www.entity.Category;
import com.numetry.www.entity.State;

import jakarta.persistence.JoinColumn;
import lombok.Data;

@Data
public class PlaceDTO 
{
	
	
	 private String placeName;
	 
	 private String placeImage;
	 
	 private String nearbyRailwayStation;
	 
	 private String nearbyAirport;
	 
	 private String nearbyBusStop;
	 
	 private String nearbyHotel;
	 
	 private String description;
	 
//	 private Category category;
//	 
//	 private State state;
}

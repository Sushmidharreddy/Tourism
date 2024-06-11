package com.numetry.www.dto;

import java.util.List;

import lombok.Data;

@Data
public class CategoryDTO 
{
	
	
	private String categoryName;
	
	private List<PlaceDTO> places;

}

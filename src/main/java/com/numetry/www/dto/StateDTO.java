package com.numetry.www.dto;

import java.util.List;
import java.util.Set;



import lombok.Data;

@Data
public class StateDTO 
{

	private String stateName;
	
	private List<CategoryDTO> categories;
	
//	private Set<PlaceDTO> places;
}

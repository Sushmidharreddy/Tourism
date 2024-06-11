package com.numetry.www.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.numetry.www.entity.Category;
import com.numetry.www.entity.Place;
import com.numetry.www.entity.State;

public interface PlaceRepository extends JpaRepository<Place, Long> 
{

//	Place findByState_StateName(String stateName);
//
//	List<Place> findByStateAndCategory(State state, Category category);

}

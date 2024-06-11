package com.numetry.www.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.numetry.www.entity.State;

public interface StateRepository extends JpaRepository<State, Long> 
{

	State findByStateName(String stateName);
	
}

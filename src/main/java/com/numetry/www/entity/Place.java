package com.numetry.www.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table
public class Place {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long placeId;

	    private String placeName;
	    private String placeImage;
	    private String nearbyRailwayStation;
	    private String nearbyAirport;
	    private String nearbyBusStop;
	    private String nearbyHotel;
	    private String description;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "state_id")
	    @JsonBackReference
	    private State state;
	    
	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "category_id")
	    @JsonBackReference
	    private Category category;

	   
}
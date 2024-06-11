package com.numetry.www.exception;

public class ResourceNotFoundException extends RuntimeException 
{
	public ResourceNotFoundException(String message) {
        super(message);
    }
}

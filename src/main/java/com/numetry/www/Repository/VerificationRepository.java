package com.numetry.www.Repository;

import java.time.LocalTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.numetry.www.entity.Verification;

@Repository
public interface VerificationRepository extends JpaRepository<Verification, Long> 
{

	Verification findByEmailOtpCreatedTimeBefore(LocalTime emailOtpCreatedTime );

	Verification findByEmailOtp(String emailOtp);
	
	Verification findByEmailId(String email);

	Verification findByMobileNumber(String mobileNumber);

	Verification findByMobileOtpCreatedTimeBefore(LocalTime mobileNumberCreatedTime);

	Verification findByMobileOtp(String mobileotp);
	
}

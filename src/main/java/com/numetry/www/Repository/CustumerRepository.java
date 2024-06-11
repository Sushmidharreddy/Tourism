package com.numetry.www.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.numetry.www.entity.Custumer;

@Repository
public interface CustumerRepository extends JpaRepository<Custumer, Long>
{

	Custumer findByUserName(String userName);
	
	Custumer findByEmail(String email);

	Custumer findByMobileNumber(String mobileNumber);

    @Query("SELECT COUNT(c) FROM Custumer c WHERE c.email LIKE %:domain%")
    int countByEmailDomain(@Param("domain") String domain);


}

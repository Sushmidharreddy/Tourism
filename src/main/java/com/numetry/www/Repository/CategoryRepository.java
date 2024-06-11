package com.numetry.www.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.numetry.www.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}

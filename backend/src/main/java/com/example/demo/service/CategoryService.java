package com.example.demo.service;

import com.example.demo.io.CategoryRequest;
import com.example.demo.io.CategoryResponse;

public interface CategoryService 
{
    CategoryResponse add(CategoryRequest request);
}

package com.example.demo.service.impl;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.io.CategoryRequest;
import com.example.demo.io.CategoryResponse;
import com.example.demo.model.CategoryEntity;
import com.example.demo.repo.CategoryRepository;
import com.example.demo.service.CategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService
{
    private final CategoryRepository categoryRepository;

    @Override
    public CategoryResponse add(CategoryRequest request) 
    {
        CategoryEntity newCategory=convertToEntity(request);
        newCategory=categoryRepository.save(newCategory);
        return convertToResponse(newCategory);
    }

    private CategoryResponse convertToResponse(CategoryEntity newCategory) 
    {
        return CategoryResponse.builder()
        .categoryId(newCategory.getCategoryId())
        .name(newCategory.getName())
        .description(newCategory.getDescription())
        .bgColor(newCategory.getBgColor())
        .imgUrl(newCategory.getImgUrl())
        .createdAt(newCategory.getCreatedAt())
        .updatedAt(newCategory.getUpdatedAt())
        .build();
    }

    private CategoryEntity convertToEntity(CategoryRequest request)
    {
        return CategoryEntity.builder()
        .categoryId(UUID.randomUUID().toString())
        .name(request.getName())
        .description(request.getDescription())
        .bgColor(request.getBgColor())
        .build();
    }
    
}

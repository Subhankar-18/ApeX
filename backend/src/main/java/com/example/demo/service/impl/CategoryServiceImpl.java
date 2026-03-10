package com.example.demo.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.io.CategoryRequest;
import com.example.demo.io.CategoryResponse;
import com.example.demo.model.CategoryEntity;
import com.example.demo.repo.CategoryRepository;
import com.example.demo.service.CategoryService;
import com.example.demo.service.FileUploadService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final FileUploadService fileUploadService;

    @Override
    public CategoryResponse add(CategoryRequest request) {

        CategoryEntity newCategory = convertToEntity(request);

        // Upload image to Cloudinary
        MultipartFile file = request.getFile();
        if (file != null && !file.isEmpty()) {

            String imageUrl = fileUploadService.uploadFile(file);
            newCategory.setImgUrl(imageUrl);
        }

        newCategory = categoryRepository.save(newCategory);

        return convertToResponse(newCategory);
    }

    @Override
    public List<CategoryResponse> read() {
        return categoryRepository.findAll()
                .stream()
                .map(category -> convertToResponse(category))
                .toList();
    }

    @Override
    public void delete(String categoryId) {

        CategoryEntity existingCategory = categoryRepository
                .findByCategoryId(categoryId)
                .orElseThrow(() -> new RuntimeException("CATEGORY NOT FOUND"));

        // Delete image from Cloudinary
        if (existingCategory.getImgUrl() != null) {
            fileUploadService.deleteFile(existingCategory.getImgUrl());
        }

        categoryRepository.delete(existingCategory);
    }

    private CategoryResponse convertToResponse(CategoryEntity newCategory) {

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

    private CategoryEntity convertToEntity(CategoryRequest request) {

        return CategoryEntity.builder()
                .categoryId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .bgColor(request.getBgColor())
                .build();
    }
}
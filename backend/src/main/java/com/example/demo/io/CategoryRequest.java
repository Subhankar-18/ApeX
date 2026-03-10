package com.example.demo.io;

import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryRequest
{
    private String name;
    private String description;
    private String bgColor;
    private MultipartFile file;
}

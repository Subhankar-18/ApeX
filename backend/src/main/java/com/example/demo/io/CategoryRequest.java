package com.example.demo.io;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryRequest
{
    private String name;
    private String description;
    private String bgColor;
}

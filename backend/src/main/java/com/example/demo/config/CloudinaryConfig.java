package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Configuration
public class CloudinaryConfig
{
    @Value("${cloudinary.api_key}")
    private String accessKey;

    @Value("${cloudinary.api_secret}")
    private String secretKey;

    @Value("${cloudinary.cloud_name}")
    private String cloudName;

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", cloudName,
                "api_key", accessKey,
                "api_secret", secretKey,
                "secure", true));
    }
}

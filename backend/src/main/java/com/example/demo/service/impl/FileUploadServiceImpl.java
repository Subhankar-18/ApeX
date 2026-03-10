package com.example.demo.service.impl;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.demo.service.FileUploadService;

@Service
public class FileUploadServiceImpl implements FileUploadService
{
    @Autowired
    private Cloudinary cloudinary;

    @Override
    public String uploadFile(MultipartFile file)
    {
        try {

            Map uploadResult = cloudinary.uploader().upload(
                    file.getBytes(),
                    ObjectUtils.emptyMap()
            );

            return uploadResult.get("url").toString();

        } catch (IOException e) {
            throw new RuntimeException("Image upload failed");
        }
    }

    @Override
    public boolean deleteFile(String imgUrl) 
    {
        try {

            String publicId = imgUrl.substring(
                    imgUrl.lastIndexOf("/") + 1,
                    imgUrl.lastIndexOf(".")
            );

            cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());

            return true;

        } catch (Exception e) {
            return false;
        }
    }

}

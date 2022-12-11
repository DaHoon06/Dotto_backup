package com.dotto.app.entity.common;

import com.dotto.app.exception.UnsupportedImageFormatException;

import java.util.Arrays;
import java.util.UUID;

public abstract class ImageCreateSupport {


    private final static String[] supportedExtension = {"jpg", "jpeg", "gif", "bmp", "png"};


    protected String generateName(String extension){
        return UUID.randomUUID().toString()+"."+extension;
    }

    protected String extractExtension(String originName){
        try{
            String ext = originName.substring(originName.lastIndexOf(".")+1);
            if(isSupportedFormat(ext)) return ext;
        }catch (StringIndexOutOfBoundsException e){}
        throw new UnsupportedImageFormatException();
    }

    private boolean isSupportedFormat(String ext){
        return Arrays.stream(supportedExtension).anyMatch(e -> e.equalsIgnoreCase(ext));
    }
}

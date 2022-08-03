package com.dotto.app.dto.post;

import com.dotto.app.entity.post.Image;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ImageDto {
    private Long id;
    private String originName;
    private String name;

    public static ImageDto toDto(Image image){
        return new ImageDto(
                image.getImgNo(),
                image.getOriginName(),
                image.getName()
        );
    }
}

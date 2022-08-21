package com.dotto.app.dto.post;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import java.util.ArrayList;
import java.util.List;

@ApiModel(value = "피드 생성 요청")
@Data
@NoArgsConstructor
public class FeedCreateRequest {

    @Null
    private Long memberNo;

    @ApiModelProperty(value = "피드 내용", notes = "피드 내용을 입력하세요")
    @NotBlank
    private String content;

    @ApiModelProperty(value = "피드 이미지", notes = "피드 이미지를 추가해 주세요")
    private List<MultipartFile> feedImg = new ArrayList<>();

}

package com.dotto.app.dto.post;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@ApiModel(value = "피드 수정")
@Data
public class FeedUpdateRequest {

    @ApiModelProperty(value = "피드 내용", required = true, example = "피드짱짱")
    @NotBlank
    private String content;

    @ApiModelProperty(value = "추가할 피드 이미지")
    private List<MultipartFile> addedImg = new ArrayList<>();

    @ApiModelProperty(value = "제거할 피드 번호")
    private List<Long> deletedImg = new ArrayList<>();

}

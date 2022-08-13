package com.dotto.app.dto.post;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@ApiModel(value = "게시글 수정 요청")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DottoPostUpdateRequest {

    @ApiModelProperty(value = "게시글 제목", notes = "게시글 제목을 입력해주세요", required = true, example = "title update")
    @NotBlank
    private String title;

    @ApiModelProperty(value = "게시글 내용", notes = "게시글 내용을 입력해주세요", required = true, example = "content update")
    @NotBlank
    private String content;

    @ApiModelProperty(value = "가격", notes = "가격을 입력해 주세요", required = true, example = "10000")
    @NotBlank
    private String price;

    @ApiModelProperty(value = "할인 가격", notes = "할인 가격을 입력해 주세요", example = "9000")
    private String salesPrice;

    @ApiModelProperty(value = "할인 적용 여부", notes = "할인 적용 여부를 입력해 주세요", required = true, example = "Y")
    @NotBlank
    private String salesYn;

    @ApiModelProperty(value = "장르", notes = "장르를 입력해 주세요", required = true, example = "레터링")
    @NotBlank
    private String genre;

    @ApiModelProperty(value = "소요시간", notes = "소요시간을 입력해 주세요", required = true, example = "30")
    private String totalTime;

    @ApiModelProperty(value = "태그", notes = "태그를 입력해 주세요", example = "#멋져, #최고")
    private List<String> tags;

    @ApiModelProperty(value = "추가된 이미지", notes = "추가된 이미지를 첨부해 주세요")
    private List<MultipartFile> addedImages = new ArrayList<>();

    @ApiModelProperty(value = "제거된 이미지 아이디", notes = "제거된 이미지 아이디를 입력해 주세요")
    private List<Long> deletedImages = new ArrayList<>();





}

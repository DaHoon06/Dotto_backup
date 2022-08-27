package com.dotto.app.dto.member.workplace;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import java.util.List;

@ApiModel(value = "내 작업실 생성 요청")
@Data
@AllArgsConstructor
public class WorkPlaceCreateRequest {

    @Null
    private Long memberNo;

    @ApiModelProperty(value = "작업실 이미지", notes = "내 작업실 이미지를 첨부해 주세요")
    @NotBlank
    private List<MultipartFile> workImg;

    @ApiModelProperty(value = "주소", notes = "주소를 입력해 주세요", required = true, example = "서울시 강남구")
    @NotBlank
    private String address;

    @ApiModelProperty(value = "상세 주소", notes = "상세 주소를 입력해 주세요", required = true, example = "살고싶동 123-1")
    @NotBlank
    private String subAddress;

    @ApiModelProperty(value = "작업 시간", notes = "작업 소요 시간을 입력해 주세요", required = true, example = "9")
    private String workTime;
}

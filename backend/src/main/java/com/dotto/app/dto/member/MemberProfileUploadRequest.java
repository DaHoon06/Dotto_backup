package com.dotto.app.dto.member;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

@ApiModel(value = "프로필 사진 업로드 요청")
@Data
@AllArgsConstructor
public class MemberProfileUploadRequest {

    @ApiModelProperty(value = "사용자 id", notes = "인증 토큰의 사용자 id를 자동 주입 해줍니다.")
    private String memberNo;

    @ApiModelProperty(value = "업로드할 프로필 사진 ", notes = "업로드할 프로필 사진을 첨부 합니다.")
    @NotBlank
    private MultipartFile uploadProfile;


}

package com.dotto.app.dto.member;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@ApiModel(value = "멤버 프로필 편집")
@Data
@AllArgsConstructor
public class MemberUpdateRequest {


    @ApiModelProperty(value = "닉네임", notes = "닉네임을 입력해 주세요", required = true, example = "nickname")
    @Pattern(regexp = "^[A-Za-z0-9가-힣]{1,12}+$", message = "1~12글자 이내에 (특수문자 제외) 입니다")
    @Size(min = 1, max = 12)
    private String nickname;

    @ApiModelProperty(value = "소개글", notes = "소개글을 입력해 주세요", example = "소개글")
    private String intro;

}

package com.dotto.app.dto.sign;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Api(value = "회원가입 요청")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequest {

    @ApiModelProperty(value = "아이디", notes = "아이디를 입력해 주세요", required = true, example = "member1")
    @NotBlank
    private String id;

    @ApiModelProperty(value = "비밀번호", notes = "비밀번호를 입력해 주세요", required = true, example = "123456a!")
    @NotBlank
    private String password;

    @ApiModelProperty(value = "닉네임", notes = "닉네임을 입력해 주세요", required = true, example = "nickname")
    @NotBlank
    private String nickname;

    @ApiModelProperty(value = "성별", notes = "성별을 입력해 주세요", required = true, example = "남")
    @NotBlank
    private String gender;

    @ApiModelProperty(value = "연락처", notes = "연락처를 입력해 주세요", required = true, example = "01012345678")
    @NotBlank
    private String phone;


}

package com.dotto.app.dto.policy;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@ApiModel(value = "이용약관 동의 요청")
@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PolicyAgreeRequest {

    @ApiModelProperty(value = "이용약관 번호", notes = "이용약관 번호를 입력해 주세요", example = "1")
    @NotBlank
    private Long policyNo;

    @ApiModelProperty(value = "닷투 이용약관 동의 여부", notes = "닷투 이용약관 동의 여부를 입력해 주세요", example = "Y")
    @NotBlank
    private String dottoAgreementYn;

    @ApiModelProperty(value = "개인정보 이용약관 동의 여부", notes = "개인정보 이용약관 동의 여부를 입력해 주세요", example = "Y")
    @NotBlank
    private String privateAgreementYn;

    @ApiModelProperty(value = "마케팅 이용약관 동의 여부", notes = "마케팅 이용약관 동의 여부를 입력해 주세요", example = "Y")
    @NotBlank
    private String marketingAgreementYn;

    @ApiModelProperty(value = "회원 번호", notes = "회원 번호를 입력해 주세요", example = "1")
    @NotBlank
    private Long memberNo;
}

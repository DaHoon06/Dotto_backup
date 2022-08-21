package com.dotto.app.dto.member.contect;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@ApiModel(value = "연락 생성 요청")
@Data
@AllArgsConstructor
public class ContectCreateRequest {

    @ApiModelProperty(value = "회원 번호", notes = "회원 번호를 입력해 주세요", required = true)
    private Long memberNo;

    @ApiModelProperty(value = "연락 수단 타입", notes = "연락 수단 타입을 입력해 주세요", required = true, example = "전화번호")
    private String type;

    @ApiModelProperty(value = "연락 수단", notes = "연락 수단을 입력해 주세요",required = true, example = "01012345678")
    private String contectMethod;


}

package com.dotto.app.dto.member;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberRoleSwitchRequest {

    private Long memberNo;
    private String roles;
}

package com.dotto.app.dto.follow;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FollowingList {
    private Long memberNo;
    private String nickname;
}

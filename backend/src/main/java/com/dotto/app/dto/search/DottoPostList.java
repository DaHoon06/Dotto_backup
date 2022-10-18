package com.dotto.app.dto.search;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DottoPostList {

    Long postNo;
    String title;
    String nickname;
    String price;
    String salesPrice;
    String salesYn;
    String salesPct;
    String tags;
    String originName;
}

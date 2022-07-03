package com.dotto.app.dto.post;

import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DottoPostDto {

    private Long postNo;
    private String title;
    private String id;
    private Integer price;
    private Integer salesPrice;
    private Character salesYn;
    private String salesPct;
    private String tags;

    @QueryProjection
    public DottoPostDto(Long postNo, String title, String id, int price, int salesPrice, char salesYn, String salesPct, String tags){
        this.postNo = postNo;
        this.title = title;
        this.id = id;
        this.price = price;
        this.salesPrice = salesPrice;
        this.salesYn = salesYn;
        this.salesPct = salesPct;
        this.tags = tags;
    }

}

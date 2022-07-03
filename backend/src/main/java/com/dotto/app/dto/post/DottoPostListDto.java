package com.dotto.app.dto.post;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@AllArgsConstructor
public class DottoPostListDto {
    private Long totalElement;
    private Integer totalPage;
    private boolean hasNext;
    private List<DottoPostDto> dottoPostDtoList;


    public static DottoPostListDto toDto(Page<DottoPostDto> page){
        return new DottoPostListDto(page.getTotalElements(), page.getTotalPages(), page.hasNext(), page.getContent());
    }

}

package com.dotto.app.dto.search;

import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.post.DottoPost;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class SearchResponse {

    private List<Member> normalList;
    private List<Member> artistList;
    private List<DottoPost> dottoPosts;

    public static SearchResponse toDto(List<Member> normalList, List<Member> artistList, List<DottoPost> dottoPosts){
        return new SearchResponse(
                normalList,artistList,dottoPosts);

    }
}

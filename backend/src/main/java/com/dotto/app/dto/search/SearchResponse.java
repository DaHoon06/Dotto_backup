package com.dotto.app.dto.search;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;


@Data
@AllArgsConstructor
public class SearchResponse {

    List<MemberList> memberList;
    List<ArtistList> artistList;
    List<DottoPostList> dottoPostList;



    public static SearchResponse toDto(List<MemberList> memberList, List<ArtistList> artistList, List<DottoPostList> dottoPostList){
        return new SearchResponse(memberList, artistList, dottoPostList);
    }


}

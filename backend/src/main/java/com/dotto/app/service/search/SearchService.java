package com.dotto.app.service.search;

import com.dotto.app.dto.search.ArtistList;
import com.dotto.app.dto.search.DottoPostList;
import com.dotto.app.dto.search.MemberList;
import com.dotto.app.dto.search.SearchResponse;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.post.DottoPostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SearchService {

    private final MemberRepository memberRepository;
    private final DottoPostRepository dottoPostRepository;


    public SearchResponse search(String searchKeyword){
        List<MemberList> normal = memberRepository.findBySearchNormalNickname(searchKeyword);
        List<ArtistList> artist = memberRepository.findBySearchArtistNickname(searchKeyword);
        List<DottoPostList> dottoPosts = dottoPostRepository.findBySearchTitleToDottoPosts(searchKeyword);

        return new SearchResponse( normal, artist , dottoPosts);
    }
}

package com.dotto.app.service.search;

import com.dotto.app.dto.search.SearchResponse;
import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.post.DottoPost;
import com.dotto.app.exception.MemberNotFoundException;
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
        List<Member> normal = memberRepository.findBySearchNormalId(searchKeyword);
        List<Member> artist = memberRepository.findBySearchArtistId(searchKeyword);
        List<DottoPost> dottoPosts = dottoPostRepository.findByTitle(searchKeyword);

        return SearchResponse.toDto(normal,artist,dottoPosts);
    }
}

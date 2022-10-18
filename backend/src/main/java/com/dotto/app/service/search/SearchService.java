package com.dotto.app.service.search;

import com.dotto.app.dto.search.ArtistList;
import com.dotto.app.dto.search.DottoPostList;
import com.dotto.app.dto.search.MemberList;
import com.dotto.app.dto.search.SearchResponse;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.post.DottoPostRepository;
import com.dotto.app.repository.post.ImageRepository;
import com.dotto.app.service.search.convert.ImgNoPostNoConvert;
import com.dotto.app.service.search.convert.PostNoConvert;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SearchService {

    private final MemberRepository memberRepository;
    private final DottoPostRepository dottoPostRepository;
    private final ImageRepository imageRepository;


    public SearchResponse search(String searchKeyword){
        List<MemberList> normal = memberRepository.findBySearchNormalNickname(searchKeyword);
        List<ArtistList> artist = memberRepository.findBySearchArtistNickname(searchKeyword);
        List<DottoPostList> dottoPosts = searchDottoPosts(searchKeyword);

        return new SearchResponse( normal, artist , dottoPosts);
    }


    private List<DottoPostList> searchDottoPosts(String searchKeyword){
        List<PostNoConvert> searchTitleToPostNo = dottoPostRepository.findBySearchTitleToDottoPosts(searchKeyword);
        List<Long> searchPostNo = searchTitleToPostNo.stream().map(PostNoConvert::getPostNo).collect(Collectors.toList());
        List<ImgNoPostNoConvert> searchImgNo = imageRepository.findTitleToImages(searchPostNo);

        return dottoPostRepository.findBySearchPostNotoDottoPosts(searchImgNo.stream().map(ImgNoPostNoConvert::getImgNo).collect(Collectors.toList()));
    }
}

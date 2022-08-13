package com.dotto.app.service.post;

import com.dotto.app.dto.post.FeedCreateRequest;
import com.dotto.app.dto.post.FeedCreateResponse;
import com.dotto.app.dto.post.FeedUpdateRequest;
import com.dotto.app.dto.post.FeedUpdateResponse;
import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.post.Feed;
import com.dotto.app.entity.post.FeedImage;
import com.dotto.app.exception.FeedNotFoundException;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.post.FeedRepository;
import com.dotto.app.service.file.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class FeedService {

    private final MemberRepository memberRepository;
    private final FeedRepository feedRepository;
    private final FileService fileService;


    @Transactional
    public FeedCreateResponse create (FeedCreateRequest req){
        log.info("memberNo = {}", req.getMemberNo());
        List<FeedImage> feedImages = req.getFeedImg().stream().map(i -> new FeedImage(i.getOriginalFilename())).collect(Collectors.toList());
        Member member = memberRepository.findById(req.getMemberNo()).orElseThrow(MemberNotFoundException::new);
        Feed feed = feedRepository.save(new Feed(member, req.getContent(), feedImages));
        uploadImage(feed.getFeedImages(), req.getFeedImg());

        return new FeedCreateResponse(feed.getFeedNo());
    }

    public FeedUpdateResponse update(Long feedNo, FeedUpdateRequest req){
        Feed feed = feedRepository.findByFeedNoWithDeletedYnEqualsN(feedNo).orElseThrow(FeedNotFoundException::new);
        Feed.FeedImageUpdateResult rs = feed.update(req);
        uploadImage(rs.getAddedImages(), rs.getAddedImageFiles());
        deletedImage(rs.getDeletedImages());
        return new FeedUpdateResponse(feed.getFeedNo());
    }


    private void uploadImage(List<FeedImage> images, List<MultipartFile> files){
        IntStream.range(0, images.size()).forEach(i -> fileService.upload(files.get(i), images.get(i).getName()));

    }

    private void deletedImage(List<FeedImage> images){
        IntStream.range(0, images.size()).forEach(i -> fileService.deleted(images.get(i).getName()));
    }


}

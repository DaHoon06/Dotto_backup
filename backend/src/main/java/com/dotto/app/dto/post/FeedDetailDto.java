package com.dotto.app.dto.post;

import com.dotto.app.dto.member.MemberDto;
import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.post.Feed;
import com.dotto.app.entity.post.FeedImage;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class FeedDetailDto {

    private Long feedNo;
    private String content;
    private List<FeedImage> images;
    private MemberDto member;

    public static FeedDetailDto toDto(Feed feed){
        return new FeedDetailDto(
                feed.getFeedNo(),
                feed.getContent(),
                feed.getFeedImages(),
                MemberDto.toDto(feed.getMember())
        );

    }

}

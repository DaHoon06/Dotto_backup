package com.dotto.app.dto.post;

import com.dotto.app.dto.member.MemberDto;
import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.post.DottoPost;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class DottoPostDetailDto {

    private Long id;
    private String title;
    private String content;
    private String price;
    private String salesPrice;
    private String salesYn;
    private String genre;
    private String totalTime;
    private List<ImageDto> postPhoto;
    private List<String> tags;
    private MemberDto member;

    public static DottoPostDetailDto toDto(DottoPost post){
        return new DottoPostDetailDto(
                post.getPostNo(),
                post.getTitle(),
                post.getContent(),
                post.getPrice(),
                post.getSalesPrice(),
                post.getSalesYn(),
                post.getGenre(),
                post.getTotalTime(),
                post.getImages().stream().map(image -> ImageDto.toDto(image)).collect(Collectors.toList()),
                tagsConvertList(post.getTags()),
                MemberDto.toDto(post.getMember())

        );
    }

    private static List<String> tagsConvertList(String tags){

        return Arrays.stream(tags.split(",")).collect(Collectors.toList());
    }
}

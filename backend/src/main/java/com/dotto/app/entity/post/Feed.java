package com.dotto.app.entity.post;

import com.dotto.app.entity.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Feed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedNo;

    @ManyToOne
    @JoinColumn(name = "memberNo")
    private Member member;

    @Column(nullable = false)
    private String content;

    @Column
    private char deletedYn;

    @Column
    private int likeHit;

    @OneToMany(mappedBy = "feed", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<FeedImage> feedImages;

    public Feed(Member member, String content, List<FeedImage> feedImages){
        this.member = member;
        this.content = content;
        this.deletedYn = 'N';
        this.likeHit =  0;
        this.feedImages = new ArrayList<>();
        addedImages(feedImages);

    }

    private void addedImages(List<FeedImage> added){
        added.stream().forEach(feedImage -> {
            feedImages.add(feedImage);
            feedImage.initFeed(this);
        });
    }


}

package com.dotto.app.entity.post;

import com.dotto.app.entity.common.ImageCreateSupport;
import com.dotto.app.exception.UnsupportedImageFormatException;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Arrays;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FeedImage extends ImageCreateSupport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedImgNo;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String originName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feedNo", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Feed feed;

    public FeedImage(String originName){
        this.name = generateName(extractExtension(originName));
        this.originName = originName;
    }

    public void initFeed(Feed feed){
        if(this.feed == null) this.feed = feed;

    }

    @Override
    protected String extractExtension(String originName) {
        return super.extractExtension(originName);
    }


    @Override
    protected String generateName(String extension) {
        return super.generateName(extension);
    }



}

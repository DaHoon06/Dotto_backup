package com.dotto.app.entity.post;

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
public class FeedImage {

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

    private final static String[] supportedExtension = {"jpg", "jpeg", "gif", "bmp", "png"};

    public FeedImage(String originName){
        this.name = generateName(extractExtension(originName));
        this.originName = originName;
    }

    public void initFeed(Feed feed){
        if(this.feed == null) this.feed = feed;

    }

    private String generateName(String extension){
        return UUID.randomUUID().toString()+"."+extension;
    }

    private String extractExtension(String originName){
        try{
            String ext = originName.substring(originName.lastIndexOf(".")+1);
            if(isSupportedFormat(ext)) return ext;
        }catch (StringIndexOutOfBoundsException e){}
        throw new UnsupportedImageFormatException();
    }

    private boolean isSupportedFormat(String ext){
        return Arrays.stream(supportedExtension).anyMatch(e -> e.equalsIgnoreCase(ext));
    }



}

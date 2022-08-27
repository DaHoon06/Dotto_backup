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
public class Image extends ImageCreateSupport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imgNo;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String originName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "postNo",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private DottoPost dottoPost;

    public Image(String originName){
        this.name = generateName(extractExtension(originName));
        this.originName = originName;
    }

    public void initDottoPost(DottoPost dottoPost){
        if(this.dottoPost == null) this.dottoPost = dottoPost;

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

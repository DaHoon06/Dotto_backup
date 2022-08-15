package com.dotto.app.entity.member;

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
public class ProfileImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imgNo;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String originName;

    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member member;

    private final static String[] supportedExtension = {"jpg", "jpeg", "gif", "bmp", "png"};


    public ProfileImage(String originName){
        this.name = generateName(extractExtension(originName));
        this.originName = originName;
    }

    public void initMember(Member member){
        if(this.member == null) this.member = member;
    }

    private String generateName(String extension){
        return UUID.randomUUID().toString()+"."+extension;
    }

    private String extractExtension(String originName){
        try{
            String ext = originName.substring(originName.lastIndexOf(".")+1);
            if(isSuppoertedFormat(ext)) return ext;
        }catch (StringIndexOutOfBoundsException e){}
        throw new UnsupportedImageFormatException();
    }

    private boolean isSuppoertedFormat(String ext){
        return Arrays.stream(supportedExtension).anyMatch(e -> e.equalsIgnoreCase(ext));
    }



}

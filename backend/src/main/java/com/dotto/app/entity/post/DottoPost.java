package com.dotto.app.entity.post;

import com.dotto.app.entity.common.EntityDate;
import com.dotto.app.entity.member.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DottoPost extends EntityDate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "memberNo",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member member;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private int price;

    @Column
    private int salesPrice;

    @Column
    private String salesYn;

    @Column
    private String genre;

    @Column
    private int totalTime;

    public DottoPost(Member member, String title, String content, int price, int salesPrice, String salesYn, String genre, int totalTime ){
        this.member = member;
        this.title = title;
        this.content = content;
        this.price = price;
        this.salesPrice = salesPrice;
        this.salesYn = salesYn;
        this.genre = genre;
        this.totalTime = totalTime;
    }


}

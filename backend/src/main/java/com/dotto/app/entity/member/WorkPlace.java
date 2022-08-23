package com.dotto.app.entity.member;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WorkPlace {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wNo;

    @OneToOne(fetch = FetchType.LAZY)
    private Member member;

    @Column
    private String workTime;

    @Column
    private String workImg;

    @Column
    private String address;

    @Column
    private String subAddress;


}

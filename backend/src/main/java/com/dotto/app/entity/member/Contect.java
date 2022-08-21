package com.dotto.app.entity.member;

import com.dotto.app.dto.member.contect.ContectCreateRequest;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Contect {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long contectNo;

    @OneToOne(fetch = FetchType.LAZY)
    private Member member;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private ContectType contectType;

    @Column
    private String contectMethod;

    public Contect(Member member, ContectCreateRequest req){
        this.member = member;
        this.contectType = ContectType.valueOf(req.getType());
        this.contectMethod = req.getContectMethod();
    }





}

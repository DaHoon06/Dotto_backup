package com.dotto.app.entity.policy;

import com.dotto.app.entity.common.EntityDate;
import com.dotto.app.entity.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class PolicyAgree extends EntityDate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long policyAgreeNo;

    @ManyToOne
    @JoinColumn(name = "policyNo")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Policy policy;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Member member;

    @Column(nullable = false)
    private String dottoAgreementYn;

    @Column(nullable = false)
    private String privateAgreementYn;

    @Column(nullable = false)
    private String marketingAgreementYn;

    public PolicyAgree(Policy policyNo, Member member, String dottoAgreementYn, String privateAgreementYn, String marketingAgreementYn){
     this.policy = policyNo;
     this.member = member;
     this.dottoAgreementYn = dottoAgreementYn;
     this.privateAgreementYn = privateAgreementYn;
     this.marketingAgreementYn = marketingAgreementYn;
    }




}

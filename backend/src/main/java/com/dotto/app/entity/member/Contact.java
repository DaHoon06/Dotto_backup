package com.dotto.app.entity.member;

import com.dotto.app.dto.member.contact.ContactCreateRequest;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long contactNo;

    @OneToOne(fetch = FetchType.LAZY)
    private Member member;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private ContectType contactType;

    @Column
    private String contactMethod;

    public Contact(Member member, ContactCreateRequest req){
        this.member = member;
        this.contactType = ContectType.valueOf(req.getType());
        this.contactMethod = req.getContactMethod();
    }





}

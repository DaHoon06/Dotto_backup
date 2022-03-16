package com.dotto.app.entity.member;

import com.dotto.app.entity.common.EntityDate;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends EntityDate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_no")
    private Long memNo;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;

    @Column(nullable = false, unique = true)
    private String nickname;

    private String gender;

    @Column(nullable = false)
    private String phone;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<MemberRole> roles;

    private String addr;

    private String subAddr;

    private String intro;

    public Member(String email, String password, String nickname, String gender, String phone, List<Role> roles, String addr, String subAddr, String intro){
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.gender = gender;
        this.phone = phone;
        this.roles = roles.stream().map(r -> new MemberRole(this,r)).collect(Collectors.toSet());
        this.addr = addr;
        this.subAddr = subAddr;
        this.intro = intro;
    }

    public void updateNickName(String nickname){
        this.nickname = nickname;
    }

    public void updateIntro(String intro){this.intro = intro;}
}

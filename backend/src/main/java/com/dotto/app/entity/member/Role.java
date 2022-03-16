package com.dotto.app.entity.member;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_no")
    private Long no;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private RoleType roleType;

    public Role(RoleType roleType){this.roleType = roleType;}


}

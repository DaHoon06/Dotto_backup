package com.dotto.app.entity.member;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Follow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Fno;

    @ManyToOne
    @JoinColumn(name = "following")
    private Member following;

    @ManyToOne
    @JoinColumn(name = "follower")
    private Member follower;

    public Follow(Member following, Member follower){
        this.following = following;
        this.follower = follower;
    }
}

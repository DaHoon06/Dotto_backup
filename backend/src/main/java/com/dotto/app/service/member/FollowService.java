package com.dotto.app.service.member;

import com.dotto.app.entity.member.Follow;
import com.dotto.app.entity.member.Member;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.repository.member.FollowRepository;
import com.dotto.app.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class FollowService {

    private final FollowRepository followRepository;

    private final MemberRepository memberRepository;

    @Transactional
    public void follow(Long followingNo, Long followerNo){
        Member following = memberRepository.findByMemberNoAndDeletedYnEqualsN(followingNo).orElseThrow(MemberNotFoundException::new);
        Member follower = memberRepository.findByMemberNoAndDeletedYnEqualsN(followerNo).orElseThrow(MemberNotFoundException::new);

        followRepository.save(new Follow(following, follower));
    }

    @Transactional
    public void unfollow(Long followingNo, Long followerNo){
        Member following = memberRepository.findByMemberNoAndDeletedYnEqualsN(followingNo).orElseThrow(MemberNotFoundException::new);
        Member follower = memberRepository.findByMemberNoAndDeletedYnEqualsN(followerNo).orElseThrow(MemberNotFoundException::new);
            followRepository.deleteByFollowingAndFollower(following, follower);
    }

    public boolean followCheck(Long followingNo, Long followerNo){
        Member following = memberRepository.findByMemberNoAndDeletedYnEqualsN(followingNo).orElseThrow(MemberNotFoundException::new);
        Member follower = memberRepository.findByMemberNoAndDeletedYnEqualsN(followerNo).orElseThrow(MemberNotFoundException::new);
        if(followRepository.countFollowByFollowingAndFollower(following, follower)==0){
            return false;   //팔로우 안되어 있음
        }
        return true;       //팔로우 되어 있음
    }


}

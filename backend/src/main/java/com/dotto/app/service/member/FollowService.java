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
@Transactional(readOnly = true)
public class FollowService {

    private final FollowRepository followRepository;

    private final MemberRepository memberRepository;

    @Transactional
    public boolean follow(Long followingNo, Long followerNo){
        Member following = memberRepository.findByMemberNoAndDeletedYnEqualsN(followingNo).orElseThrow(MemberNotFoundException::new);
        Member follower = memberRepository.findByMemberNoAndDeletedYnEqualsN(followerNo).orElseThrow(MemberNotFoundException::new);
        int i = followRepository.countFollowByFollowingAndFollower(following,follower);
        if(i==0){   //사전 팔로우/팔로잉 중복 체크
            followRepository.save(new Follow(following, follower));
            return true;
        }else {
            return false;
        }

    }

    @Transactional
    public boolean unfollow(Long followingNo, Long followerNo){
        Member following = memberRepository.findByMemberNoAndDeletedYnEqualsN(followingNo).orElseThrow(MemberNotFoundException::new);
        Member follower = memberRepository.findByMemberNoAndDeletedYnEqualsN(followerNo).orElseThrow(MemberNotFoundException::new);
        int i = followRepository.countFollowByFollowingAndFollower(following,follower);
        if(i==1){   //사전 팔로우/팔로잉 체크
            followRepository.deleteByFollowingAndFollower(following, follower);
            return true;
        }else {
            return false;
        }

    }

    public boolean followCheck(Long followingNo, Long followerNo){
        Member following = memberRepository.findByMemberNoAndDeletedYnEqualsN(followingNo).orElseThrow(MemberNotFoundException::new);
        Member follower = memberRepository.findByMemberNoAndDeletedYnEqualsN(followerNo).orElseThrow(MemberNotFoundException::new);
        int i = followRepository.countFollowByFollowingAndFollower(following, follower);
        if(i==0){
            return false;   //팔로우 안되어 있음
        }
        return true;       //팔로우 되어 있음
    }

    public int followingCheck(Long memberNo){

        return followRepository.followingCheck(memberNo);

    }

    public int followerCheck(Long memberNo){
        return followRepository.followerCheck(memberNo);
    }

}

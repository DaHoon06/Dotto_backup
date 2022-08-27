package com.dotto.app.repository.member;

import com.dotto.app.entity.member.Follow;
import com.dotto.app.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FollowRepository extends JpaRepository<Follow,Long> {


    int countFollowByFollowingAndFollower(Member following, Member follower); // 팔로우 되어있는지 count하는 메서드

    void deleteByFollowingAndFollower(Member following, Member follower); //언팔로우 메서드

    @Query("select count (f) from Follow f join Member m on m = f.following where m.memberNo= :memberNo ")
    int followingCheck(Long memberNo);

    @Query("select count(f) from Follow f join Member m on m = f.follower where m.memberNo= :memberNo ")
    int followerCheck(Long memberNo);

}

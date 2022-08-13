package com.dotto.app.repository.member;

import com.dotto.app.entity.member.Member;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findById(String id);

    boolean existsById(String id);
    boolean existsByNickname(String nickname);

    @EntityGraph("Member.roles")
    Optional<Member>findWithRolesById(String id);

    @EntityGraph("Member.roles")
    Optional<Member>findWithRolesByMemberNo(Long memberNo);

    @Query("select m from Member m where m.memberNo =:memberNo And m.deletedYn='N' ")
    Optional<Member>findByMemberNoAndDeletedYnEqualsN(Long memberNo);

}

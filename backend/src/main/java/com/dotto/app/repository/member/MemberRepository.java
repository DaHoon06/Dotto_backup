package com.dotto.app.repository.member;

import com.dotto.app.dto.search.ArtistList;
import com.dotto.app.dto.search.MemberList;
import com.dotto.app.entity.member.Member;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
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


    @Query("select new com.dotto.app.dto.search.MemberList(m.memberNo, m.nickname, p.originName) from Member m " +
            "join MemberRole r on m.memberNo = r.member.memberNo " +
            "and r.role.no = 2 and m.nickname like concat('%',:nickname,'%') left join ProfileImage p on m.memberNo = p.member.memberNo ")

    List<MemberList> findBySearchNormalNickname(String nickname);

    @Query("select new com.dotto.app.dto.search.ArtistList(m.memberNo, m.nickname, p.originName) from Member m " +
            "join MemberRole r on m.memberNo = r.member.memberNo " +
            "and r.role.no = 3 and m.nickname like concat('%',:nickname,'%') left join ProfileImage p on m.memberNo = p.member.memberNo ")
    List<ArtistList> findBySearchArtistNickname(String nickname);

}

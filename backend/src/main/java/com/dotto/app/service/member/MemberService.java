package com.dotto.app.service.member;

import com.dotto.app.dto.member.MemberDto;
import com.dotto.app.dto.member.MemberUpdateRequest;
import com.dotto.app.dto.member.MemberUpdateResponse;
import com.dotto.app.entity.member.Member;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberDto read(Long memberNo){
        return MemberDto.toDto(memberRepository.findByMemberNoAndDeletedYnEqualsN(memberNo).orElseThrow(MemberNotFoundException::new));
    }

    @Transactional
    public MemberUpdateResponse update(Long memberNo, MemberUpdateRequest req){
        Member member = memberRepository.findByMemberNoAndDeletedYnEqualsN(memberNo).orElseThrow(MemberNotFoundException::new);
        member.update(req.getNickname(),req.getIntro());
        return new MemberUpdateResponse(memberNo);
    }

    @Transactional
    public void delete(Long memberNo){
        Member member = memberRepository.findByMemberNoAndDeletedYnEqualsN(memberNo).orElseThrow(MemberNotFoundException::new);
        member.deleted();
    }

    public boolean existsByNickname(String nickname){
        return memberRepository.existsByNickname(nickname);
    }

    public boolean existsById(String id){
        return memberRepository.existsById(id);
    }
}

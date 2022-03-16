package com.dotto.app.service.member;

import com.dotto.app.dto.member.MemberDto;
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

    public MemberDto read(Long memNo){
        return MemberDto.toDto(memberRepository.findById(memNo).orElseThrow(MemberNotFoundException::new));
    }

    @Transactional
    public void delete(Long memNo){
        Member member = memberRepository.findById(memNo).orElseThrow(MemberNotFoundException::new);
        memberRepository.delete(member);
    }
}

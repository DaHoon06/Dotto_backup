package com.dotto.app.service.member;

import com.dotto.app.dto.member.contect.ContectCreateRequest;
import com.dotto.app.dto.member.contect.ContectCreateResponse;
import com.dotto.app.entity.member.Contect;
import com.dotto.app.entity.member.ContectType;
import com.dotto.app.entity.member.Member;
import com.dotto.app.exception.ContectTypeNotFoundException;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.repository.member.ContectRepository;
import com.dotto.app.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;

@Service
@Slf4j
@RequiredArgsConstructor
public class ContectService {

    private final ContectRepository contectRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public ContectCreateResponse create(ContectCreateRequest req){
        Member member = memberRepository.findById(req.getMemberNo()).orElseThrow(MemberNotFoundException::new);
        Contect contect = contectRepository.save(new Contect(member, req));

        return new ContectCreateResponse(member.getMemberNo());
    }



}

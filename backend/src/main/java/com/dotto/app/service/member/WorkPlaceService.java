package com.dotto.app.service.member;

import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.member.WorkPlace;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.member.WorkplaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class WorkPlaceService {

    private final WorkplaceRepository workplaceRepository;
    private final MemberRepository memberRepository;


    public void create (Long id){
        Member member = memberRepository.findById(id).orElseThrow(MemberNotFoundException::new);

    }
}

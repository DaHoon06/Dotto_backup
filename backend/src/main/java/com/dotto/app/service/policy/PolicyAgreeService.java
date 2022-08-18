package com.dotto.app.service.policy;

import com.dotto.app.dto.policy.PolicyAgreeRequest;
import com.dotto.app.dto.policy.PolicyAgreeResponse;
import com.dotto.app.entity.member.Member;
import com.dotto.app.entity.policy.Policy;
import com.dotto.app.entity.policy.PolicyAgree;
import com.dotto.app.exception.MemberNotFoundException;
import com.dotto.app.exception.PolicyNotFoundException;
import com.dotto.app.repository.member.MemberRepository;
import com.dotto.app.repository.policy.PolicyAgreeRepository;
import com.dotto.app.repository.policy.PolicyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class PolicyAgreeService {

    private final PolicyAgreeRepository policyAgreeRepository;
    private final PolicyRepository policyRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public PolicyAgreeResponse create(PolicyAgreeRequest req){
        Member member = memberRepository.findById(req.getMemberNo()).orElseThrow(MemberNotFoundException::new);
        Policy policy = policyRepository.findById(req.getPolicyNo()).orElseThrow(PolicyNotFoundException::new);
        policyAgreeRepository.save(new PolicyAgree(policy, member, req.getDottoAgreementYn(), req.getPrivateAgreementYn(), req.getMarketingAgreementYn()));
        return new PolicyAgreeResponse(member.getMemberNo());
    }

}

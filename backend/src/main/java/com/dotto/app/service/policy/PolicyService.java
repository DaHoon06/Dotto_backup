package com.dotto.app.service.policy;

import com.dotto.app.dto.policy.PolicyDto;
import com.dotto.app.entity.policy.Policy;
import com.dotto.app.exception.PolicyNotFoundException;
import com.dotto.app.repository.policy.PolicyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class PolicyService {

    private final PolicyRepository policyRepository;

    public PolicyDto read (){
        Policy policy = policyRepository.findByPolicyNoOrderByModifiedAtDescLimit1().orElseThrow(PolicyNotFoundException::new);
        return PolicyDto.toDto(policy);

    }



}

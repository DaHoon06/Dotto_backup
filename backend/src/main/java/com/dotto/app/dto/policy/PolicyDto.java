package com.dotto.app.dto.policy;

import com.dotto.app.entity.policy.Policy;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class PolicyDto {

    private String dottoPolicyContent;
    private String privatePolicyContent;
    private String marketingPolicyContent;


    public static PolicyDto toDto(Policy policy){
        return new PolicyDto(policy.getDottoPolicyContent(),
                policy.getPrivatePolicyContent(),
                policy.getMarketingPolicyContent());
    }
}

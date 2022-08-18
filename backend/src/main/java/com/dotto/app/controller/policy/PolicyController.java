package com.dotto.app.controller.policy;

import com.dotto.app.dto.response.Response;
import com.dotto.app.service.policy.PolicyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "Policy Controller", tags = "Policy")
@RestController
@RequiredArgsConstructor
public class PolicyController {

    private final PolicyService policyService;

    @ApiOperation(value = "이용약관 조회", notes = "이용약관을 조회한다")
    @GetMapping("/api/policy")
    @ResponseStatus(HttpStatus.OK)
    public Response read(){
        return Response.success(policyService.read());
    }
}

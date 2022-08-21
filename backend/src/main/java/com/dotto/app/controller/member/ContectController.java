package com.dotto.app.controller.member;

import com.dotto.app.dto.member.contect.ContectCreateRequest;
import com.dotto.app.dto.response.Response;
import com.dotto.app.service.member.ContectService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@Api(value = "Contect Controller", tags = "Contect")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ContectController {

    private final ContectService contectService;


    @ApiOperation(value = "연락 수단 생성 요청", notes = "연락 수단 생성을 요청한다")
    @PostMapping("/api/members/contect")
    @ResponseStatus(HttpStatus.CREATED)
    public Response create (ContectCreateRequest req){
        return Response.success(contectService.create(req));
    }

}

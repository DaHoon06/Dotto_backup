package com.dotto.app.controller.member;

import com.dotto.app.dto.response.Response;
import com.dotto.app.service.member.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Api(value = "Member Controller", tags = "Member")
@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @ApiOperation(value = " 사용자 정보 조회", notes = "사용자 정보를 조회 한다")
    @GetMapping("/api/members/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response read(
            @ApiParam(value = "사용자 id", required = true)
            @PathVariable Long id){
        return Response.success();
    }


    @ApiOperation(value = "사용자 정보 삭제", notes = "사용자 정보를 삭제 한다")
    @DeleteMapping("/api/members/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response delete(
            @ApiParam(value = "사용자 id", required = true)
            @PathVariable Long id){
        return Response.success();
    }

}

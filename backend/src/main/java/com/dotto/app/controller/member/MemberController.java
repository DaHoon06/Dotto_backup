package com.dotto.app.controller.member;

import com.dotto.app.dto.member.MemberUpdateRequest;
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
        return Response.success(memberService.read(id));
    }

    @ApiOperation(value = "사용자 정보 수정", notes = "사용자 정보를 수정 한다")
    @PutMapping("/api/members/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response update(
            @ApiParam(value = "사용자 id", required = true)
            @PathVariable Long id, MemberUpdateRequest req){
        return Response.success(memberService.update(id, req));
    }

    @ApiOperation(value = "사용자 정보 삭제", notes = "사용자 정보를 삭제 한다")
    @DeleteMapping("/api/members/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response delete(
            @ApiParam(value = "사용자 id", required = true)
            @PathVariable Long id){
        memberService.delete(id);
        return Response.success();
    }

    @ApiOperation(value = "닉네임 중복 여부", notes = "닉네임 중복 여부를 조회한다")
    @GetMapping("/api/members/existsbynickname/{nickname}")
    @ResponseStatus(HttpStatus.OK)
    public Response existsByNickname(
            @ApiParam(value = "중복 조회할 닉네임", required = true)
            @PathVariable String nickname){
        return Response.success(memberService.existsByNickname(nickname));
    }

    @ApiOperation(value = "아이디 중복 여부", notes = "아이디 중복 여부를 조회한다")
    @GetMapping("/api/members/existsbyid/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response existsById(
            @ApiParam(value = "중복 조회할 아이디", required = true)
            @PathVariable String id){
        return Response.success(memberService.existsById(id));
    }
}

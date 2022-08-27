package com.dotto.app.controller.member;

import com.dotto.app.dto.response.Response;
import com.dotto.app.service.member.FollowService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "Follow Controller", tags = "Follow")
@RestController
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;

    @ApiOperation(value = "팔로우 요청", notes = "팔로우를 한다")
    @GetMapping("/api/follow")
    @ResponseStatus(HttpStatus.CREATED)
    public Response follow(
            @ApiParam(value = "follow 하는 사람")
            Long followingNo,
            @ApiParam(value = "follow 당한 사람")
            Long followerNo) {
        followService.follow(followingNo, followerNo);
        return Response.success();

    }

    @ApiOperation(value = "언팔로우 요청", notes = "언팔로우를 한다")
    @DeleteMapping("/api/unfollow")
    @ResponseStatus(HttpStatus.OK)
    public Response unfollow(
            @ApiParam(value = "follow 하는 사람")
            Long followingNo,
            @ApiParam(value = "follow 당한 사람")
            Long followerNo){
        followService.unfollow(followingNo, followerNo);
        return Response.success();
    }

    @ApiOperation(value = "팔로우 상태 확인", notes = "팔로우/팔로잉 상태 확인 한다")
    @GetMapping("/api/followcheck")
    @ResponseStatus(HttpStatus.OK)
    public Response followCheck(
            @ApiParam(value = "follow 하는 사람")
            Long followingNo,
            @ApiParam(value = "follow 당한 사람")
            Long followerNo){
        return Response.success(followService.followCheck(followingNo, followerNo));
    }


}

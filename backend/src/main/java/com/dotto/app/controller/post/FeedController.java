package com.dotto.app.controller.post;

import com.dotto.app.aop.AssignMemberNo;
import com.dotto.app.dto.post.FeedCreateRequest;
import com.dotto.app.dto.post.FeedUpdateRequest;
import com.dotto.app.dto.response.Response;
import com.dotto.app.service.post.FeedService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Api(value = "Feed Controller", tags = "Feed")
@RestController
@RequiredArgsConstructor
public class FeedController {

    private final FeedService feedService;


    @ApiOperation(value = "피드 게시물 전체 목록", notes = "피드 게시물 전체 목록을 조회한다")
    @GetMapping(value = "/api/feed")
    @ResponseStatus(HttpStatus.OK)
    public Response readAll(){
        return Response.success();
    }

    @ApiOperation(value = "피드 게시물 상세 보기" ,notes = "피드 게시물을 상세 조회한다.")
    @GetMapping(value = "/api/feed/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response read(
            @ApiParam(value = "게시물 id", required = true)
            @PathVariable Long id){
        return Response.success();
    }

    @ApiOperation(value = "마이피드 보기", notes = "마이 피드를 조회한다")
    @GetMapping(value = "/api/myfeed/{id}")
    @AssignMemberNo
    @ResponseStatus(HttpStatus.OK)
    public Response readMyFeed(
            @ApiParam(value = "사용자 id", required = true)
            @PathVariable Long id){
        return Response.success();
    }

    @ApiOperation(value = "피드 게시물 작성", notes = "피드 게시물을 작성한다.")
    @PostMapping(value = "/api/feed")
    @ResponseStatus(HttpStatus.CREATED)
    public Response create(@ModelAttribute FeedCreateRequest req){
        return Response.success();
    }

    @ApiOperation(value = "피드 게시물 수정", notes = "피드 게시물을 수정한다.")
    @ResponseStatus(HttpStatus.OK)
    @PutMapping(value = "/api/feed/{id}")
    public Response update(
            @ApiParam(value = "게시물 id", required = true)
            @PathVariable Long id, FeedUpdateRequest req){
        return Response.success();
    }

    @ApiOperation(value = "피드 게시물 삭제", notes = "피드 게시물을 삭제한다.")
    @DeleteMapping(value = "/api/feed/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Response delete(
            @ApiParam(value = "게시물 id", required = true)
            @PathVariable Long id){
        return Response.success();
    }

}

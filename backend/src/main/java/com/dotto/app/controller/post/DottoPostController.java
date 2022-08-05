package com.dotto.app.controller.post;

import com.dotto.app.aop.AssignMemberNo;
import com.dotto.app.dto.post.DottoPostCreateRequest;
import com.dotto.app.dto.post.DottoPostUpdateRequest;
import com.dotto.app.dto.post.PostReadCondition;
import com.dotto.app.dto.response.Response;
import com.dotto.app.service.post.DottoPostService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Api(value = "DottoPost Controller", tags = "dottoPost")
@RestController
@RequiredArgsConstructor
@Slf4j
public class DottoPostController {

    private final DottoPostService dottoPostService;

    @ApiOperation(value = "닷투 게시글 생성", notes = "닷투 게시글을 생성한다")
    @PostMapping("/api/dottopost")
    @ResponseStatus(HttpStatus.CREATED)
    @AssignMemberNo //게시글 생성시 인증된 정보를 통해 게시글 작성자를 화면에서 받지않고 직접 지정
    public Response create(@ModelAttribute DottoPostCreateRequest req){
        return Response.success(dottoPostService.create(req));
    }

    @ApiOperation(value = "닷투 게시판 전체목록 조회", notes = "닷투게시판 목록을 조회한다")
    @GetMapping("/api/dottopost")
    @ResponseStatus(HttpStatus.OK)
    public Response readAll(PostReadCondition cond){
        return Response.success(dottoPostService.readAll(cond));
    }

    @ApiOperation(value = "닷투 게시판 상세 글 보기", notes = "닷투게시판 상세 글을 조회한다")
    @GetMapping("/api/dottopost/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response read(@PathVariable Long id){
       return Response.success(dottoPostService.read(id));
    }

    @ApiOperation(value = "닷투 게시판 글 수정", notes = "닷투게시판에 작성한 글을 수정 한다")
    @PutMapping("/api/dottopost/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response update(@PathVariable Long id, DottoPostUpdateRequest req){
        return Response.success(dottoPostService.update(id, req));
    }

    @ApiOperation(value = "닷투 게시판 글 삭제", notes = "닷투게시판 글을 삭제한다")
    @DeleteMapping("/api/dottopost/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Response delete(@PathVariable Long id){
        dottoPostService.delete(id);
        return Response.success();
    }
}

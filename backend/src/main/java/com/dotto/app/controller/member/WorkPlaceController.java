package com.dotto.app.controller.member;

import com.dotto.app.aop.AssignMemberNo;
import com.dotto.app.dto.member.workplace.WorkPlaceCreateRequest;
import com.dotto.app.dto.response.Response;
import com.dotto.app.service.member.WorkPlaceService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "workPlace Controller", tags = "WorkPlace")
@RestController
@RequiredArgsConstructor
public class WorkPlaceController {
    private final WorkPlaceService workPlaceService;

    @ApiOperation(value = "내 작업실 생성 요청", notes = "내 작업실 생성 요청을 한다")
    @PostMapping("/api/workplace")
    @ResponseStatus(HttpStatus.CREATED)
    @AssignMemberNo
    public Response create( @ModelAttribute WorkPlaceCreateRequest req){
        return Response.success(workPlaceService.create(req));
    }

}

package com.dotto.app.controller.member;

import com.dotto.app.dto.member.contact.ContactCreateRequest;
import com.dotto.app.dto.response.Response;
import com.dotto.app.service.member.ContactService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@Api(value = "Contact Controller", tags = "Contact")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ContactController {

    private final ContactService contactService;


    @ApiOperation(value = "연락 수단 생성 요청", notes = "연락 수단 생성을 요청한다")
    @PostMapping("/api/contact")
    @ResponseStatus(HttpStatus.CREATED)
    public Response create (ContactCreateRequest req){
        return Response.success(contactService.create(req));
    }

}

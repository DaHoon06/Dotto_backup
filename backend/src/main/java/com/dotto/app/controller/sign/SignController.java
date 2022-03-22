package com.dotto.app.controller.sign;

import com.dotto.app.dto.response.Response;
import com.dotto.app.dto.sign.SignInRequest;
import com.dotto.app.dto.sign.SignUpRequest;
import com.dotto.app.service.sign.SignService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static com.dotto.app.dto.response.Response.success;

@RestController
@RequiredArgsConstructor
public class SignController {

    private final SignService signService;


    @PostMapping("/api/sign-up")
    @ResponseStatus(HttpStatus.CREATED)
    public Response SignUp( @Valid @RequestBody SignUpRequest req){
        signService.SignUp(req);
        return success();
    }

    @PostMapping("/api/sign-in")
    @ResponseStatus(HttpStatus.OK)
    public Response SignIn( @Valid @RequestBody SignInRequest req){
        return success(signService.SignIn(req));
    }

    @PostMapping("/api/refresh-token")
    @ResponseStatus(HttpStatus.OK)
    public Response refreshTokenResponse ( @RequestHeader(value = "Authorization") String refreshToken){
        return success(signService.refreshToken(refreshToken));
    }
}

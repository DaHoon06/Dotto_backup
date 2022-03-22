package com.dotto.app.factory.dto;

import com.dotto.app.dto.sign.SignUpRequest;

public class SignUpRequestFactory {

    public static SignUpRequest createSignUpRequest(){
        return new SignUpRequest("email@email.com", "123456a!","nickname","m","01012345678");
    }
}

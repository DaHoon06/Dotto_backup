package com.dotto.app.factory.dto;

import com.dotto.app.dto.sign.SignInRequest;

public class SignInRequestFactory {
    public static SignInRequest createSignInRequest(){
        return new SignInRequest("email@email.com","123456a!");
    }
}

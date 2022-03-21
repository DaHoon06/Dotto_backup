package com.dotto.app.factory.dto;

import com.dotto.app.dto.sign.SignInResponse;

public class SignInResponseFactory {

    public static SignInResponse createSignInResponse(String accessToken, String refreshToken){
        return new SignInResponse(accessToken, refreshToken);
    }
}

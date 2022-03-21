package com.dotto.app.factory.dto;

import com.dotto.app.dto.sign.RefreshTokenResponse;

public class RefreshTokenResponseFactory {
    public  static RefreshTokenResponse createRefreshTokenResponse(String accessToken){
        return new RefreshTokenResponse(accessToken);
    }
}

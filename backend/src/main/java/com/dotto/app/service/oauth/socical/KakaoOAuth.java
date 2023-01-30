package com.dotto.app.service.oauth.socical;

import org.springframework.stereotype.Component;

@Component
public class KakaoOAuth implements OAuth {

    @Override
    public String getOauthURL() {
        return "";
    }

    @Override
    public String getTokenURL(String code) {
        return null;
    }
}

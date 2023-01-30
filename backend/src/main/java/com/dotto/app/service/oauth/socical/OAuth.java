package com.dotto.app.service.oauth.socical;

public interface OAuth {
    String getOauthURL();
    String getTokenURL(String code);
}

package com.dotto.app.service.oauth.socical;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

@Component
@RequiredArgsConstructor
public class GoogleOAuth implements OAuth {

    @Value("${sns.google.url}")
    private String GOOGLE_BASE_URL;
    @Value("${sns.google.token-url}")
    private String GOOGLE_TOKEN_URL;
    @Value("${sns.google.client.id}")
    private String GOOGLE_CLIENT_ID;
    @Value("${sns.google.callback.url}")
    private String GOOGLE_REDIRECT_URL;
    @Value("${sns.google.client.secret}")
    private String GOOGLE_CLIENT_SECRET;
    @Value("${sns.google.scope}")
    private String GOOGLE_SCOPE;

    @Override
    public String getOauthURL() {
        return   UriComponentsBuilder.fromUriString(GOOGLE_BASE_URL)
                .queryParam("client_id",GOOGLE_CLIENT_ID)
                .queryParam("redirect_uri",GOOGLE_REDIRECT_URL)
                .queryParam("scope",GOOGLE_SCOPE)
                .queryParam("response_type", "code")
                .toUriString();
    }
    @Override
    public String getTokenURL(String code) {
        return   UriComponentsBuilder.fromUriString(GOOGLE_TOKEN_URL)
                .queryParam("client_id",GOOGLE_CLIENT_ID)
                .queryParam("redirect_uri",GOOGLE_REDIRECT_URL)
                .queryParam("client_secret",GOOGLE_CLIENT_SECRET)
                .queryParam("code",code)
                .queryParam("grant_type", "authorization_code")
                .toUriString();
    }
}

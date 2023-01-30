package com.dotto.app.service.oauth;

import com.dotto.app.config.constants.LoginType;
import com.dotto.app.service.oauth.socical.GoogleOAuth;
import com.dotto.app.service.oauth.socical.KakaoOAuth;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RequiredArgsConstructor
@Service
public class OAuthService {

    private final GoogleOAuth googleOAuth;
    private final KakaoOAuth kakaoOAuth;
    private final HttpServletResponse response;

    public void request(LoginType loginType){
        String redirectURL;

        switch (loginType) {
            case GOOGLE: {
                redirectURL = googleOAuth.getOauthURL();
            } break;
            case KAKAO: {
                redirectURL = kakaoOAuth.getOauthURL();
            } break;
            default: {
                throw new IllegalArgumentException("알 수 없는 로그인 형식.");
            }
        }
        try {
            response.sendRedirect(redirectURL);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public void requestToken(LoginType loginType,String code){
        String redirectURL;
        RestTemplate restTemplate = new RestTemplate();
        switch (loginType) {
            case GOOGLE: {
                redirectURL = googleOAuth.getTokenURL(code);
            } break;
            case KAKAO: {
                redirectURL = kakaoOAuth.getTokenURL(code);
            } break;
            default: {
                throw new IllegalArgumentException("알 수 없는 로그인 형식");
            }
        }

        String response = restTemplate.exchange(redirectURL, HttpMethod.POST,null, String.class).getBody();
        System.out.println(response);
    }




}

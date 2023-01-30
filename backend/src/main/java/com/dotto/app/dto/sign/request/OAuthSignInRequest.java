package com.dotto.app.dto.sign.request;


import lombok.Getter;
import org.apache.tomcat.util.codec.binary.Base64;



@Getter
public class OAuthSignInRequest {

    private final String id;
    private final String loginType;

    public OAuthSignInRequest(String idToken, String loginType){
        this.id = extractSubFromGoogleIdToken(idToken) + loginType;
        this.loginType = loginType;

    }

    // Json -> Map 담아서 찾도록 변경
    public String extractSubFromGoogleIdToken(String idToken){
        String[] token = idToken.split("\\.");
        String payload = new String(Base64.decodeBase64(token[1]));
        String[] sub = payload.split(",");
        return sub[3].substring(7,28);
    }

}

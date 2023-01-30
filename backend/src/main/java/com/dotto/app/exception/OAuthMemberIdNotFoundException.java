package com.dotto.app.exception;

public class OAuthMemberIdNotFoundException extends RuntimeException{

    public OAuthMemberIdNotFoundException(){ super("회원 정보가 없습니다."); }
}

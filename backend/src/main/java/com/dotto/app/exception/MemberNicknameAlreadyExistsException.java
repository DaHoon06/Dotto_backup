package com.dotto.app.exception;

public class MemberNicknameAlreadyExistsException extends RuntimeException{
    public MemberNicknameAlreadyExistsException(String msg){
        super(msg);
    }
}

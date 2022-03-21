package com.dotto.app.exception;

public class MemberEmailAlreadyExistsException extends RuntimeException{
    public MemberEmailAlreadyExistsException(String msg){
        super(msg);
    }
}

package com.dotto.app.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class ApiParamAop {

    @Pointcut("execution(* com.dotto.app.controller..*.*(..))")
    public void cut(){}

    @Before("cut()")
    public void before(JoinPoint joinPoint){
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        log.info("AOP --- Request api :: "+methodSignature.getMethod().getName());

        Object[] args = joinPoint.getArgs();
        for(Object obj : args){
            log.info("AOP --- Request value :: " + obj);
        }
    }

//    @AfterReturning(value = "cut()", returning = "returnObj")
//    public void afterReturn(JoinPoint joinPoint, Object returnObj){
//        log.info("AOP --- Response obj  " + returnObj.toString());
//
//    }
}

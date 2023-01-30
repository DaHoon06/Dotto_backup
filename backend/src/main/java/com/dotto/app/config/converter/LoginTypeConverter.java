package com.dotto.app.config.converter;

import com.dotto.app.config.constants.LoginType;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;

@Configuration
public class LoginTypeConverter implements Converter<String, LoginType> {
    @Override
    public LoginType convert(String loginType) {
        return LoginType.valueOf(loginType.toUpperCase());
    }

}

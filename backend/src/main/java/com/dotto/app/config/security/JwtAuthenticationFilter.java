package com.dotto.app.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Optional;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final CustomUserDetailsService userDetailsService;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        extractToken(request).map(userDetailsService::loadUserByUsername).ifPresent(this::setAuthentication);
        chain.doFilter(request,response);
    }


    private Optional<String> extractToken(ServletRequest request){
        return Optional.ofNullable(((HttpServletRequest) request).getHeader("Authorization"));
    }

    private void setAuthentication(CustomUserDetails userDetails){
        SecurityContextHolder.getContext().setAuthentication(new CustomAuthenticationToken(userDetails, userDetails.getAuthorities()));
    }
}

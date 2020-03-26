package pl.owldev.securityplayground.config;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.http.HttpStatus.UNAUTHORIZED;

public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException {
        response.setStatus(UNAUTHORIZED.value());
        response.sendRedirect(request.getContextPath() + "/login?error=failure");
    }

}

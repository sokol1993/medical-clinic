package pl.dmcs.ksokolowski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.dmcs.ksokolowski.dao.TokenDAO;
import pl.dmcs.ksokolowski.domain.Token;

/**
 * Created by sokol on 2016-11-29.
 */
@Service
public class TokenServiceImpl implements TokenService {

    @Autowired
    private TokenDAO tokenDAO;

    @Override
    public void addToken(Token token) {
        tokenDAO.addToken(token);
    }

    @Override
    public Token getToken(int id) {
        return tokenDAO.getToken(id);
    }

    @Override
    public void removeToken(Token token) {
        tokenDAO.removeToken(token);
    }
}

package pl.dmcs.ksokolowski.dao;

import pl.dmcs.ksokolowski.domain.Token;

/**
 * Created by sokol on 2016-11-29.
 */
public interface TokenDAO {
    void addToken(Token token);

    Token getToken(int id);

    void removeToken(Token token);
}

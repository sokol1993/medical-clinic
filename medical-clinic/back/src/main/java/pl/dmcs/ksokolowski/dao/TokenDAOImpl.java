package pl.dmcs.ksokolowski.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.domain.Token;

/**
 * Created by sokol on 2016-11-29.
 */
@Transactional
@Repository
public class TokenDAOImpl implements TokenDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void addToken(Token token) {
        sessionFactory.getCurrentSession().save(token);
    }

    @Override
    public Token getToken(int id) {
        return (Token) sessionFactory.getCurrentSession().get(Token.class, id);
    }

    @Override
    public void removeToken(Token token) {
        sessionFactory.getCurrentSession().delete(token);
    }
}

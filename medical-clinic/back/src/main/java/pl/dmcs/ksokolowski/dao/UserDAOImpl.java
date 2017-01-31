package pl.dmcs.ksokolowski.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import pl.dmcs.ksokolowski.domain.User;

import java.util.*;

@Transactional
@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private SessionFactory sessionFactory;

    public void addUser(User user) {
        sessionFactory.getCurrentSession().save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return sessionFactory.getCurrentSession().createQuery("from User order by id").list();
    }

    @Override
    public void updateUser(User user) {
        sessionFactory.getCurrentSession().update(user);
    }

    @Override
    public User getUser(int id) {
        return (User) sessionFactory.getCurrentSession().get(User.class, id);
    }

}

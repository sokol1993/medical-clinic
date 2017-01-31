package pl.dmcs.ksokolowski.dao;

import java.util.*;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.domain.Doctor;
import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.domain.User;
import pl.dmcs.ksokolowski.domain.UserRole;

/**
 * Created by sokol on 2016-11-22.
 */
@Transactional
@Repository
public class LoginDAOImpl implements LoginDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void addLogin(Login login) {
        sessionFactory.getCurrentSession().save(login);
    }

    @Override
    public List<Login> listLogin() {
        return sessionFactory.getCurrentSession().createQuery("from Login order by id").list();
    }

    @Override
    public Login getLogin(int id) {
        return (Login) sessionFactory.getCurrentSession().get(Login.class, id);
    }

    @Override
    public void updateLogin(Login login) {
        sessionFactory.getCurrentSession().update(login);
    }

    @Override
    public boolean checkUserExists(String name) {

        List<String> usersNames = sessionFactory.getCurrentSession().createQuery("select login from Login").list();

        return usersNames.contains(name);
    }

    @Override
    public void removeLogin(Login login) {
        sessionFactory.getCurrentSession().delete(login);
    }

    @Override
    public void removeDoctor(Doctor doctor) {
        sessionFactory.getCurrentSession().delete(doctor);
    }

    @Override
    public void removeUser(User user) {
        sessionFactory.getCurrentSession().delete(user);
    }


    public void addRole(UserRole userRole) {
        sessionFactory.getCurrentSession().save(userRole);
    }

    public List<UserRole> listUserRole() {
        return sessionFactory.getCurrentSession().createQuery("from UserRole order by id").list();
    }

    public void removeUserRole(int id) {
        UserRole userRole = (UserRole) sessionFactory.getCurrentSession().load(
                UserRole.class, id);
        if (null != userRole) {
            sessionFactory.getCurrentSession().delete(userRole);
        }
    }

    public UserRole getUserRole(int id) {
        return (UserRole) sessionFactory.getCurrentSession().get(UserRole.class, id);
    }

    @SuppressWarnings("unchecked")
    public UserRole findRoleByName(String role) {

        List<UserRole> userRole = new ArrayList<UserRole>();

        userRole = sessionFactory.getCurrentSession()
                .createQuery("from UserRole where role=?")
                .setParameter(0, role)
                .list();

        if (userRole.size() > 0) {
            return userRole.get(0);
        } else {
            return null;
        }
    }
}

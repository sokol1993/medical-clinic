package pl.dmcs.ksokolowski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.dao.LoginDAO;
import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.domain.UserRole;

import java.util.List;

/**
 * Created by sokol on 2016-11-22.
 */
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginDAO loginDAO;

    @Override
    public void addLogin(Login login) {
        loginDAO.addLogin(login);
    }

    @Override
    public List<Login> listLogin() {
        return loginDAO.listLogin();
    }

    @Override
    public Login getLogin(int id) {
        return loginDAO.getLogin(id);
    }

    @Override
    public void updateLogin(Login login) {
        loginDAO.updateLogin(login);
    }

    @Override
    public boolean checkUserExists(String name) {
        return loginDAO.checkUserExists(name);
    }

    @Transactional
    @Override
    public void removeLoginDoctor(int id) {
        Login login = loginDAO.getLogin(id);
        if (login.getDoctor() != null) {
            loginDAO.removeDoctor(login.getDoctor());
        }
        loginDAO.removeLogin(login);
    }

    @Override
    public void removeLoginUser(int id) {
        Login login = loginDAO.getLogin(id);
        loginDAO.removeLogin(login);
    }

    @Override
    public void addRole(UserRole userRole) {
        loginDAO.addRole(userRole);
    }

    @Transactional
    @Override
    public List<UserRole> listUserRole() {
        return loginDAO.listUserRole();
    }

    @Transactional
    @Override
    public UserRole findRoleByName(String role) {
        return loginDAO.findRoleByName(role);
    }

    @Override
    public void removeUserRole(int id) {
        loginDAO.removeUserRole(id);
    }

    @Transactional
    @Override
    public UserRole getUserRole(int id) {
        return loginDAO.getUserRole(id);
    }
}

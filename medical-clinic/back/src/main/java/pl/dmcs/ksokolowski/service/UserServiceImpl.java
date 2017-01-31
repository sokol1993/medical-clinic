package pl.dmcs.ksokolowski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.dao.LoginDAO;
import pl.dmcs.ksokolowski.dao.TokenDAO;
import pl.dmcs.ksokolowski.dao.UserDAO;
import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.domain.Token;
import pl.dmcs.ksokolowski.domain.User;
import pl.dmcs.ksokolowski.utils.EmailSender;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Autowired
    private TokenDAO tokenDAO;

    @Autowired
    private LoginDAO loginDAO;

    @Override
    @Transactional
    public void addUser(Login login) {
        login.getUserRole().add(loginDAO.findRoleByName("ROLE_USER"));
        String uuid = UUID.randomUUID().toString();
        Token token = new Token();
        token.setToken(uuid);
        tokenDAO.addToken(token);
        login.setToken(token);
        userDAO.addUser(login.getUser());
        loginDAO.addLogin(login);
    }

    @Override
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }


    @Override
    @Transactional
    public void updateUser(Login login) {
        userDAO.updateUser(login.getUser());
        loginDAO.updateLogin(login);
    }

    @Override
    public User getUser(int id) {
        return userDAO.getUser(id);
    }

    @Override
    @Transactional
    public void userActivation(String token, int id) {
        Token t = tokenDAO.getToken(id);
        List<Login> logins;
        if (t != null && t.getToken().equals(token)) {
            logins = loginDAO.listLogin();
            for (Login u : logins) {
                if (u.getToken() != null && u.getToken().getId() == id) {
                    u.setActive(true);
                    u.setToken(null);
                    loginDAO.updateLogin(u);
                    tokenDAO.removeToken(t);
                }
            }
        }
    }

    @Override
    @Transactional
    public void deactivationUser(int id) {
        Login login = loginDAO.getLogin(id);
        login.setActive(false);
        loginDAO.updateLogin(login);
    }


    @Override
    @Transactional
    public void activationUser(int id) {
        Login login = loginDAO.getLogin(id);
        login.setActive(true);
        loginDAO.updateLogin(login);
    }
}

package pl.dmcs.ksokolowski.service;

import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.domain.UserRole;

import java.util.List;

/**
 * Created by sokol on 2016-11-22.
 */
public interface LoginService {
    void addLogin(Login login);

    List<Login> listLogin();

    Login getLogin(int id);

    void updateLogin(Login login);

    boolean checkUserExists(String name);

    void removeLoginDoctor(int id);

    void removeLoginUser(int id);

    void addRole(UserRole userRole);

    List<UserRole> listUserRole();

    UserRole findRoleByName(String role);

    void removeUserRole(int id);

    UserRole getUserRole(int id);
}

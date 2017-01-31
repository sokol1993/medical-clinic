package pl.dmcs.ksokolowski.dao;

import pl.dmcs.ksokolowski.domain.Doctor;
import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.domain.User;
import pl.dmcs.ksokolowski.domain.UserRole;

import java.util.List;

/**
 * Created by sokol on 2016-11-22.
 */
public interface LoginDAO {
    void addLogin(Login login);

    List<Login> listLogin();

    Login getLogin(int id);

    void updateLogin(Login login);

    boolean checkUserExists(String name);

    void removeLogin(Login login);

    void removeDoctor(Doctor doctor);

    void removeUser(User user);

    void addRole(UserRole userRole);

    List<UserRole> listUserRole();

    void removeUserRole(int id);

    UserRole getUserRole(int id);

    UserRole findRoleByName(String role);
}

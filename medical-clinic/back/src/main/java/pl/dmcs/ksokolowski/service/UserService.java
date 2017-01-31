package pl.dmcs.ksokolowski.service;

import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.domain.User;

import java.util.List;

public interface UserService {
    void addUser(Login login);

    List<User> getAllUsers();

    void updateUser(Login login);

    User getUser(int id);

    void userActivation(String token, int id);

    void activationUser(int id);

    void deactivationUser(int id);
}

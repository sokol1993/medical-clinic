package pl.dmcs.ksokolowski.dao;

import pl.dmcs.ksokolowski.domain.User;

import java.util.List;

public interface UserDAO {
    void addUser(User user);

    List<User> getAllUsers();

    void updateUser(User user);

    User getUser(int id);
}

package pl.dmcs.ksokolowski.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

/**
 * Created by sokol on 2016-12-01.
 */
@Entity
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String login;
    private String password;

    private boolean active = false;

    @JsonIgnore
    @OneToOne
    private Token token;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToMany
    @JsonIgnore
    @LazyCollection(LazyCollectionOption.FALSE)
    private Set<UserRole> userRole = new HashSet<UserRole>(0);

    public Set<UserRole> getUserRole() {
        return userRole;
    }

    public void setUserRole(Set<UserRole> userRole) {
        this.userRole = userRole;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

//    public Set<UserRole> getUserRole() {
    //       return userRole;
    //  }

    //  public void setUserRole(Set<UserRole> userRole) {
    //     this.userRole = userRole;
    // }
}

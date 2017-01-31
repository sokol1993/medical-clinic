package pl.dmcs.ksokolowski.domain;

import javax.persistence.*;

/**
 * Created by sokol on 2016-11-29.
 */
@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String token;

    @OneToOne(mappedBy = "token")
    private Login login;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }
}

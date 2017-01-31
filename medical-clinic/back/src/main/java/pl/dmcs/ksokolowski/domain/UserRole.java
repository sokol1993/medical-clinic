package pl.dmcs.ksokolowski.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by sokol on 2016-12-01.
 */

@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    private String role;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

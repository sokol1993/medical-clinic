package pl.dmcs.ksokolowski.domain;

import java.util.Date;
import javax.persistence.*;

/**
 * Created by sokol on 2016-12-06.
 */
@Entity
public class MedicalVisit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @Temporal(TemporalType.DATE)
    private Date date;

    @Temporal(TemporalType.TIME)
    private Date time;

    private boolean isCompleted = false;

    private int idList;

    public int getIdList() {
        return idList;
    }

    public void setIdList(int idList) {
        this.idList = idList;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }
}

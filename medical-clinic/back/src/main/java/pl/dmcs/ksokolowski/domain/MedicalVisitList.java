package pl.dmcs.ksokolowski.domain;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by sokol on 2017-01-17.
 */
@Entity
public class MedicalVisitList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @Temporal(TemporalType.DATE)
    private Date date;

    @Temporal(TemporalType.TIME)
    private Date time;

    private int availableVisits;

    public int getAvailableVisits() {
        return availableVisits;
    }

    public void setAvailableVisits(int availableVisits) {
        this.availableVisits = availableVisits;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}

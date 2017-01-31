package pl.dmcs.ksokolowski.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by sokol on 2016-11-17.
 */
@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @OneToOne(mappedBy = "doctor")
    private Login login;

    private String firstName;
    private String lastName;

    @ManyToOne
    private Specialization medicalSpecialization;

    private String mondayHours;
    private String tuesdayHours;
    private String wednesdayHours;
    private String thursdayHours;
    private String fridayHours;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Specialization getMedicalSpecialization() {
        return medicalSpecialization;
    }

    public void setMedicalSpecialization(Specialization medicalSpecialization) {
        this.medicalSpecialization = medicalSpecialization;
    }

    public String getMondayHours() {
        return mondayHours;
    }

    public void setMondayHours(String mondayHours) {
        this.mondayHours = mondayHours;
    }

    public String getTuesdayHours() {
        return tuesdayHours;
    }

    public void setTuesdayHours(String tuesdayHours) {
        this.tuesdayHours = tuesdayHours;
    }

    public String getWednesdayHours() {
        return wednesdayHours;
    }

    public void setWednesdayHours(String wednesdayHours) {
        this.wednesdayHours = wednesdayHours;
    }

    public String getThursdayHours() {
        return thursdayHours;
    }

    public void setThursdayHours(String thursdayHours) {
        this.thursdayHours = thursdayHours;
    }

    public String getFridayHours() {
        return fridayHours;
    }

    public void setFridayHours(String fridayHours) {
        this.fridayHours = fridayHours;
    }
}

package pl.dmcs.ksokolowski.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by sokol on 2016-11-22.
 */
import java.util.List;

@Entity
public class Specialization {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    private String specializationName;

    @JsonIgnore
    @OneToMany(mappedBy = "medicalSpecialization")
    private List<Doctor> doctorList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSpecializationName() {
        return specializationName;
    }

    public void setSpecializationName(String specializationName) {
        this.specializationName = specializationName;
    }

    public List<Doctor> getDoctorList() {
        return doctorList;
    }

    public void setDoctorList(List<Doctor> doctorList) {
        this.doctorList = doctorList;
    }
}

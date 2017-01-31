package pl.dmcs.ksokolowski.dao;

import pl.dmcs.ksokolowski.domain.Doctor;

import java.util.List;

/**
 * Created by sokol on 2016-11-17.
 */
public interface DoctorDAO {
    List<Doctor> getAllDoctors();

    void addDoctor(Doctor doctor);

    Doctor getDoctor(int id);

    void updateDoctor(Doctor doctor);
}

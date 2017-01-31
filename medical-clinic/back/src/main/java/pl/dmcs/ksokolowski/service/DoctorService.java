package pl.dmcs.ksokolowski.service;

import pl.dmcs.ksokolowski.domain.Doctor;
import pl.dmcs.ksokolowski.domain.Login;

import java.util.List;

/**
 * Created by sokol on 2016-11-17.
 */
public interface DoctorService {
    List<Doctor> getAllDoctors();

    void addDoctor(Login login);

    Doctor getDoctor(int id);

    void updateDoctor(Login login);

    void deactivationDoctor(int id);

    void activationDoctor(int id);
}

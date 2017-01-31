package pl.dmcs.ksokolowski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.dao.DoctorDAO;
import pl.dmcs.ksokolowski.dao.LoginDAO;
import pl.dmcs.ksokolowski.domain.Doctor;
import pl.dmcs.ksokolowski.domain.Login;

import java.util.List;

/**
 * Created by sokol on 2016-11-17.
 */

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorDAO doctorDAO;

    @Autowired
    private LoginDAO loginDAO;

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorDAO.getAllDoctors();
    }

    @Override
    @Transactional
    public void addDoctor(Login login) {
        login.getUserRole().add(loginDAO.findRoleByName("ROLE_DOCTOR"));
        doctorDAO.addDoctor(login.getDoctor());
        loginDAO.addLogin(login);
    }

    @Override
    public Doctor getDoctor(int id) {
        return doctorDAO.getDoctor(id);
    }

    @Override
    @Transactional
    public void updateDoctor(Login login) {
        doctorDAO.updateDoctor(login.getDoctor());
        loginDAO.updateLogin(login);
    }

    @Override
    @Transactional
    public void deactivationDoctor(int id) {
        Login login = loginDAO.getLogin(id);
        login.setActive(false);
        loginDAO.updateLogin(login);
    }


    @Override
    @Transactional
    public void activationDoctor(int id) {
        Login login = loginDAO.getLogin(id);
        login.setActive(true);
        loginDAO.updateLogin(login);
    }
}

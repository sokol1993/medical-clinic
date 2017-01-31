package pl.dmcs.ksokolowski.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.domain.Doctor;

import java.util.List;

/**
 * Created by sokol on 2016-11-17.
 */
@Transactional
@Repository
public class DoctorDAOImpl implements DoctorDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Doctor> getAllDoctors() {
        return sessionFactory.getCurrentSession().createQuery("from Doctor order by id").list();
    }

    @Override
    public void addDoctor(Doctor doctor) {
        sessionFactory.getCurrentSession().save(doctor);
    }

    @Override
    public Doctor getDoctor(int id) {
        return (Doctor) sessionFactory.getCurrentSession().get(Doctor.class, id);
    }

    @Override
    public void updateDoctor(Doctor doctor) {
        sessionFactory.getCurrentSession().update(doctor);
    }
}

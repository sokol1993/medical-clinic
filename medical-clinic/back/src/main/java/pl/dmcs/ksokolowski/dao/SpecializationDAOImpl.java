package pl.dmcs.ksokolowski.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.domain.Specialization;

import java.util.List;

/**
 * Created by sokol on 2016-11-22.
 */
@Transactional
@Repository
public class SpecializationDAOImpl implements SpecializationDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void addSpecialization(Specialization specialization) {
        sessionFactory.getCurrentSession().save(specialization);
    }

    @Override
    public List<Specialization> listSpecialization() {
        return sessionFactory.getCurrentSession().createQuery("from Specialization order by id").list();
    }

    @Override
    public Specialization getSpecialization(int id) {
        return (Specialization) sessionFactory.getCurrentSession().get(Specialization.class, id);
    }
}

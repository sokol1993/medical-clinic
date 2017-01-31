package pl.dmcs.ksokolowski.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.domain.MedicalVisit;
import pl.dmcs.ksokolowski.domain.MedicalVisitList;

import java.util.List;

/**
 * Created by sokol on 2016-12-07.
 */
@Transactional
@Repository
public class MedicalVisitDAOImpl implements MedicalVisitDAO {

    @Autowired
    private SessionFactory sessionFactory;


    @Override
    public void addVisitList(MedicalVisitList visitList) {
        sessionFactory.getCurrentSession().save(visitList);
    }

    @Override
    public void updateVisitList(MedicalVisitList visitList) {
        sessionFactory.getCurrentSession().update(visitList);
    }

    @Override
    public MedicalVisitList getVisitList(int id) {
        return (MedicalVisitList) sessionFactory.getCurrentSession().get(MedicalVisitList.class, id);
    }

    @Override
    public void removeVisitList(MedicalVisitList visitList) {
        sessionFactory.getCurrentSession().delete(visitList);
    }

    @Override
    public List<MedicalVisitList> getDoctorVisitsList(int doctorId) {
        List<MedicalVisitList> visits;
        visits = sessionFactory.getCurrentSession()
                .createQuery("from MedicalVisitList where doctor_id=?")
                .setParameter(0, doctorId)
                .list();
        return visits;
    }

    @Override
    public void addVisit(MedicalVisit visit) {
        sessionFactory.getCurrentSession().save(visit);
    }

    @Override
    public List<MedicalVisit> getUserVisits(int userId) {
        List<MedicalVisit> visits;
        visits = sessionFactory.getCurrentSession()
                .createQuery("from MedicalVisit where user_id=?")
                .setParameter(0, userId)
                .list();
        return visits;
    }

    @Override
    public List<MedicalVisit> getDoctorVisits(int doctorId) {
        List<MedicalVisit> visits;
        visits = sessionFactory.getCurrentSession()
                .createQuery("from MedicalVisit where doctor_id=?")
                .setParameter(0, doctorId)
                .list();
        return visits;
    }

    @Override
    public List<MedicalVisit> getAllVisits() {
        return sessionFactory.getCurrentSession().createQuery("from MedicalVisit order by id").list();
    }

    @Override
    public void updateVisit(MedicalVisit visit) {
        sessionFactory.getCurrentSession().update(visit);
    }

    @Override
    public MedicalVisit getVisit(int id) {
        return (MedicalVisit) sessionFactory.getCurrentSession().get(MedicalVisit.class, id);
    }

    @Override
    public void removeVisit(MedicalVisit visit) {
        sessionFactory.getCurrentSession().delete(visit);
    }
}

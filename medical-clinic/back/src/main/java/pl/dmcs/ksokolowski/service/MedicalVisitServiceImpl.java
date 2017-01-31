package pl.dmcs.ksokolowski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.dmcs.ksokolowski.dao.MedicalVisitDAO;
import pl.dmcs.ksokolowski.domain.MedicalVisit;
import pl.dmcs.ksokolowski.domain.MedicalVisitList;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by sokol on 2016-12-07.
 */
@Service
public class MedicalVisitServiceImpl implements MedicalVisitService {

    @Autowired
    private MedicalVisitDAO medicalVisitDAO;

    @Override
    public void addVisitList(MedicalVisitList visitList) {
        SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeformat = new SimpleDateFormat("hh:mm");
        int a = visitList.getAvailableVisits();
        for(int i=0; i<a;i++){
            visitList.setAvailableVisits(1);
            Date tmp = visitList.getDate();
            if(i==0){
                tmp.setTime(tmp.getTime());
            } else {
                tmp.setTime(tmp.getTime()+900000);
            }
            visitList.setTime(tmp);
            medicalVisitDAO.addVisitList(visitList);

        }
      //  String time = timeformat.format(visit.getDate());
     //   String date = DATE_FORMAT.format(visit.getDate());
     //   medicalVisitDAO.addVisitList(visitList);
    }

    @Override
    public void updateVisitList(MedicalVisitList visitList) {
        medicalVisitDAO.updateVisitList(visitList);
    }

    @Transactional
    @Override
    public void removeVisitList(int id) {
        MedicalVisitList visitList = medicalVisitDAO.getVisitList(id);
        medicalVisitDAO.removeVisitList(visitList);
    }

    @Override
    public List<MedicalVisitList> getDoctorVisitsList(int doctorId) {
        return medicalVisitDAO.getDoctorVisitsList(doctorId);
    }

    @Override
    @Transactional
    public void addVisit(MedicalVisit visit) {
        MedicalVisitList visitList = medicalVisitDAO.getVisitList(visit.getIdList());
        visit.setDate(visitList.getDate());
        visit.setTime(visitList.getTime());
        medicalVisitDAO.removeVisitList(visitList);
        medicalVisitDAO.addVisit(visit);
    }

    @Override
    @Transactional
    public void confirmVisit(int id) {
        MedicalVisit visit = medicalVisitDAO.getVisit(id);
        visit.setCompleted(true);
        medicalVisitDAO.updateVisit(visit);
    }

    @Override
    public List<MedicalVisit> getUserVisits(int userId) {
        return medicalVisitDAO.getUserVisits(userId);
    }

    @Override
    public List<MedicalVisit> getDoctorVisits(int doctorId) {
        return medicalVisitDAO.getDoctorVisits(doctorId);
    }

    @Override
    public List<MedicalVisit> getAllVisits() {
        return medicalVisitDAO.getAllVisits();
    }

    @Override
    public void updateVisit(MedicalVisit visit) {
        medicalVisitDAO.updateVisit(visit);
    }

    @Override
    public MedicalVisit getVisit(int id) {
        return medicalVisitDAO.getVisit(id);
    }

    @Transactional
    @Override
    public void removeVisit(int id) {
        MedicalVisit visit = medicalVisitDAO.getVisit(id);
        if (!visit.isCompleted()) {
            medicalVisitDAO.removeVisit(visit);
        }
    }
}

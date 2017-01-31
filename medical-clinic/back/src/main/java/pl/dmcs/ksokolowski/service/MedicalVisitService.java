package pl.dmcs.ksokolowski.service;

import pl.dmcs.ksokolowski.domain.MedicalVisit;
import pl.dmcs.ksokolowski.domain.MedicalVisitList;

import java.util.List;

/**
 * Created by sokol on 2016-12-07.
 */

public interface MedicalVisitService {
    void addVisitList(MedicalVisitList visitList);

    void updateVisitList(MedicalVisitList visitList);

    void removeVisitList(int id);

    List<MedicalVisitList> getDoctorVisitsList(int doctorId);

    void addVisit(MedicalVisit visit);

    void confirmVisit(int id);

    List<MedicalVisit> getUserVisits(int userId);

    List<MedicalVisit> getDoctorVisits(int doctorId);

    List<MedicalVisit> getAllVisits();

    void updateVisit(MedicalVisit visit);

    MedicalVisit getVisit(int id);

    void removeVisit(int id);
}

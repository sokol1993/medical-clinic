package pl.dmcs.ksokolowski.dao;

import java.util.*;

import pl.dmcs.ksokolowski.domain.MedicalVisit;
import pl.dmcs.ksokolowski.domain.MedicalVisitList;

/**
 * Created by sokol on 2016-12-07.
 */
public interface MedicalVisitDAO {
    void addVisitList(MedicalVisitList visitList);

    void updateVisitList(MedicalVisitList visitList);

    MedicalVisitList getVisitList(int id);

    void removeVisitList(MedicalVisitList visitList);

    List<MedicalVisitList> getDoctorVisitsList(int doctorId);

    void addVisit(MedicalVisit visit);

    List<MedicalVisit> getUserVisits(int userId);

    List<MedicalVisit> getDoctorVisits(int doctorId);

    List<MedicalVisit> getAllVisits();

    void updateVisit(MedicalVisit visit);

    MedicalVisit getVisit(int id);

    void removeVisit(MedicalVisit visit);
}

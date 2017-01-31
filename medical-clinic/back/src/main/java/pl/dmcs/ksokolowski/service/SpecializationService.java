package pl.dmcs.ksokolowski.service;

import java.util.List;

import pl.dmcs.ksokolowski.domain.Specialization;

/**
 * Created by sokol on 2016-11-22.
 */
public interface SpecializationService {
    void addSpecialization(Specialization specialization);

    List<Specialization> listSpecialization();

    Specialization getSpecialization(int id);

}

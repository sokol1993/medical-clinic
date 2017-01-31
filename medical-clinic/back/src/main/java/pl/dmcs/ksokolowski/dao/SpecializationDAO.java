package pl.dmcs.ksokolowski.dao;

import pl.dmcs.ksokolowski.domain.Specialization;

import java.util.List;

/**
 * Created by sokol on 2016-11-22.
 */
public interface SpecializationDAO {
    void addSpecialization(Specialization specialization);

    List<Specialization> listSpecialization();

    Specialization getSpecialization(int id);
}

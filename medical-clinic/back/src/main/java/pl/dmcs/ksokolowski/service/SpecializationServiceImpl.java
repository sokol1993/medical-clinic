package pl.dmcs.ksokolowski.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.dmcs.ksokolowski.dao.SpecializationDAO;
import pl.dmcs.ksokolowski.domain.Specialization;

import java.util.List;

/**
 * Created by sokol on 2016-11-22.
 */
@Service
public class SpecializationServiceImpl implements SpecializationService {

    @Autowired
    private SpecializationDAO specializationDAO;

    @Override
    public void addSpecialization(Specialization specialization) {
        specializationDAO.addSpecialization(specialization);
    }

    @Override
    public List<Specialization> listSpecialization() {
        return specializationDAO.listSpecialization();
    }

    @Override
    public Specialization getSpecialization(int id) {
        return specializationDAO.getSpecialization(id);
    }
}

package pl.dmcs.ksokolowski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import pl.dmcs.ksokolowski.domain.Specialization;
import pl.dmcs.ksokolowski.service.SpecializationService;

import java.util.List;

/**
 * Created by sokol on 2016-11-22.
 */
@Controller
@RequestMapping("/")
public class SpecializationController {

    @Autowired
    private SpecializationService specializationService;

    @RequestMapping(value = "/specializations", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    List<Specialization> specializations() {
        return specializationService.listSpecialization();
    }

    @RequestMapping(value = "/addSpecialization", method = RequestMethod.POST, consumes = "application/json")
    public
    @ResponseBody
    Specialization addSpecialization(@RequestBody Specialization specialization) {
        specializationService.addSpecialization(specialization);
        return specialization;
    }

}

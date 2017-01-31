package pl.dmcs.ksokolowski.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import pl.dmcs.ksokolowski.domain.MedicalVisit;
import pl.dmcs.ksokolowski.domain.MedicalVisitList;
import pl.dmcs.ksokolowski.service.MedicalVisitService;

/**
 * Created by sokol on 2016-12-07.
 */
@Controller
@RequestMapping("/")
public class VisitController {

    @Autowired
    private MedicalVisitService medicalVisitService;

    @RequestMapping(value = "/addVisitList", method = RequestMethod.POST, consumes = "application/json")
    public
    @ResponseBody
    MedicalVisitList addVisitList(@RequestBody MedicalVisitList visitList) {
        medicalVisitService.addVisitList(visitList);
        return visitList;
    }

    @RequestMapping(value = "/addVisit", method = RequestMethod.POST, consumes = "application/json")
    public
    @ResponseBody
    MedicalVisit addVisit(@RequestBody MedicalVisit visit) {
        medicalVisitService.addVisit(visit);
        return visit;
    }

    @RequestMapping(value = "/confirmVisit/visit/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity confirmVisit(@PathVariable("id") Integer id) {
        medicalVisitService.confirmVisit(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/getUserVisits/visit/{id}", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    List<MedicalVisit> getUserVisits(@PathVariable("id") Integer id) {
        return medicalVisitService.getUserVisits(id);
    }

    @RequestMapping(value = "/getDoctorVisits/visit/{id}", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    List<MedicalVisit> getDoctorVisits(@PathVariable("id") Integer id) {
        return medicalVisitService.getDoctorVisits(id);
    }

    @RequestMapping(value = "/getDoctorVisits/visit/list/{id}", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    List<MedicalVisitList> getDoctorVisitsList(@PathVariable("id") Integer id) {
        return medicalVisitService.getDoctorVisitsList(id);
    }

    @RequestMapping(value = "/getVisits", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    List<MedicalVisit> getAllVisits() {
        return medicalVisitService.getAllVisits();
    }

    @RequestMapping(value = "/editVisit", method = RequestMethod.PUT, consumes = "application/json")
    public
    @ResponseBody
    MedicalVisit editVisit(@RequestBody MedicalVisit visit) {
        medicalVisitService.updateVisit(visit);
        return visit;
    }

    @RequestMapping(value = "/downloadPDF/visit/{idUser}/{idDoctor}/{idVisit}", method = RequestMethod.GET)
    public ModelAndView downloadExcel(@PathVariable("idUser") Integer idUser,
                                      @PathVariable("idDoctor") Integer idDoctor,
                                      @PathVariable("idVisit") Integer idVisit) {

        MedicalVisit visit = medicalVisitService.getVisit(idVisit);
        if (visit != null && visit.getUser().getId() == idUser && visit.getDoctor().getId() == idDoctor && visit.isCompleted()) {
            return new ModelAndView("pdfView", "visit", visit);
        } else return new ModelAndView();
    }

    @RequestMapping(value = "/remove/visit/{idVisit}", method = RequestMethod.DELETE)
    public ResponseEntity removeVisit(@PathVariable("idVisit") Integer id) {
        medicalVisitService.removeVisit(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/remove/visit/list/{idVisit}", method = RequestMethod.DELETE)
    public ResponseEntity removeVisitList(@PathVariable("idVisit") Integer id) {
        medicalVisitService.removeVisitList(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}

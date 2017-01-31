package pl.dmcs.ksokolowski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.dmcs.ksokolowski.domain.Doctor;
import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.service.DoctorService;
import pl.dmcs.ksokolowski.service.LoginService;

import java.util.List;

/**
 * Created by sokol on 2016-11-17.
 */
@Controller
@RequestMapping("/")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/addDoctor", method = RequestMethod.POST, consumes = "application/json")
    public
    @ResponseBody
    Login addDoctor(@RequestBody Login login) {
        doctorService.addDoctor(login);
        return login;
    }

    @RequestMapping(value = "/getDoctors", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    List<Doctor> getDoctors() {
        return doctorService.getAllDoctors();
    }

    @RequestMapping(value = "/getDoctor/{doctorId}", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    Doctor getDoctor(@PathVariable("doctorId") Integer doctorId) {
        return doctorService.getDoctor(doctorId);
    }

    @RequestMapping(value = "/editDoctor", method = RequestMethod.PUT, consumes = "application/json")
    public
    @ResponseBody
    Login editDoctor(@RequestBody Login login) {
        doctorService.updateDoctor(login);
        return login;
    }

    @RequestMapping(value = "/activation/doctor/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity doctorActivation(@PathVariable("id") Integer id) {
        doctorService.activationDoctor(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/deactivation/doctor/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity doctorDeactivation(@PathVariable("id") Integer id) {
        doctorService.deactivationDoctor(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}

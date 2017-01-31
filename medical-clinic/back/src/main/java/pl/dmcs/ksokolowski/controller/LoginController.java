package pl.dmcs.ksokolowski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.domain.UserRole;
import pl.dmcs.ksokolowski.service.LoginService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by sokol on 2016-12-27.
 */

@Controller
@RequestMapping("/")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/checkLogin", method = RequestMethod.POST, produces = "application/json")
    public
    @ResponseBody
    boolean checkUserExists(@RequestBody String name) {
        return loginService.checkUserExists(name);
    }

    @RequestMapping(value = "/getLogins", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    List<Login> getLogins() {
        return loginService.listLogin();
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
    public
    @ResponseBody
    Login login(@RequestBody Login login) {
        List<Login> logins = loginService.listLogin();
        Login user = null;
        for (Login l : logins) {
            if (l.getLogin().equals(login.getLogin()) && l.getPassword().equals(login.getPassword()) && l.isActive()) {
                user = l;
            }
        }
        return user;
    }

    @RequestMapping(value = "/role/{id}", method = RequestMethod.GET, produces = "application/json")
    public
    @ResponseBody
    UserRole checkRole(@PathVariable("id") Integer id) {
        Login log = loginService.getLogin(id);
        List<UserRole> a = new ArrayList<UserRole>(log.getUserRole());
        UserRole d = a.get(0);

        return loginService.getUserRole(d.getId());
    }

    @RequestMapping(value = "/remove/doctor/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity removeLoginDoctor(@PathVariable("id") Integer id) {
        loginService.removeLoginDoctor(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/remove/user/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity removeUser(@PathVariable("id") Integer id) {
        loginService.removeLoginUser(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}

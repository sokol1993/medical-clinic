package pl.dmcs.ksokolowski.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import org.springframework.web.servlet.view.RedirectView;
import pl.dmcs.ksokolowski.domain.Login;
import pl.dmcs.ksokolowski.service.LoginService;
import pl.dmcs.ksokolowski.service.UserService;
import pl.dmcs.ksokolowski.utils.EmailSender;


@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private EmailSender emailSender;

    @RequestMapping(value = "/addUser", method = RequestMethod.POST, consumes = "application/json")
    public
    @ResponseBody
    Login addUser(@RequestBody Login login) {
        userService.addUser(login);
        emailSender.sendMail(login);
        return login;
    }

    @RequestMapping(value = "/editUser", method = RequestMethod.PUT, consumes = "application/json")
    public
    @ResponseBody
    Login editUser(@RequestBody Login login) {
        userService.addUser(login);
        return login;
    }

    @RequestMapping(value = "/activation/{token}/{id}", method = RequestMethod.GET, produces = "application/json")
    public RedirectView userActivation(@PathVariable("token") String token, @PathVariable("id") Integer id) {
        userService.userActivation(token, id);
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("http://localhost:3000/login");
        return redirectView;
    }

    @RequestMapping(value = "/activation/user/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity doctorActivation(@PathVariable("id") Integer id) {
        userService.activationUser(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/deactivation/user/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity doctorDeactivation(@PathVariable("id") Integer id) {
        userService.deactivationUser(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}

package pl.dmcs.ksokolowski.controller;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;
import pl.dmcs.ksokolowski.domain.QuadraticEquation;

/**
 * Created by sokol on 2017-01-13.
 */
@Controller
@SessionAttributes
public class QuadraticEquationController {

    @RequestMapping(value = "/solvequadraticequation", method = RequestMethod.POST)
    public ModelAndView addContact(@ModelAttribute("equation")
                                     QuadraticEquation quadraticEquation, BindingResult result) {

     //   System.out.println("First Name: " + user.getFirstname() +
       //         " Last Name: " + user.getLastname() + " Tel.: " +
         //       user.getTelephone() + " Email: " + user.getEmail());
        quadraticEquation.solveEquation();
        return new ModelAndView("solveequation", "command", quadraticEquation);
    }

    @RequestMapping("/quadraticequation")
    public ModelAndView showContacts() {

        return new ModelAndView("equation", "command", new QuadraticEquation());
    }
}

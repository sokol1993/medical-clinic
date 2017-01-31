package pl.dmcs.ksokolowski.utils;

import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import pl.dmcs.ksokolowski.domain.Login;

/**
 * Created by sokol on 2016-11-24.
 */
public class EmailSender {
    private MailSender mailSender;
    private SimpleMailMessage templateMessage;

    public void setTemplateMessage(SimpleMailMessage templateMessage) {
        this.templateMessage = templateMessage;
    }

    public void setMailSender(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendMail(Login login) {

        SimpleMailMessage msg = new SimpleMailMessage(this.templateMessage);
        msg.setTo(login.getUser().getEmail());
        msg.setText(
                "Witaj "
                        + login.getUser().getFirstName()
                        + " "
                        + login.getUser().getLastName()
                        + "!"
                        + "\nW celu dokończenia rejestracji kliknij w poniższy link"
                        + "\n" + "http://localhost:8080/activation/"
                        + login.getToken().getToken()
                        + "/"
                        + login.getToken().getId());

        try {
            this.mailSender.send(msg);
        } catch (MailException ex) {
            // simply log it and go on...
            System.err.println(ex.getMessage());
        }
    }
}

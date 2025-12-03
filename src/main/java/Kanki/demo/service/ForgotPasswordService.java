package Kanki.demo.service;

import Kanki.demo.UserRepository;
import Kanki.demo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForgotPasswordService {

    @Autowired
    private UserRepository userRepository;

    public String getExistingPassword(String phone) {

        User user = userRepository.findByPhone(phone);

        if (user == null) {
            return "❌ Phone number not registered!";
        }

        return "Your Password is: " + user.getPassword();
    }
}

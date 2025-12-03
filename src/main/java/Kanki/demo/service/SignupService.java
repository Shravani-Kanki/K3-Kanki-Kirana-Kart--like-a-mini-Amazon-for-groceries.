package Kanki.demo.service;

import Kanki.demo.UserRepository;
import Kanki.demo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(String username, String phone) {

        // Check if phone already exists
        User existing = userRepository.findByPhone(phone);
        if (existing != null) {
            return "❌ Phone number already registered!";
        }

        // Create new user
        User user = new User();
        user.setUsername(username);
        user.setPhone(phone);

        // Generate password
        String password = username;
        user.setPassword(password);

        userRepository.save(user);

        // Return success message with password
        return "🎉 Signup successful! Your password is: " + password;
    }
}

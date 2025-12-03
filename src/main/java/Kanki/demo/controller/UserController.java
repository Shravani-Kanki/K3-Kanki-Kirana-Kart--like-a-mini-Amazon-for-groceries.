package Kanki.demo.controller;
import org.springframework.http.HttpStatus;


import Kanki.demo.User;
import Kanki.demo.UserRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
// allows frontend to connect
@RestController
@RequestMapping("/api")
public class UserController {


    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/login")
    public String loginPage() {
        return "This is a GET request, but login should be POST!";
    }


    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        System.out.println("📩 Login request received: " + user.getPhone());

        User existingUser = userRepository.findByPhone(user.getPhone());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("✅ Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("❌ Invalid phone number or password");
        }
    }
 }


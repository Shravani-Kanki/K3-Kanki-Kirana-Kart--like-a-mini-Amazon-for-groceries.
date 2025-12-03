package Kanki.demo.controller;

import Kanki.demo.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody Map<String, String> body) {

        String username = body.get("username");
        String phone = body.get("phone");

        String result = signupService.registerUser(username, phone);

        if (result.startsWith("❌")) {
            return ResponseEntity.status(400).body(result);
        }

        return ResponseEntity.ok(result);
    }
}

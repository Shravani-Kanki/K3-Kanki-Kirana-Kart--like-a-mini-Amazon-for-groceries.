package Kanki.demo.controller;

import Kanki.demo.service.ForgotPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;   // <-- ADD THIS

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ForgotPasswordController {

    @Autowired
    private ForgotPasswordService forgotPasswordService;

    @PostMapping("/forgot")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> body) {

        String phone = body.get("phone");

        String result = forgotPasswordService.getExistingPassword(phone);

        if (result.startsWith("❌")) {
            return ResponseEntity.status(404).body(result);
        }

        return ResponseEntity.ok(result);
    }
}

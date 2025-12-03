package Kanki.demo;

import Kanki.demo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // If you want to find user by phone:
    User findByPhone(String phone);
}

package com.example.demo;
import com.example.demo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
public class UserRoleController {
    @Autowired private UserRoleRepository userRoleRepository;

    @PostMapping("/insertUserRole/{name}")
    public UserRole insertUserRole(@PathVariable String name) {
        UserRole userRole = new UserRole();
        userRole.setName(name);
        userRoleRepository.save(userRole);
        return userRole;
    }



}

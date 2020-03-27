package com.example.demo;
import com.example.demo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;
import com.example.demo.UserRole;
@RestController
@CrossOrigin(origins = "*")
public class UserRoleController {
    @Autowired private UserRoleRepository userRoleRepository;

    @PostMapping("/insertUserRole/{name}/{imgURL}")
    public UserRole insertUserRole(@PathVariable String name,@PathVariable String imgURL) {
        UserRole userRole = new UserRole();
        userRole.setName(name);
        userRole.setImgURL(imgURL);
        userRoleRepository.save(userRole);
        return userRole;
    }

    @GetMapping(path = "/ShowUserRole")
    public Iterable<UserRole> userRole() {
        return userRoleRepository.findAll().stream().collect(Collectors.toList());
    }



}

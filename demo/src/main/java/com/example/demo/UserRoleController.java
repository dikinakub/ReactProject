package com.example.demo;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")

public class UserRoleController {
    @Autowired private UserRoleRepository userRoleRepository;

    @PostMapping(path = "/insertUserRole")
    public UserRole insertUserRole(@RequestBody Map<String,String> body){

        String isName = body.get("isName").toString();
        String imgURL = body.get("imgURL").toString();

        UserRole userRole = new UserRole();
        userRole.setName(isName);
        userRole.setImgURL(imgURL);
        userRoleRepository.save(userRole);
        return userRole;
    }

    @GetMapping(path = "/ShowUserRole")
    public Iterable<UserRole> userRole() {
        return userRoleRepository.findAll().stream().collect(Collectors.toList());
    }



}

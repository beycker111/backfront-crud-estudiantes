package com.estudiante.backendcrudestudiante.controllers;

import com.estudiante.backendcrudestudiante.entities.Student;
import com.estudiante.backendcrudestudiante.services.InterfaceServiceStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class ControllerStudent {

    @Autowired
    private InterfaceServiceStudent service;

    @PostMapping(value ="/saveStudent")
    public Student saveStudent(@RequestBody Student student){
        return service.save(student);
    }

}

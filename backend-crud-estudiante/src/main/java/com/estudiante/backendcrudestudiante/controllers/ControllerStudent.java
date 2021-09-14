package com.estudiante.backendcrudestudiante.controllers;

import com.estudiante.backendcrudestudiante.entities.Student;
import com.estudiante.backendcrudestudiante.services.InterfaceServiceStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api")
public class ControllerStudent {

    @Autowired
    private InterfaceServiceStudent service;

    @GetMapping(value = "listStudents")
    public Iterable<Student>listPersons(){
        return service.listAllStudents();
    }

    @GetMapping("listStudentById/{id}")
    public Optional<Student> listStudentById(@PathVariable("id") int id){
        return service.listStudentById(id);
    }
}

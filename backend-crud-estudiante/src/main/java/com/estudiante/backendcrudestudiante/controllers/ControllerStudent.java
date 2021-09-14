package com.estudiante.backendcrudestudiante.controllers;

import com.estudiante.backendcrudestudiante.entities.Student;
import com.estudiante.backendcrudestudiante.services.InterfaceServiceStudent;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping(value ="/saveStudent")
    public Student saveStudent(@RequestBody Student student){
        return service.save(student);
    }

    @PutMapping(value = "/updateStudent")
    public Student update(@RequestBody Student student){
        if(student.getId() != null){
            return service.update(student);
        }
        throw new RuntimeException("EL id seleccionado no existe");
    }
}

package com.estudiante.backendcrudestudiante.services;

import com.estudiante.backendcrudestudiante.entities.Student;
import com.estudiante.backendcrudestudiante.repositories.InterfaceRepositoryStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class ServiceStudent implements InterfaceServiceStudent {

    @Autowired
    private InterfaceRepositoryStudent data;



    @Override
    public Student update(Student student) {
        return data.findById(student.getId()).orElseThrow();
    }
}

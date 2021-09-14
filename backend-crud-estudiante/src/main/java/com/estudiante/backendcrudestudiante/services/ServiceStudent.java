package com.estudiante.backendcrudestudiante.services;

import com.estudiante.backendcrudestudiante.entities.Student;
import com.estudiante.backendcrudestudiante.repositories.InterfaceRepositoryStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.estudiante.backendcrudestudiante.exceptions.NotSuchElementException;

import java.util.ArrayList;

import java.util.Optional;

@Service
public class ServiceStudent implements InterfaceServiceStudent {

    @Autowired
    private InterfaceRepositoryStudent data;

    @Override
    public ArrayList<Student> listAllStudents() {
        return (ArrayList<Student>) data.findAll();
    }

    @Override
    public Optional<Student> listStudentById(int id) {
        if (data.findById(id).isEmpty()) {
            throw new NotSuchElementException("the user that you want to search was not found");
        }
        return data.findById(id);
    }

    public Student save(Student student) {
        return data.save(student);
    }

}

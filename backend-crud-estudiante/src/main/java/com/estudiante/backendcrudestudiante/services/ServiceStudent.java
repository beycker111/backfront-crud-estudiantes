package com.estudiante.backendcrudestudiante.services;

import com.estudiante.backendcrudestudiante.entities.Student;
import com.estudiante.backendcrudestudiante.repositories.InterfaceRepositoryStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estudiante.backendcrudestudiante.exceptions.NotSuchElementException;

import java.util.ArrayList;

import java.util.Optional;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    @Override
    public Student save(Student student) {
        return data.save(student);
    }

<<<<<<< HEAD
    public Optional<Student> deleteStudent(int id) {
        Optional<Student> student = data.findById(id);
        if (!student.isPresent()){
            throw new NotSuchElementException("The student with id " + id + " was not found");
        }
        return student;
    }
=======
    @Override
    public Student update(Student student) {
        return data.findById(student.getId()).orElseThrow();
    }

>>>>>>> a3968c0fed7ac9ea04916e834a93e5c0dc74ae9b
}

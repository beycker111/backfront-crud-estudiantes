package com.estudiante.backendcrudestudiante.services;

import com.estudiante.backendcrudestudiante.entities.Student;

import java.util.ArrayList;
import java.util.Optional;

public interface InterfaceServiceStudent {
    public ArrayList<Student> listAllStudents();
    public Optional<Student> listStudentById(int id);
    public Student save(Student student);
    public Optional<Student> deleteStudent(int id);
    public Student update(Student student);

}

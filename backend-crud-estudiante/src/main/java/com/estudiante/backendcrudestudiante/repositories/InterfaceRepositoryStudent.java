package com.estudiante.backendcrudestudiante.repositories;

import com.estudiante.backendcrudestudiante.entities.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfaceRepositoryStudent extends CrudRepository<Student, Integer> {

}

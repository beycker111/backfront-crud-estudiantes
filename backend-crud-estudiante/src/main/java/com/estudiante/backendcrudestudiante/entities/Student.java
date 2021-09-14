package com.estudiante.backendcrudestudiante.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Student {

    @Id
    private Integer id;
    private String name;
    private String lastname;
    private Date birthday;
    private String email;
    private String phone;
    private String grade;

}

package com.estudiante.backendcrudestudiante.controllers;

import com.estudiante.backendcrudestudiante.services.InterfaceServiceStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class ControllerStudent {

    @Autowired
    private InterfaceServiceStudent service;
}

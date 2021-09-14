package com.estudiante.backendcrudestudiante.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.NoSuchElementException;

@ControllerAdvice(annotations = RestController.class)
public class HandlerExceptions {

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<?> NotSuchElementException(Exception e){
        ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        return giveResponse(HttpStatus.NOT_FOUND, e);
    }

    private ResponseEntity<HashMap> giveResponse(HttpStatus httpStatus, Exception exc) {
        HashMap<String, String> res = new HashMap<>();
        res.put("Error - ", exc.getMessage());
        res.put("Status - ", String.valueOf(httpStatus.value()));
        res.put("Time - ", String.valueOf(new Date()));

        return new ResponseEntity<>(res, httpStatus);

    }

}

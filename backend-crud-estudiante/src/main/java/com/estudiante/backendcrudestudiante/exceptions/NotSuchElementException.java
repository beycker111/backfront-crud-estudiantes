package com.estudiante.backendcrudestudiante.exceptions;

public class NotSuchElementException extends RuntimeException{

    public NotSuchElementException(){}

    public NotSuchElementException(String message){
        super(message);
    }
}

package com.chtti.fullstack.demo.Backend1.exception;

//@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIdIncorrectException extends RuntimeException {

    public ProjectIdIncorrectException(String message) {
        super(message);
    }
}

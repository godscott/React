package com.chtti.fullstack.demo.Backend1.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProjectIdIncorrectExceptionResponse {
    private String projectIdIncorrect;
}

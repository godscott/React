package com.chtti.fullstack.demo.Backend1.ulitity;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

public class MapValidationError {
    public static ResponseEntity<Map<String, String>> MapValidation(BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
//            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
            Map<String, String> errorMap = new HashMap<>();
            for(FieldError error: bindingResult.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return null;
    }
}

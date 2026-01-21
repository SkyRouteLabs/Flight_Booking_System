package com.flightbooking.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/status")
    public Map<String, Object> getStatus() {

        Map<String, Object> response = new HashMap<>();
        response.put("service", "Flight Booking Backend");
        response.put("status", "RUNNING");
        response.put("port", 8080);

        return response;
    }
}

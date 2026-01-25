package com.flightbooking.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flightbooking.model.FlightResponse;
import com.flightbooking.service.FlightApiService;

@RestController
public class FlightController {

    private final FlightApiService flightApiService;

    public FlightController(FlightApiService flightApiService) {
        this.flightApiService = flightApiService;
    }

    @GetMapping("/api/flights/search")
    public List<FlightResponse> searchFlights(
            @RequestParam String source,
            @RequestParam String destination) {

        return flightApiService.searchFlights(source, destination);
    }
}

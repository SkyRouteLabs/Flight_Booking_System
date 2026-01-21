package com.flightbooking.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flightbooking.dto.BookingRequest;
import com.flightbooking.entity.Booking;
import com.flightbooking.service.BookingService;

@RestController
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/api/bookings")
    public Booking createBooking(@RequestBody BookingRequest request) {
        return bookingService.createBooking(request);
    }
}

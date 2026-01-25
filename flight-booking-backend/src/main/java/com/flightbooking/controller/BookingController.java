package com.flightbooking.controller;

import java.util.List;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flightbooking.dto.BookingRequest;
import com.flightbooking.dto.BookingResponse;
import com.flightbooking.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // ✅ CREATE BOOKING
    @PostMapping
    public BookingResponse createBooking(
            @Valid @RequestBody BookingRequest request
    ) {
        return bookingService.createBooking(request);
    }

    // ✅ PAY FOR BOOKING
    @PutMapping("/{id}/pay")
    public BookingResponse payForBooking(@PathVariable Long id) {
        return bookingService.markBookingAsPaid(id);
    }

    // ✅ GET BOOKING BY ID
    @GetMapping("/{id}")
    public BookingResponse getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    // ✅ GET BOOKINGS BY PASSENGER
    @GetMapping
    public List<BookingResponse> getBookingsByPassenger(
            @RequestParam String passengerName
    ) {
        return bookingService.getBookingsByPassenger(passengerName);
    }
}

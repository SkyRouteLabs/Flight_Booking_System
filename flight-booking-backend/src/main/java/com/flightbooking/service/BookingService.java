package com.flightbooking.service;

import org.springframework.stereotype.Service;

import com.flightbooking.dto.BookingRequest;
import com.flightbooking.entity.Booking;
import com.flightbooking.repository.BookingRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Booking createBooking(BookingRequest request) {

        Booking booking = new Booking(
                request.getPassengerName(),
                request.getAirline(),
                request.getFlightNumber(),
                request.getPrice(),
                "CREATED"
        );

        return bookingRepository.save(booking);
    }
    
    public Booking markBookingAsPaid(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStatus("PAID");
        return bookingRepository.save(booking);
    }

}

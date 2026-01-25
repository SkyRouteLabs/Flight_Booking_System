package com.flightbooking.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.flightbooking.dto.BookingRequest;
import com.flightbooking.dto.BookingResponse;
import com.flightbooking.entity.Booking;
import com.flightbooking.repository.BookingRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    // ✅ CREATE BOOKING
    public BookingResponse createBooking(BookingRequest request) {

        Booking booking = bookingRepository.save(
            new Booking(
                request.getPassengerName(),
                request.getAirline(),
                request.getFlightNumber(),
                request.getSource(),
                request.getDestination(),
                request.getDepartureDate(),
                request.getTravelClass(),
                request.getTravellers(),
                request.getPrice(),
                "CREATED"
            )
        );

        return mapToResponse(booking);
    }

    // ✅ PAYMENT
    public BookingResponse markBookingAsPaid(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStatus("PAID");
        bookingRepository.save(booking);

        return mapToResponse(booking);
    }

    // ✅ GET BOOKING BY ID (Confirmation page refresh)
    public BookingResponse getBookingById(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        return mapToResponse(booking);
    }

    // ✅ GET BOOKINGS BY PASSENGER (My Bookings)
    public List<BookingResponse> getBookingsByPassenger(String passengerName) {

        return bookingRepository.findByPassengerName(passengerName)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    // 🔁 COMMON MAPPER (clean & reusable)
    private BookingResponse mapToResponse(Booking booking) {
        return new BookingResponse(
            booking.getId(),
            booking.getAirline(),
            booking.getFlightNumber(),
            booking.getSource(),
            booking.getDestination(),
            booking.getDepartureDate(),
            booking.getTravelClass(),
            booking.getTravellers(),
            booking.getPrice(),
            booking.getStatus()
        );
    }
}

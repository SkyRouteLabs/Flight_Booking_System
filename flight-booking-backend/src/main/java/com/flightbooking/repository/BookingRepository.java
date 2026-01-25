package com.flightbooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flightbooking.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    // For "My Bookings" page
    List<Booking> findByPassengerName(String passengerName);
}

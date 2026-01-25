package com.flightbooking.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "passenger_name")
    private String passengerName;

    private String airline;

    @Column(name = "flight_number")
    private String flightNumber;

    private String source;
    private String destination;

    @Column(name = "departure_date")
    private LocalDate departureDate;

    @Column(name = "travel_class")
    private String travelClass;

    private int travellers;
    private double price;
    private String status;

    public Booking() {}

    public Booking(
            String passengerName,
            String airline,
            String flightNumber,
            String source,
            String destination,
            LocalDate departureDate,
            String travelClass,
            int travellers,
            double price,
            String status
    ) {
        this.passengerName = passengerName;
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.source = source;
        this.destination = destination;
        this.departureDate = departureDate;
        this.travelClass = travelClass;
        this.travellers = travellers;
        this.price = price;
        this.status = status;
    }

    // ✅ GETTERS

    public Long getId() {
        return id;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public String getAirline() {
        return airline;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public String getSource() {
        return source;
    }

    public String getDestination() {
        return destination;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public String getTravelClass() {
        return travelClass;
    }

    public int getTravellers() {
        return travellers;
    }

    public double getPrice() {
        return price;
    }

    public String getStatus() {
        return status;
    }

    // ✅ SETTER (needed for payment update)

    public void setStatus(String status) {
        this.status = status;
    }
}

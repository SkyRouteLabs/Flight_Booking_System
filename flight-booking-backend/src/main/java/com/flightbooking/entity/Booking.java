package com.flightbooking.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String passengerName;
    private String airline;
    private String flightNumber;
    private double price;
    private String status;

    public Booking() {}

    public Booking(String passengerName,
                   String airline,
                   String flightNumber,
                   double price,
                   String status) {
        this.passengerName = passengerName;
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.price = price;
        this.status = status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }


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

    public double getPrice() {
        return price;
    }

    public String getStatus() {
        return status;
    }
}

package com.flightbooking.dto;

public class BookingRequest {

    private String passengerName;
    private String airline;
    private String flightNumber;
    private double price;

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
}

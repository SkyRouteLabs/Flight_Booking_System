package com.flightbooking.model;

public class FlightResponse {

    private String airline;
    private String flightNumber;
    private String source;
    private String destination;
    private double price;

    public FlightResponse(String airline,
                          String flightNumber,
                          String source,
                          String destination,
                          double price) {
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.source = source;
        this.destination = destination;
        this.price = price;
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

    public double getPrice() {
        return price;
    }
}

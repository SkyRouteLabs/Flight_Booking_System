package com.flightbooking.model;

public class Flight {

    private Long id;
    private String airline;
    private String source;
    private String destination;
    private double price;

    public Flight(Long id, String airline, String source, String destination, double price) {
        this.id = id;
        this.airline = airline;
        this.source = source;
        this.destination = destination;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public String getAirline() {
        return airline;
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

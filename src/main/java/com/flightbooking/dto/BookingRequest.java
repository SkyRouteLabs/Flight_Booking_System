package com.flightbooking.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class BookingRequest {

    @NotBlank
    private String passengerName;

    @NotBlank
    private String airline;

    @NotBlank
    private String flightNumber;

    @Min(1)
    private double price;

    @NotBlank
    private String travelClass;

    @Min(1)
    private int travellers;

    @NotBlank
    private String source;

    @NotBlank
    private String destination;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate departureDate;

    // Required by Jackson
    public BookingRequest() {}

    // -------- GETTERS --------
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

    public String getTravelClass() {
        return travelClass;
    }

    public int getTravellers() {
        return travellers;
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

    // -------- SETTERS --------
    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setTravelClass(String travelClass) {
        this.travelClass = travelClass;
    }

    public void setTravellers(int travellers) {
        this.travellers = travellers;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }
}

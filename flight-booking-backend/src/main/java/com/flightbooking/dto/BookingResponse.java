package com.flightbooking.dto;

import java.time.LocalDate;

public class BookingResponse {

    private Long bookingId;
    private String airline;
    private String flightNumber;
    private String source;
    private String destination;
    private LocalDate departureDate;
    private String travelClass;
    private int travellers;
    private double price;
    private String status;

    public BookingResponse(
            Long bookingId,
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
        this.bookingId = bookingId;
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

    public Long getBookingId() { return bookingId; }
    public String getAirline() { return airline; }
    public String getFlightNumber() { return flightNumber; }
    public String getSource() { return source; }
    public String getDestination() { return destination; }
    public LocalDate getDepartureDate() { return departureDate; }
    public String getTravelClass() { return travelClass; }
    public int getTravellers() { return travellers; }
    public double getPrice() { return price; }
    public String getStatus() { return status; }
}

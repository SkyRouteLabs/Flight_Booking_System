package com.flightbooking.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.flightbooking.service.BookingService;
import com.flightbooking.service.MockPaymentService;

@RestController
@RequestMapping("/api/payments")
public class MockPaymentController {

    private final MockPaymentService paymentService;
    private final BookingService bookingService;

    public MockPaymentController(MockPaymentService paymentService,
                                 BookingService bookingService) {
        this.paymentService = paymentService;
        this.bookingService = bookingService;
    }

    @PostMapping("/pay")
    public Map<String, Object> pay(@RequestParam Long bookingId,
                                   @RequestParam double amount) {

        Map<String, Object> paymentResponse =
                paymentService.makePayment(bookingId, amount);

        bookingService.markBookingAsPaid(bookingId);

        return paymentResponse;
    }
}

package com.flightbooking.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.flightbooking.service.PaymentService;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create-order")
    public Map<String, Object> createOrder(
            @RequestParam Long bookingId,
            @RequestParam double amount) throws Exception {

        return paymentService.createPaymentOrder(bookingId, amount);
    }
}

package com.flightbooking.service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class MockPaymentService {

    public Map<String, Object> makePayment(Long bookingId, double amount) {

        Map<String, Object> response = new HashMap<>();

        response.put("paymentId", UUID.randomUUID().toString());
        response.put("bookingId", bookingId);
        response.put("amount", amount);
        response.put("currency", "INR");
        response.put("status", "SUCCESS");

        return response;
    }
}

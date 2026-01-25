package com.flightbooking.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.flightbooking.model.FlightResponse;

@Service
public class FlightApiService {

    private final RestTemplate restTemplate;

    @Value("${aviationstack.api.key}")
    private String apiKey;

    public FlightApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<FlightResponse> searchFlights(String source, String destination) {

        String url =
                "http://api.aviationstack.com/v1/flights"
                + "?access_key=" + apiKey
                + "&dep_iata=" + source
                + "&arr_iata=" + destination;

        String jsonResponse = restTemplate.getForObject(url, String.class);

        List<FlightResponse> flights = new ArrayList<>();

        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(jsonResponse);
            JsonNode dataArray = root.get("data");

            if (dataArray != null && dataArray.isArray()) {

                for (JsonNode flightNode : dataArray) {

                    String airline =
                            flightNode.get("airline").get("name").asText();

                    String flightNumber =
                            flightNode.get("flight").get("iata").asText();

                    String dep =
                            flightNode.get("departure").get("iata").asText();

                    String arr =
                            flightNode.get("arrival").get("iata").asText();

                    double price = calculatePrice(airline);

                    flights.add(
                        new FlightResponse(airline, flightNumber, dep, arr, price)
                    );

                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return flights;
    }
    
    private double calculatePrice(String airline) {

        return switch (airline) {
            case "IndiGo" -> 4500;
            case "Air India" -> 5200;
            case "Vistara" -> 6100;
            default -> 4800;
        };
    }

}

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PassengerDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    flight,
    source,
    destination,
    departureDate,
    travelClass,
    travellers = 1,
  } = state || {};

  if (!flight) {
    return <h2 style={{ padding: 40 }}>No flight selected</h2>;
  }

  const [passengers, setPassengers] = useState(
    Array(travellers).fill("")
  );

  const handleChange = (index, value) => {
    const updated = [...passengers];
    updated[index] = value;
    setPassengers(updated);
  };

  const handleConfirm = async () => {
    if (passengers.some((p) => !p.trim())) {
      alert("Please enter all passenger names");
      return;
    }

    const response = await fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        passengerName: passengers[0], // primary passenger
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        source,
        destination,
        departureDate,
        travelClass,
        travellers: passengers.length,
        price: flight.price,
      }),
    });

    const booking = await response.json();

    navigate("/booking-confirmed", {
      state: { booking },
    });
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h2>Passenger Details</h2>

      {passengers.map((name, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <h4 style={{ marginBottom: "10px" }}>
            Passenger {index + 1} {index === 0 && "(Primary)"}
          </h4>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => handleChange(index, e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
            }}
          />
        </div>
      ))}

      <button
        onClick={handleConfirm}
        className="search-btn"
        style={{ marginTop: "20px" }}
      >
        Confirm Booking
      </button>
    </div>
  );
}
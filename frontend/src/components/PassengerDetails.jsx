import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PassengerDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fallbackState = {
    flight: { flightNumber: "AI-101", price: 5000 },
    source: "Mumbai",
    destination: "Delhi",
    departureDate: "2024-10-25",
    travelClass: "Economy",
    travellers: 2,
  };

  const {
    flight,
    source,
    destination,
    departureDate,
    travelClass,
    travellers,
  } = state || fallbackState;

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

    setLoading(true);

    const booking = {
      id: "BK-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
      passengerName: passengers[0].trim(),
      flightNumber: flight.flightNumber,
      airline: "Air India",
      price: flight.price * travellers,
      status: "CONFIRMED",
    };

    setTimeout(() => {
      navigate("/booking-confirmed", { state: { booking } });
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
          url("/image.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "14px",
          maxWidth: "520px",
          width: "100%",
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Passenger Details
        </h2>

        <div
          style={{
            background: "#f1f5ff",
            padding: "14px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          <strong>{flight.flightNumber}</strong><br />
          {source} → {destination}<br />
          {departureDate} | {travelClass}
        </div>

        {passengers.map((name, index) => (
          <div key={index} style={{ marginBottom: "16px" }}>
            <label style={{ fontWeight: 600 }}>
              Passenger {index + 1} {index === 0 && "(Primary)"}
            </label>
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => handleChange(index, e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        ))}

        <button
          onClick={handleConfirm}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: "#1e2a8a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
}

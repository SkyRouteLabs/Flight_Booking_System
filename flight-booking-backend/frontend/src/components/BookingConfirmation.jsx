import { useLocation, useNavigate } from "react-router-dom";

export default function BookingConfirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>No booking found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const { booking } = state;

  return (
    <div style={{ padding: "60px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>🎉 Booking Confirmed</h1>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <p><strong>Booking ID:</strong> {booking.id}</p>
        <p><strong>Passenger:</strong> {booking.passengerName}</p>
        <p><strong>Airline:</strong> {booking.airline}</p>
        <p><strong>Flight Number:</strong> {booking.flightNumber}</p>
        <p><strong>Price:</strong> ₹{booking.price}</p>
        <p><strong>Status:</strong> {booking.status}</p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            background: "#1a237e",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Book Another Flight
        </button>
      </div>
    </div>
  );
}

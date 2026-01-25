import { useLocation, useNavigate } from "react-router-dom";

export default function BookingConfirmed() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.booking;

  if (!booking) return null;

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
          padding: "40px",
          borderRadius: "14px",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ fontSize: "48px" }}>🎉</div>
        <h2 style={{ marginBottom: "6px" }}>Booking Confirmed</h2>
        <p style={{ color: "#666", marginBottom: "24px" }}>
          Your flight has been booked successfully
        </p>

        <div
          style={{
            textAlign: "left",
            background: "#f9fafc",
            padding: "20px",
            borderRadius: "10px",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          <p><strong>Booking ID:</strong> {booking.id}</p>
          <p><strong>Passenger:</strong> {booking.passengerName}</p>
          <p><strong>Airline:</strong> {booking.airline}</p>
          <p><strong>Flight:</strong> {booking.flightNumber}</p>
          <p><strong>Price:</strong> ₹{booking.price}</p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: "green", fontWeight: 600 }}>
              {booking.status}
            </span>
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "14px",
            background: "#1e2a8a",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Book Another Flight
        </button>
      </div>
    </div>
  );
}

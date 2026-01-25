import { useLocation, useNavigate } from "react-router-dom";

export default function BookingConfirmed() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.booking;

  if (!booking) return null;

  return (
    <div style={{ padding: "60px" }}>
      <h2>🎉 Booking Confirmed</h2>

      <p><b>Booking ID:</b> {booking.id}</p>
      <p><b>Passenger:</b> {booking.passengerName}</p>
      <p><b>Airline:</b> {booking.airline}</p>
      <p><b>Flight:</b> {booking.flightNumber}</p>
      <p><b>Price:</b> ₹{booking.price}</p>
      <p><b>Status:</b> {booking.status}</p>

      <br />

      <button onClick={() => navigate("/")}>
        Book Another Flight
      </button>
    </div>
  );
}

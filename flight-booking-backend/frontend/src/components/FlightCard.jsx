import { useNavigate } from "react-router-dom";

export default function FlightCard({ flight, onBook }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <p><b>{flight.airline}</b></p>
        <p>{flight.flightNumber}</p>
        <p>₹{flight.price}</p>
      </div>

      <button
        className="search-btn"
        onClick={() => onBook(flight)}
      >
        Book Now
      </button>
    </div>
  );
}

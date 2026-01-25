import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlightCard from "./FlightCard";
import airports from "./airports";

export default function SearchBar() {
  const navigate = useNavigate();

  const [tripType] = useState("oneway");

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const [flights, setFlights] = useState([]);

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");
  const [showTravellerBox, setShowTravellerBox] = useState(false);

  const travellerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (travellerRef.current && !travellerRef.current.contains(e.target)) {
        setShowTravellerBox(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filterAirports = (value) =>
    airports.filter(
      (a) =>
        a.code.toLowerCase().includes(value.toLowerCase()) ||
        a.city.toLowerCase().includes(value.toLowerCase())
    );

  const handleSearch = async () => {
    if (!from || !to || !departureDate) {
      alert("Please fill From, To and Departure date");
      return;
    }

    const response = await fetch(
      `http://localhost:8080/api/flights/search?source=${from}&destination=${to}`
    );

    const data = await response.json();
    console.log("Flights fetched:", data);
    setFlights(data);
  };

  const handleBook = (flight) => {
    navigate("/passenger-details", {
      state: {
        flight,
        source: from,
        destination: to,
        departureDate,
        travelClass,
        travellers,
      },
    });
  };

  return (
    <div className="search-container">
      <div className="search-tabs">
        <button className="search-tab active">Book a Flight</button>
      </div>

      <div className="search-form">
        <div className="search-fields">

          {/* FROM */}
          <div className="search-field">
            <label>From</label>
            <input
              value={from}
              placeholder="Country, City, Airport"
              onChange={(e) => {
                setFrom(e.target.value);
                setFromSuggestions(filterAirports(e.target.value));
              }}
            />
            {fromSuggestions.length > 0 && (
              <div className="suggestions">
                {fromSuggestions.map((a) => (
                  <div
                    key={a.code}
                    onClick={() => {
                      setFrom(a.code);
                      setFromSuggestions([]);
                    }}
                  >
                    {a.city} ({a.code})
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TO */}
          <div className="search-field">
            <label>To</label>
            <input
              value={to}
              placeholder="Country, City, Airport"
              onChange={(e) => {
                setTo(e.target.value);
                setToSuggestions(filterAirports(e.target.value));
              }}
            />
            {toSuggestions.length > 0 && (
              <div className="suggestions">
                {toSuggestions.map((a) => (
                  <div
                    key={a.code}
                    onClick={() => {
                      setTo(a.code);
                      setToSuggestions([]);
                    }}
                  >
                    {a.city} ({a.code})
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TRAVELLERS */}
          <div className="search-field" ref={travellerRef}>
            <label>Travellers & Class</label>
            <div onClick={() => setShowTravellerBox(!showTravellerBox)}>
              {travellers} Traveller(s) — {travelClass}
            </div>

            {showTravellerBox && (
              <div>
                <button onClick={() => setTravellers(Math.max(1, travellers - 1))}>-</button>
                {travellers}
                <button onClick={() => setTravellers(travellers + 1)}>+</button>

                <select
                  value={travelClass}
                  onChange={(e) => setTravelClass(e.target.value)}
                >
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                </select>
              </div>
            )}
          </div>

          {/* DATE */}
          <div className="search-field">
            <label>Departure</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
        </div>

        <label>
          <input type="radio" checked={tripType === "oneway"} readOnly />
          One Way
        </label>

        <button className="search-btn" onClick={handleSearch}>
          Search Flights
        </button>
      </div>

      {flights.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {flights.map((flight, index) => (
            <FlightCard
              key={index}
              flight={flight}
              onBook={handleBook}
            />
          ))}
        </div>
      )}
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlightCard from "./FlightCard";
import airports from "./airports";

export default function SearchBar() {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");

  // Single trip states
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Multicity state
  const [segments, setSegments] = useState([
    { from: "", to: "", departureDate: "" },
    { from: "", to: "", departureDate: "" }
  ]);

  const [flights, setFlights] = useState([]);

  // Suggestions state
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(null); // null for single trip, index for multicity
  const [activeFieldType, setActiveFieldType] = useState(null); // 'from' or 'to'
  const [suggestions, setSuggestions] = useState([]);

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

  const handleInputChange = (value, fieldType, index = null) => {
    const filtered = filterAirports(value);
    setSuggestions(filtered);
    setActiveFieldType(fieldType);
    setActiveSegmentIndex(index);

    if (tripType === "multicity" && index !== null) {
      const newSegments = [...segments];
      newSegments[index][fieldType] = value;
      setSegments(newSegments);
    } else {
      if (fieldType === "from") setFrom(value);
      if (fieldType === "to") setTo(value);
    }
  };

  const handleSuggestionClick = (airport) => {
    if (tripType === "multicity" && activeSegmentIndex !== null) {
      const newSegments = [...segments];
      if (activeFieldType === "from") newSegments[activeSegmentIndex].from = airport.code;
      if (activeFieldType === "to") newSegments[activeSegmentIndex].to = airport.code;
      setSegments(newSegments);
    } else {
      if (activeFieldType === "from") setFrom(airport.code);
      if (activeFieldType === "to") setTo(airport.code);
    }
    setSuggestions([]);
  };

  const addSegment = () => {
    setSegments([...segments, { from: "", to: "", departureDate: "" }]);
  };

  const removeSegment = (index) => {
    if (segments.length > 2) {
      const newSegments = segments.filter((_, i) => i !== index);
      setSegments(newSegments);
    }
  };

  const handleSearch = async () => {
    // Basic validation
    if (tripType === "multicity") {
      // Multicity validation logic here
    } else {
      if (!from || !to || !departureDate) {
        alert("Please fill From, To and Departure date");
        return;
      }
    }

    // Mock search for now or existing API
    const searchFrom = tripType === 'multicity' ? segments[0].from : from;
    const searchTo = tripType === 'multicity' ? segments[0].to : to;

    const response = await fetch(
      `http://localhost:8080/api/flights/search?source=${searchFrom}&destination=${searchTo}`
    );

    const data = await response.json();
    console.log("Flights fetched:", data);
    setFlights(data);
  };

  const handleBook = (flight) => {
    navigate("/passenger-details", {
      state: {
        flight,
        source: tripType === 'multicity' ? segments[0].from : from,
        destination: tripType === 'multicity' ? segments[0].to : to,
        departureDate: tripType === 'multicity' ? segments[0].departureDate : departureDate,
        travelClass,
        travellers,
      },
    });
  };

  return (
    <div className="search-container">
      <div className="search-tabs">
        <button className="search-tab active" onClick={() => navigate("/")}>
          <svg className="tab-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
          Book a Flight
        </button>
        <button className="search-tab" onClick={() => navigate("/coming-soon")}>
          <svg className="tab-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
          </svg>
          Manage/ Check In
        </button>
        <button className="search-tab" onClick={() => navigate("/coming-soon")}>
          <svg className="tab-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          Flight Update
        </button>
      </div>

      <div className="search-form">

        {/* Trip Type Radios moved inside, mainly for controlling layout */}
        <div className="trip-types" style={{ marginBottom: '20px' }}>
          <label className={`trip-option ${tripType === 'oneway' ? 'active' : ''}`}>
            <input type="radio" name="tripType" checked={tripType === "oneway"} onChange={() => setTripType("oneway")} />
            <span className="radio-dot"></span> One Way
          </label>
          <label className={`trip-option ${tripType === 'multicity' ? 'active' : ''}`}>
            <input type="radio" name="tripType" checked={tripType === "multicity"} onChange={() => setTripType("multicity")} />
            <span className="radio-dot"></span> Multi-city
          </label>
          <label className={`trip-option ${tripType === 'roundtrip' ? 'active' : ''}`}>
            <input type="radio" name="tripType" checked={tripType === "roundtrip"} onChange={() => setTripType("roundtrip")} />
            <span className="radio-dot"></span> Round Trip
          </label>
        </div>

        {tripType === "multicity" ? (
          /* MULTI CITY LAYOUT */
          <div className="multicity-container">
            {segments.map((segment, index) => (
              <div key={index} className="search-fields multicity-row">
                <div className="search-field">
                  <label>From</label>
                  <div className="field-input">
                    <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    <input
                      value={segment.from}
                      placeholder="City or airport"
                      onChange={(e) => handleInputChange(e.target.value, 'from', index)}
                    />
                  </div>
                  {activeSegmentIndex === index && activeFieldType === 'from' && suggestions.length > 0 && (
                    <div className="suggestions">
                      {suggestions.map((a) => (
                        <div key={a.code} onClick={() => handleSuggestionClick(a)}>{a.city} ({a.code})</div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="search-field">
                  <label>To</label>
                  <div className="field-input">
                    <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    <input
                      value={segment.to}
                      placeholder="City or airport"
                      onChange={(e) => handleInputChange(e.target.value, 'to', index)}
                    />
                  </div>
                  {activeSegmentIndex === index && activeFieldType === 'to' && suggestions.length > 0 && (
                    <div className="suggestions">
                      {suggestions.map((a) => (
                        <div key={a.code} onClick={() => handleSuggestionClick(a)}>{a.city} ({a.code})</div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="search-field">
                  <label>Depart</label>
                  <div className="field-input">
                    <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" /></svg>
                    <input
                      type="date"
                      value={segment.departureDate}
                      onChange={(e) => {
                        const newSegments = [...segments];
                        newSegments[index].departureDate = e.target.value;
                        setSegments(newSegments);
                      }}
                    />
                  </div>
                </div>

                {index > 1 && (
                  <button className="remove-btn" onClick={() => removeSegment(index)}>✕</button>
                )}
              </div>
            ))}

            <button className="add-flight-btn" onClick={addSegment}>
              + Add another flight
            </button>
          </div>

        ) : (
          /* SINGLE / ROUND TRIP LAYOUT */
          <div className="search-fields five-cols">
            <div className="search-field">
              <label>From</label>
              <div className="field-input">
                <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                <input
                  value={from}
                  placeholder="Country, City, Airport"
                  onChange={(e) => handleInputChange(e.target.value, 'from')}
                />
              </div>
              {activeSegmentIndex === null && activeFieldType === 'from' && suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((a) => (
                    <div key={a.code} onClick={() => handleSuggestionClick(a)}>{a.city} ({a.code})</div>
                  ))}
                </div>
              )}
            </div>

            <div className="search-field">
              <label>To</label>
              <div className="field-input">
                <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                <input
                  value={to}
                  placeholder="Country, City, Airport"
                  onChange={(e) => handleInputChange(e.target.value, 'to')}
                />
              </div>
              {activeSegmentIndex === null && activeFieldType === 'to' && suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((a) => (
                    <div key={a.code} onClick={() => handleSuggestionClick(a)}>{a.city} ({a.code})</div>
                  ))}
                </div>
              )}
            </div>

            <div className="search-field">
              <label>Departure Date</label>
              <div className="field-input">
                <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" /></svg>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
            </div>

            <div className="search-field">
              <label style={{ opacity: tripType === "oneway" ? 0.5 : 1 }}>Return Date</label>
              <div className={`field-input ${tripType === "oneway" ? "disabled-input" : ""}`}>
                {tripType !== "oneway" && (
                  <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" /></svg>
                )}
                <input
                  type={tripType === "oneway" ? "text" : "date"}
                  value={tripType === "oneway" ? "" : returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  disabled={tripType === "oneway"}
                  placeholder={tripType === "oneway" ? "One Way" : "Add date"}
                />
              </div>
            </div>

            <div className="search-field" ref={travellerRef}>
              <label>Travelers & Class</label>
              <div className="field-input clickable" onClick={() => setShowTravellerBox(!showTravellerBox)}>
                <svg className="field-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                <span>{travellers} Traveller(s) — {travelClass}</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              {showTravellerBox && (
                <div className="traveller-popup">
                  <div className="popup-row">
                    <span>Travellers</span>
                    <div className="counter">
                      <button onClick={() => setTravellers(Math.max(1, travellers - 1))}>−</button>
                      <span>{travellers}</span>
                      <button onClick={() => setTravellers(travellers + 1)}>+</button>
                    </div>
                  </div>
                  <div className="popup-row">
                    <span>Class</span>
                    <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
                      <option>Economy</option>
                      <option>Premium Economy</option>
                      <option>Business</option>
                      <option>First Class</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="search-bottom">
          {/* If multicity, maybe allow travelers config or just keep it simple logic for now */}
          {tripType === "multicity" ? (
            <div className="multicity-footer">
              <div className="search-field" style={{ minWidth: '250px' }} ref={travellerRef}>
                <label>Travelers & Class</label>
                <div className="field-input clickable" onClick={() => setShowTravellerBox(!showTravellerBox)}>
                  <span>{travellers} Traveller(s) — {travelClass}</span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                {/* Multicity traveler popup logic reuse */}
                {showTravellerBox && (
                  <div className="traveller-popup">
                    <div className="popup-row">
                      <span>Travellers</span>
                      <div className="counter">
                        <button onClick={() => setTravellers(Math.max(1, travellers - 1))}>−</button>
                        <span>{travellers}</span>
                        <button onClick={() => setTravellers(travellers + 1)}>+</button>
                      </div>
                    </div>
                    <div className="popup-row">
                      <span>Class</span>
                      <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <button className="search-btn" onClick={handleSearch} style={{ marginLeft: 'auto' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            Search Flights
          </button>
        </div>
      </div>

      {flights.length > 0 && (
        <div className="flight-results">
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

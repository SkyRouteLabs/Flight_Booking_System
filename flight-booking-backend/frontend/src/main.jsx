import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PassengerDetails from "./components/PassengerDetails";
import BookingConfirmed from "./components/BookingConfirmed";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/passenger-details" element={<PassengerDetails />} />
      <Route path="/booking-confirmed" element={<BookingConfirmed />} />
    </Routes>
  </BrowserRouter>
);

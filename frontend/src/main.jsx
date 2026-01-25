import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PassengerDetails from "./components/PassengerDetails";
import BookingConfirmed from "./components/BookingConfirmed";
import ComingSoon from "./components/ComingSoon";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Experience from "./components/Experience";
import PrivateClub from "./components/PrivateClub";
import Contact from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/passenger-details" element={<PassengerDetails />} />
      <Route path="/booking-confirmed" element={<BookingConfirmed />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/private-club" element={<PrivateClub />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

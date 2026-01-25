import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        BOOK CALL NOW - 987654321
      </div>

      {/* Main Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Skyninja
            </Link>
          </div>

          <div className="nav-links">
            <a href="#">EXPLORE</a>
            <a href="#">BOOK</a>
            <a href="#">EXPERIENCE</a>
            <a href="#">PRIVATE CLUB</a>
            <a href="#">CONTACT</a>
          </div>

          <div className="nav-buttons">
            <Link to="/signup">
              <button className="btn-outline">SIGN UP</button>
            </Link>
            <Link to="/login">
              <button className="btn-filled">LOG IN</button>
            </Link>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              <em>Endless Budget</em><br />
              <em>Flights. One Search.</em>
            </h1>
          </div>
          <div className="hero-right">
            <p>
              Finish Your Year With A Mini Break. Save 15% Or More When You Book And
              Stay By 7 January 2025. Not Sure Where To Go? Use Our Interactive Map
              To Find Flights To Great Destinations.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

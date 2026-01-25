import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Header({ customHero }) {
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
            <Link to="/">BOOK</Link>
            <Link to="/experience">EXPERIENCE</Link>
            <Link to="/private-club">PRIVATE CLUB</Link>
            <Link to="/contact">CONTACT</Link>
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

        {customHero ? customHero : (
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
                Stay By 31 January 2026. Not Sure Where To Go? Use Our Interactive Map
                To Find Flights To Great Destinations.
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

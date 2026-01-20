export default function Header({ children }) {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">Skyscanner</div>

        <div className="nav-right">
          <span>Help</span>
          <span>❤</span>
          <span>Log in</span>
        </div>
      </div>

      <h1 className="title">
        Millions of cheap flights. One simple search.
      </h1>

      {/* Search bar + options must live INSIDE header */}
      {children}
    </header>
  );
}


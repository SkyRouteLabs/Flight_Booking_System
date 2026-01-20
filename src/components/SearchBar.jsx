export default function SearchBar() {
  return (
    <div className="search-wrapper">
      <div className="search-box">

        <div className="field">
          <label>From</label>
          <input value="India (IN)" readOnly />
        </div>

        <div className="field">
          <label>To</label>
          <input placeholder="Country, city or airport" />
        </div>

        <div className="field">
          <label>Depart</label>
          <input type="date" />
        </div>

        <div className="field">
          <label>Return</label>
          <input type="date" />
        </div>

        <div className="field">
          <label>Travellers & cabin class</label>
          <input value="1 Adult, Economy" readOnly />
        </div>

        <button className="search-btn">Search</button>
      </div>

    </div>
  );
}

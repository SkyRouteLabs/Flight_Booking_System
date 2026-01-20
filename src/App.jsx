import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CheapestDestinations from "./components/CheapestDestinations";
import FAQ from "./components/FAQ";
import InternationalSites from "./components/InternationalSites";
import PlanningAdventure from "./components/PlanningAdventure";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header>
        <div className="search-wrapper">
          <SearchBar />

          <div className="search-options">
            <label>
              <input type="checkbox" /> Add nearby airports
            </label>
            <label>
              <input type="checkbox" /> Direct flights
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Add a hotel
            </label>
          </div>
        </div>
      </Header>

      <div className="main-content">
        <CheapestDestinations />
      </div>

      {/* Your sections start here */}
      <FAQ />
      <InternationalSites />
      <PlanningAdventure />
      <Footer />
    </>
  );
}

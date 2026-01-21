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
        <SearchBar />
      </Header>

      <div className="main-content">
        <CheapestDestinations />
      </div>

      {/* Your sections */}
      <FAQ />
      <InternationalSites />
      <PlanningAdventure />
      <Footer />
    </>
  );
}

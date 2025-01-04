import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Islands from "./Components/Islands";
import About from "./Components/About";
import { useState } from "react";
function App() {
  const [selectedIsland, setSelectedIsland] = useState(null); // Track selected island

  const handleIslandClick = (islandName) => {
    setSelectedIsland(islandName); // Update the selected island
  };
  return (
    <div className="max-screen-width">
      <Navbar/>
      <Hero/>
      <Map onIslandClick={handleIslandClick} />
      <Islands selectedIsland={selectedIsland} />
      <About/>
    </div>
  )
}

export default App

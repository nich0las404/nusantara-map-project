import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Islands from "./Components/Islands";
function App() {

  return (
    <div className="max-screen-width">
      <Navbar/>
      <Hero/>
      <Map/>
      <Islands/>
    </div>
  )
}

export default App

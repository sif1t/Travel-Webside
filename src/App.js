import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Search from "./components/Search";
import Selects from "./components/Selects";
import SelectsCard from "./components/SelectsCard";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      <Selects/>
      <SelectsCard/>
    </div>
  );
}

export default App;
 
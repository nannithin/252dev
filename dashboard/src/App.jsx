import React from "react";
import Nav from './nav'
import Home from "./home";
import Card from "./card";
import About from "./about";
const App= () =>{
  return(
    <div className="bg-[#f5f5fd] min-h-screen">
      <Nav />
      <Home />
      <About />
    </div>
  )
}

export default App;
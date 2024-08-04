import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { name as UserName, city as City, image as Image } from "../data/data";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <UserName />
      <City />
      <Image />
    </div>
  );
}

export default App;

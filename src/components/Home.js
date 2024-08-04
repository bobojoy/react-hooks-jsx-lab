import React from "react";
import { name as username, city } from "../data/data";

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {username} is a Web Developer from {city}
      </h1>
      <p></p>
    </div>
  );
}

export default Home;

import React from "react";
import Navbar from "../components/navbar/navbar";
import Background from "../components/background/background";
import CardView from "../components/cardview/cardview";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container" id="container">
      <CardView />
      <Navbar />
      <Background />
    </div>
  );
}

export default Homepage;

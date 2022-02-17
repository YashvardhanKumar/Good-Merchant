import React from "react";
import Navbar from "../../components/navbar/navbar";
import Background from "../../components/background/background";
import IntroCards from "../../components/IntroCards/IntroCards";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container" id="container">
      <IntroCards />
      <Navbar />
      <Background />
    </div>
  );
}

export default Homepage;

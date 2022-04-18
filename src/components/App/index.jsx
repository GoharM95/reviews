import React, { useState } from "react";
import "./App.css";
import Reviews from "../Reviews";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Reviews />
      </div>
    );
  }
}

export default App;

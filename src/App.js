import React from "react";
import "./styles.css";

import ClickerFn from "./components/ClickerFn";
import ClickerClass from "./components/ClickerClass";

function App() {
  return (
    <div className="App">
      <ClickerFn />
      <br />
      <ClickerClass />
    </div>
  );
}

export default App;

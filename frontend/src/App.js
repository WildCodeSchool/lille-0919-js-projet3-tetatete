import React from "react";
import FilterTab from "./components/FilterTab";
import "./App.scss";

const { siteTitle } = require("./conf.js");

function App() {
  return (
    <div className="App">
      <FilterTab />
    </div>
  );
}

export default App;

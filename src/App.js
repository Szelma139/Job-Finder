import "./App.css";
import React from "react";

import { StoryContainer } from "./Components/StoryContainer";
import { Header } from "./Components/Header";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <StoryContainer/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

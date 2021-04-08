import React from "react";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

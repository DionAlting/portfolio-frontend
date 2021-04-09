import React from "react";

import { Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100 pb-40 md:pb-10">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;

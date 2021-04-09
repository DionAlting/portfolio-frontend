import React from "react";

import { Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="relative min-h-screen pb-40 bg-gray-100 md:pb-10">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

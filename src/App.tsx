import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { User } from "./redux";

import { Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { useBootstrapLogin } from "./hooks/useBootstrapLogin";

import BackOffice from "./pages/BackOffice/BackOffice";
import Home from "./pages/Home";
import Jukebox from "./pages/Jukebox";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Reserve from "./pages/Reserve";
import SignUp from "./pages/SignUp";
import Stamp from "./pages/Stamp";

import AuthRoute from "./util/AuthRoute";
import AdminRoute from "./util/AdminRoute";

function App() {
  useBootstrapLogin();

  const { isAuthenticated, isAdmin } = useSelector(User.Selectors.user);
  return (
    <div className="relative min-h-screen mb-20 bg-gray-100 lg:mb-0">
      <Navbar />
      <ToastContainer autoClose={2000} position="bottom-center" />
      <Switch>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          authenticationPath="/login"
          path="/profile"
          component={Profile}
        />
        <AdminRoute
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          authenticationPath="/login"
          path="/backoffice"
          component={BackOffice}
        />
        <Route path="/stampcard" component={Stamp} />
        <Route path="/jukebox" component={Jukebox} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

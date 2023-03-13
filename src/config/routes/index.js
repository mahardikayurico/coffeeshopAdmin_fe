import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePages, LoginPages } from "../../pages";

const RoutesCoffee = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" components="HomePages /"></Route>
        <Route path="/loginPages">
          <LoginPages />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesCoffee;

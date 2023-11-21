import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import Header from "./components/Header";

function Root() {
  return (
    <div className="App">
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default Root;

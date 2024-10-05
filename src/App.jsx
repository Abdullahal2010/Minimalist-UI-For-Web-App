import React from "react";
import "./App.css";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return <Route path={route.path} key={index} element={route.element} />;
      })}
    </Routes>
  );
};

export default App;

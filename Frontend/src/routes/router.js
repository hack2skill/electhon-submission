import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Quizfile from "../pages/Quiz/Quizfile";
import Map from "../pages/Map.jsx/Map";
import MapContainer from "../Components/map_component/map_c.jsx";
import { ROUTES } from "./router.config";
import Process from "../pages/Process/Process";
const Router = () => {
  const RouteWithRole = ({ Element }) => {
    return (
      <>
        <Element />
      </>
    );
  };

  return (
    <div>
      <Routes>
        <Route
          exact
          path={ROUTES.Home}
          element={<RouteWithRole Element={Home} />}
        ></Route>
        <Route
          exact
          path={ROUTES.Dashboard}
          element={<RouteWithRole Element={Dashboard} />}
        ></Route>
        <Route
          exact
          path={ROUTES.Quiz}
          element={<RouteWithRole Element={Quizfile} />}
        ></Route>
        <Route
          exact
          path={ROUTES.Map}
          element={<RouteWithRole Element={Map} />}
        ></Route>
        <Route
          exact
          path={ROUTES.map}
          element={<RouteWithRole Element={MapContainer} />}
        ></Route>
        <Route
          exact
          path={ROUTES.Process}
          element={<RouteWithRole Element={Process} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Router;

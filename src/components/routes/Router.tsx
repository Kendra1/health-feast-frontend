import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { PublicOnlyRoute } from "./PublicOnlyRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../pages/Dashboard";
import { RegistrationPage } from "../pages/RegistrationPage";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <PublicOnlyRoute path="/login" component={LoginPage} />
      <PublicOnlyRoute path="/registration" component={RegistrationPage} />
      <PrivateRoute path="/" component={Dashboard} />
      <Route path="">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

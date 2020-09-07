import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { PublicOnlyRoute } from "./PublicOnlyRoute";
import { Dashboard } from "../pages/Dashboard";
import { RegistrationPage } from "../pages/RegistrationPage";
import { NavBar } from "../common/NavBar";

import "../../assets/styles/index.css";
import { Account } from "../pages/Account";
import { EditProfile } from "../pages/EditProfile";
import { MealHistory } from "../pages/MealHistory";
import { WorkoutHistory } from "../pages/WorkoutHistory";
import { SelectedRecipe } from "../pages/SelectedRecipe";
import { PrivateRoute } from "./PrivateRoute";
import { WorkoutDashboard } from "../workouts/WorkoutDashboard";

export const Router = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <PublicOnlyRoute path="/login" component={LoginPage} />
      <PublicOnlyRoute path="/registration" component={RegistrationPage} />
      <PrivateRoute path="/account" component={Account} />
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/mealHistory" component={MealHistory} />
      <Route path="/workoutHistory" component={WorkoutHistory} />
      <Route path="/selectedRecipe" component={SelectedRecipe} />
      <Route path="/workouts" component={WorkoutDashboard} />
      <Route path="/" component={Dashboard} />
      <Route path="">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

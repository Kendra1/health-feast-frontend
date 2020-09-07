import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useNavbarStyle } from "../../assets/styles/navbar";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../app/auth/auth.actions";
import { selectLoggedUser } from "../../app/auth/auth.selectors";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navbarStyle = useNavbarStyle();
  const history = useHistory();

  const loggedUser = useSelector(selectLoggedUser);

  const goToAccount = () => {
    history.push("account");
  };

  const logout = () => {
    dispatch(logoutUser());
    history.push("login");
  };

  const login = () => {
    history.push("login");
  };

  const registrate = () => {
    history.push("registration");
  };

  const recipes = () => {
    history.push("");
  };

  const workouts = () => {
    history.push("workouts");
  };

  return (
    <AppBar position="static" className={navbarStyle.navbar}>
      <Toolbar>
        <Button color="inherit" onClick={recipes}>
          Recipes
        </Button>
        <Button color="inherit" onClick={workouts}>
          Workouts
        </Button>
        <IconButton onClick={goToAccount} color="inherit" aria-label="menu">
          <PersonIcon />
        </IconButton>
        {loggedUser ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" onClick={login}>
              Login
            </Button>
            <Button color="inherit" onClick={registrate}>
              Registrate
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

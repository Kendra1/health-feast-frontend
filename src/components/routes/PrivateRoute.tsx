import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { Redirect, Route, RouteProps } from 'react-router-dom';
import { selectLoggedUser } from '../../app/auth/auth.selectors'

export const PrivateRoute: FunctionComponent<RouteProps> = (props) => {
  const loggedUser = useSelector(selectLoggedUser);

  if (!loggedUser) {
    return <Redirect to="/login" />
  }

  return (
    <Route {...props} />
  )
}
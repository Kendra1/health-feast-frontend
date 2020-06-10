import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsInitComplete } from "./app/init/init.selectors";
import { initApp } from "./app/init/init.actions";

export const Initializer: FunctionComponent = ({ children }) => {
  const dispatch = useDispatch();
  const isInitComplete = useSelector(selectIsInitComplete);

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  return isInitComplete ? <>{children}</> : null;
};

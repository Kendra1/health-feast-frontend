import React from "react";

import { Container, Grid } from "@material-ui/core";

import { usePageStyle } from "../../assets/styles/page";
import { WorkoutFilters } from "./WorkoutFilters";

export const WorkoutDashboard = () => {
  const pageClasses = usePageStyle();

  return (
    <Container maxWidth="xl" className={pageClasses.root}>
      <Grid container direction="column" className={pageClasses.gridContainer}>
        <Grid item className={pageClasses.item}>
          <WorkoutFilters />
        </Grid>
        <Grid item className={pageClasses.item}></Grid>
      </Grid>
    </Container>
  );
};

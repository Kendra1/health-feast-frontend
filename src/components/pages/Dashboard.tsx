import React from "react";

import { Container, Grid } from "@material-ui/core";

import { usePageStyle } from "../../assets/styles/page";
import { Filters } from "../dashboard/Filters";
import { RecipeSearch } from "../dashboard/RecipeSearch";
import { Recipes } from "../dashboard/Recipes";

export const Dashboard = () => {
  const pageClasses = usePageStyle();

  return (
    <Container maxWidth="xl" className={pageClasses.root}>
      <Grid container direction="column" className={pageClasses.gridContainer}>
        <Grid item className={pageClasses.item}>
          <RecipeSearch />
        </Grid>
        <Grid item className={pageClasses.item}>
          <Filters />
        </Grid>
        <Grid item className={pageClasses.item}>
          <Recipes />
        </Grid>
      </Grid>
    </Container>
  );
};

import React, { useState } from "react";
import { Container, Grid, IconButton } from "@material-ui/core";
import { RecipeName } from "./RecipeName";
import { useIngredientsStyle } from "../../assets/styles/ingredients";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export const RecipeSearch = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  const pageClasses = useIngredientsStyle();

  return (
    <Container>
      <Grid
        className={pageClasses.header}
        container
        direction="row"
        justify="space-between"
      >
        <div className={pageClasses.mainTitle}>Search by recipes name</div>
        <IconButton onClick={handleExpansion}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Grid>
      <Grid
        item
        style={expanded ? { display: "initial" } : { display: "none" }}
      >
        <RecipeName />
      </Grid>
    </Container>
  );
};

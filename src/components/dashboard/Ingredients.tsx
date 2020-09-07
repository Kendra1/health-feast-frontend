import React, { useState, FunctionComponent } from "react";

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useIngredientsStyle } from "../../assets/styles/ingredients";
import { usePageStyle } from "../../assets/styles/page";

export const Ingredients: FunctionComponent<{ state: any; setState: any }> = ({
  state,
  setState,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: any, name: string) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  const pageClasses = useIngredientsStyle();
  const generalClasses = usePageStyle();

  return (
    <Grid container className={generalClasses.filter}>
      <Grid
        className={pageClasses.header}
        container
        direction="row"
        justify="space-between"
      >
        <div className={pageClasses.title}>Ingredients</div>
        <IconButton onClick={handleExpansion}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Grid>
      <Grid
        item
        style={expanded ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <FormGroup row>
          {Object.keys(state).map((ingredient, i) => (
            <FormControlLabel
              key={`${i}_${ingredient}`}
              control={
                <Checkbox
                  checked={state.ingredient}
                  onChange={(e) => handleChange(e, ingredient)}
                  name={`${ingredient}`}
                />
              }
              label={`${ingredient}`}
            />
          ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

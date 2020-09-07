import React, { useState, FunctionComponent } from "react";
import {
  Grid,
  IconButton,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { MEAL_TYPES } from "../../app/recipes/recipes.constants";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useIngredientsStyle } from "../../assets/styles/ingredients";
import { usePageStyle } from "../../assets/styles/page";

export const MealType: FunctionComponent<{ value: any; setValue: any }> = ({
  value,
  setValue,
}) => {
  const mapToState = () => {
    const state: any = {};
    MEAL_TYPES.forEach((type) => {
      state[type] = false;
    });
    return state;
  };

  const [expanded, setExpanded] = useState(false);
  const [stateTypes, setStateTypes] = useState(mapToState);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
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
        <div className={pageClasses.title}>Meal Type</div>
        <IconButton onClick={handleExpansion}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Grid>
      <Grid
        item
        style={expanded ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <RadioGroup row value={value} onChange={handleChange}>
          {Object.keys(stateTypes).map((dietType, i) => (
            <FormControlLabel
              key={`${i}_${dietType}`}
              value={dietType}
              control={<Radio />}
              label={`${dietType}`}
            />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

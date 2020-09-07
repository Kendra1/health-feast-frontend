import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { usePageStyle } from "../../assets/styles/page";
import { useDispatch } from "react-redux";
import {
  getRecipes,
  getRecipesByName,
} from "../../app/recipes/recipes.actions";

export const RecipeName = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleFromChange = (event: any) => {
    setValue(event.target.value);
  };

  const generalClasses = usePageStyle();

  const handleSearch = () => {
    dispatch(getRecipesByName(value));
  };

  return (
    <Grid container className={generalClasses.filter}>
      <FormControl>
        <Input
          value={value}
          onChange={handleFromChange}
          aria-describedby="standard-weight-helper-text"
        />
        <FormHelperText id="standard-weight-helper-text">
          Recipes Name
        </FormHelperText>
      </FormControl>
      <Button
        style={{ marginBottom: "50px", backgroundColor: "#01a9fe" }}
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Grid>
  );
};

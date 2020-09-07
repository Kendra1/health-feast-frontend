import React, { useState, FunctionComponent } from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  FormControl,
  Input,
  FormHelperText,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useIngredientsStyle } from "../../assets/styles/ingredients";
import { usePageStyle } from "../../assets/styles/page";

export const Kcal: FunctionComponent<{
  from: any;
  setFrom: any;
  to: any;
  setTo: any;
}> = ({ from, setFrom, to, setTo }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleFromChange = (event: any) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event: any) => {
    setTo(event.target.value);
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
        <div className={pageClasses.title}>Calories burnt</div>
        <IconButton onClick={handleExpansion}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Grid>
      <Grid
        item
        style={expanded ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <FormControl>
          <Input
            value={from}
            onChange={handleFromChange}
            endAdornment={<InputAdornment position="end">kcal</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText id="standard-weight-helper-text">From</FormHelperText>
        </FormControl>
        <FormControl>
          <Input
            value={to}
            onChange={handleToChange}
            endAdornment={<InputAdornment position="end">kcal</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText id="standard-weight-helper-text">To</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

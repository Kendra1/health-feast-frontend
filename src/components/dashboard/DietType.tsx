import React, { useState, FunctionComponent } from "react";
import {
  Grid,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useIngredientsStyle } from "../../assets/styles/ingredients";
import { usePageStyle } from "../../assets/styles/page";

export const DietType: FunctionComponent<{ state: any; setState: any }> = ({
  state,
  setState,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event: any, name: string) => {
    setState({ ...state, [name]: event.target.checked });
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
        <div className={pageClasses.title}>Diet Types</div>
        <IconButton onClick={handleExpansion}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Grid>
      <Grid
        item
        style={expanded ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <FormGroup row>
          {Object.keys(state).map((dietType, i) => (
            <FormControlLabel
              key={`${i}_${dietType}`}
              control={
                <Checkbox
                  checked={state.dietType}
                  onChange={(e) => handleChange(e, dietType)}
                  name={`${dietType}`}
                />
              }
              label={`${dietType}`}
            />
          ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

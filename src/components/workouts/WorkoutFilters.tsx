import React, { useState, useEffect } from "react";
import { Container, Grid, IconButton, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { useIngredientsStyle } from "../../assets/styles/ingredients";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import {
  getRecipes,
  storeFilterIngredients,
} from "../../app/recipes/recipes.actions";
import {
  getAllExercises,
  getWorkouts,
  storeExercisesFilter,
} from "../../app/exercises/exercises.actions";
import { selectAllExercises } from "../../app/exercises/exercises.selectors";
import {
  setWorkoutTypeFilter,
  setExercisesFilter,
  setTimeFilter,
  setKcalFilter,
} from "./utils";
import { Exercises } from "./Exercises";
import { WorkoutType } from "./WorkoutType";
import { Duration } from "./Duration";
import { Kcal } from "./Kcal";

export const WorkoutFilters = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  // useEffect(() => {
  //   dispatch(getAllExercises());
  // }, []);

  const loadedExercises = useSelector(selectAllExercises);
  //to utils
  const mapToState = (exercises: any) => {
    const state: any = {};
    exercises.forEach((exercise: any) => {
      state[exercise] = false;
    });
    return state;
  };

  const [exercises, setExercises] = useState(mapToState(loadedExercises));
  const [workoutType, setWorkoutType] = useState("");

  const [fromMins, setFromMins] = useState("");
  const [toMins, setToMins] = useState("");

  const [fromKcal, setFromKcal] = useState("");
  const [toKcal, setToKcal] = useState("");

  const handleSearch = () => {
    const filters = {};
    setExercisesFilter(filters, exercises);
    setWorkoutTypeFilter(filters, workoutType);
    setTimeFilter(filters, fromMins, toMins);
    setKcalFilter(filters, fromKcal, toKcal);
    dispatch(storeExercisesFilter(filters));
    dispatch(getWorkouts());
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
        <div className={pageClasses.mainTitle}>Filters</div>
        <IconButton onClick={handleExpansion}>
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Grid>
      <Grid
        item
        style={expanded ? { display: "initial" } : { display: "none" }}
      >
        <Exercises state={exercises} setState={setExercises} />
        <WorkoutType value={workoutType} setValue={setWorkoutType} />
        <Duration
          from={fromMins}
          setFrom={setFromMins}
          to={toMins}
          setTo={setToMins}
        />
        <Kcal
          from={fromKcal}
          setFrom={setFromKcal}
          to={toKcal}
          setTo={setToKcal}
        />

        <Button
          style={{ marginBottom: "50px", backgroundColor: "#01a9fe" }}
          variant="contained"
          color="primary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
    </Container>
  );
};

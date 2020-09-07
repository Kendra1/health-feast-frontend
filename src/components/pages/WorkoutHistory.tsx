import "date-fns";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import { usePageStyle } from "../../assets/styles/page";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useMealHistoryStyle } from "../../assets/styles/mealHistory";
import Paper from "@material-ui/core/Paper";
import {
  selectMealHistory,
  selectAllIngredients,
  selectAllRecipes,
  selectAllWorkouts,
} from "../../app/account/account.selectors";

import { useSelector, useDispatch } from "react-redux";
import { getAllWorkouts } from "../../app/account/account.actions";

export const WorkoutHistory = () => {
  const dispatch = useDispatch();
  const pageClasses = usePageStyle();
  const mealHistoryClasses = useMealHistoryStyle();

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, []);

  // const mealHistory = useSelector(selectMealHistory);
  const allWorkouts = useSelector(selectAllWorkouts);

  const [workout, setWorkout] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const handleChange = (event: any) => {
    setWorkout(event.target.value);
  };

  const dateObj = new Date();
  const [selectedDate, setSelectedDate] = useState(
    dateObj.getFullYear() +
      "-" +
      (dateObj.getMonth() + 1) +
      "-" +
      dateObj.getDate()
  );

  const handleDateChange = (date: any) => {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    // dispatch(getMealHistory(`${day}-${month}-${year}`));
    //get workout history
    setSelectedDate(date);
  };

  const addWorkout = () => {
    // dispatch(addHistoryMeal(mealObject));
  };

  const handleDurationChange = (event: any) => {
    setDuration(event.target.value);
  };

  return (
    <Container maxWidth="xl" className={mealHistoryClasses.root}>
      <Grid
        container
        direction="column"
        className={`${pageClasses.gridContainer}`}
      >
        <Grid item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item>
          <TableContainer
            component={Paper}
            style={{ minWidth: "30rem", backgroundColor: "#466372" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Meal Name</TableCell>
                  <TableCell align="right">Calories</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {mealHistory.map((row: any) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        className={`${pageClasses.gridContainer}`}
      >
        <Typography className={mealHistoryClasses.caption}>Add Meal</Typography>
        <FormControl className={mealHistoryClasses.select}>
          <InputLabel id="demo-simple-select-label">Meal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={workout}
            onChange={handleChange}
          >
            {allWorkouts.map((workout: any, i: number) => (
              <MenuItem key={`workout_${i}`} value={workout.name}>
                {workout.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={mealHistoryClasses.select}
          id="standard-basic"
          label="Amount"
          value={duration}
          onChange={handleDurationChange}
        />
        <Button
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            backgroundColor: "#01a9fe",
            maxWidth: "20rem",
          }}
          variant="contained"
          color="primary"
          onClick={addWorkout}
        >
          Add
        </Button>
      </Grid>
    </Container>
  );
};

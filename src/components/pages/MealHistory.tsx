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
  selectRecommendedCalories,
  selectCaloriesIntake,
} from "../../app/account/account.selectors";

import { useSelector, useDispatch } from "react-redux";
import {
  getMealHistory,
  addHistoryMeal,
  getAllRecipes,
  getAllIngredients,
  getCalorieIntake,
  getRecommendedCalories,
} from "../../app/account/account.actions";
import { useAccountStyle } from "../../assets/styles/account";

export const MealHistory = () => {
  const accountClasses = useAccountStyle();
  const dispatch = useDispatch();
  const pageClasses = usePageStyle();
  const mealHistoryClasses = useMealHistoryStyle();

  useEffect(() => {
    dispatch(getAllIngredients());
    dispatch(getAllRecipes());
    dispatch(getRecommendedCalories());
    dispatch(getCalorieIntake());
  }, []);

  const mealHistory = useSelector(selectMealHistory);
  const allIngredients = useSelector(selectAllIngredients);
  const allRecipes = useSelector(selectAllRecipes);
  const meals = allIngredients.concat(allRecipes);
  const recommendedKcal = useSelector(selectRecommendedCalories);
  const currentKcal = useSelector(selectCaloriesIntake);

  const [meal, setMeal] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleChange = (event: any) => {
    setMeal(event.target.value);
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
    dispatch(getMealHistory(`${day}-${month}-${year}`));
    setSelectedDate(`${day}-${month}-${year}`);
  };

  const addMeal = () => {
    const mealObject: any = {};
    const result = allRecipes.filter((recipe: any) => recipe.name === meal);
    if (result.length) {
      mealObject["type"] = "recipe";
    } else {
      mealObject["type"] = "ingredient";
    }
    mealObject["meal"] = meal;
    mealObject["amount"] = amount;
    mealObject["date"] = selectedDate;
    dispatch(addHistoryMeal(mealObject));
  };

  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };
  return meals ? (
    <Container maxWidth="xl" className={mealHistoryClasses.root}>
      <Grid
        container
        direction="column"
        className={`${pageClasses.gridContainer}`}
      >
        <Grid item>
          <Typography className={accountClasses.item}>
            Daily calorie goal: {recommendedKcal}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={accountClasses.item}>
            Current calorie intake: {currentKcal}
          </Typography>
        </Grid>
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
                {mealHistory.map((row: any) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                  </TableRow>
                ))}
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
            value={meal}
            onChange={handleChange}
          >
            {meals.map((meal: any, i: number) => (
              <MenuItem key={`meal_${i}`} value={meal}>
                {meal}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={mealHistoryClasses.select}
          id="standard-basic"
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
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
          onClick={addMeal}
        >
          Add
        </Button>
      </Grid>
    </Container>
  ) : null;
};

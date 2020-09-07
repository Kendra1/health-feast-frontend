import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { usePageStyle } from "../../assets/styles/page";
import { useAccountStyle } from "../../assets/styles/account";
import {
  Container,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoggedUsersData,
  selectGoal,
  selectRecommendedCalories,
  selectCaloriesIntake,
} from "../../app/account/account.selectors";
import {
  getLoggedUsersData,
  getRecommendedCalories,
  getCalorieIntake,
  updateGoal,
} from "../../app/account/account.actions";
import { GOALS } from "../../app/account/account.constants";
import { useMealHistoryStyle } from "../../assets/styles/mealHistory";

export const Account = () => {
  const pageClasses = usePageStyle();
  const accountClasses = useAccountStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const mealHistoryClasses = useMealHistoryStyle();

  useEffect(() => {
    dispatch(getLoggedUsersData());
    dispatch(getRecommendedCalories());
    dispatch(getCalorieIntake());
  }, []);
  const recommendedKcal = useSelector(selectRecommendedCalories);
  const currentKcal = useSelector(selectCaloriesIntake);
  const [goal, setGoal] = useState(useSelector(selectGoal) ?? "STAGNATE");

  const user = useSelector(selectLoggedUsersData);

  const onGoalChange = (event: any) => {
    setGoal(event.target.value);
    dispatch(updateGoal(event.target.value));
  };

  const editProfile = () => {
    history.push("/editProfile");
  };

  const mealHistory = () => {
    history.push("/mealHistory");
  };

  const workoutHistory = () => {
    history.push("/workoutHistory");
  };

  return user ? (
    <Container maxWidth="xl" className={pageClasses.root}>
      <Grid
        container
        direction="column"
        className={`${pageClasses.gridContainer}`}
      >
        <Grid item>
          <Typography className={accountClasses.item}>
            Name: {user.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={accountClasses.item}>
            Last Name: {user.lastName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={accountClasses.item}>
            Age: {user.age}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={accountClasses.item}>
            Height: {user.height}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={accountClasses.item}>
            Weight: {user.weight}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={accountClasses.item}>
            Activity: {user.activity}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              backgroundColor: "#01a9fe",
            }}
            variant="contained"
            color="primary"
            onClick={editProfile}
          >
            Edit profile
          </Button>
        </Grid>
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
          <FormControl className={mealHistoryClasses.select}>
            <InputLabel id="demo-simple-select-label">Goal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={goal}
              onChange={onGoalChange}
            >
              {GOALS.map((item: any, i: number) => (
                <MenuItem key={`goal_${i}`} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              backgroundColor: "#01a9fe",
            }}
            variant="contained"
            color="primary"
            onClick={mealHistory}
          >
            Meal History
          </Button>
          <Button
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              backgroundColor: "#01a9fe",
            }}
            variant="contained"
            color="primary"
            onClick={workoutHistory}
          >
            Workout History
          </Button>
        </Grid>
      </Grid>
    </Container>
  ) : null;
};

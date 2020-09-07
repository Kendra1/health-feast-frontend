import React, { useState } from "react";
import { usePageStyle } from "../../assets/styles/page";
import {
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedUsersData } from "../../app/account/account.selectors";
import { useAccountStyle } from "../../assets/styles/account";
import { useMealHistoryStyle } from "../../assets/styles/mealHistory";
import { ACTIVITIES } from "../../app/account/account.constants";
import { saveUserData } from "../../app/account/account.actions";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const EditProfile = () => {
  const user = useSelector(selectLoggedUsersData);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName ?? "");
  const [lastName, setLastName] = useState(user.lastName ?? "");
  const [height, setHeight] = useState(user.height ?? "");
  const [weight, setWeight] = useState(user.weight ?? "");
  const [activity, setActivity] = useState(user.activity ?? "");

  const [selectedDate, setSelectedDate] = useState(
    user.birthDate ?? new Date("2014-08-08")
  );

  const pageClasses = usePageStyle();
  const accountClasses = useAccountStyle();
  const mealHistoryClasses = useMealHistoryStyle();

  const onNameChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const onHeightChange = (event: any) => {
    setHeight(event.target.value);
  };

  const onWeightChange = (event: any) => {
    setWeight(event.target.value);
  };

  const onActivityChange = (event: any) => {
    setActivity(event.target.value);
  };

  const save = () => {
    const day = ("0" + selectedDate.getDate()).slice(-2);
    const month = ("0" + (selectedDate.getMonth() + 1)).slice(-2);
    const year = selectedDate.getFullYear();
    const userData = {
      purchasePoints: user.purchasePoints,
      birthDate: `${day}-${month}-${year}`,
      height: height,
      weight: weight,
      activity: activity,
    };
    dispatch(saveUserData(userData));
  };

  return (
    <Container maxWidth="xl" className={pageClasses.root}>
      <Grid container direction="column" className={pageClasses.gridContainer}>
        <Grid item>
          <TextField
            className={mealHistoryClasses.select}
            id="standard-basic"
            label="Last Name"
            value={firstName}
            onChange={onNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={mealHistoryClasses.select}
            id="standard-basic"
            label="Last Name"
            value={lastName}
            onChange={onLastNameChange}
          />
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
          <TextField
            className={mealHistoryClasses.select}
            id="standard-basic"
            label="Height"
            value={height}
            onChange={onHeightChange}
          />
        </Grid>
        <Grid item>
          <TextField
            className={mealHistoryClasses.select}
            id="standard-basic"
            label="Weight"
            value={weight}
            onChange={onWeightChange}
          />
        </Grid>
        <Grid item>
          <FormControl className={mealHistoryClasses.select}>
            <InputLabel id="demo-simple-select-label">Activity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={activity}
              onChange={onActivityChange}
            >
              {ACTIVITIES.map((item: any, i: number) => (
                <MenuItem key={`activity_${i}`} value={item}>
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
              maxWidth: "20rem",
            }}
            variant="contained"
            color="primary"
            onClick={save}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

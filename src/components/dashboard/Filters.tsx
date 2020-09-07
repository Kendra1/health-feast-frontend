import React, { useState, useEffect } from "react";
import { Container, Grid, IconButton, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selectIngredients } from "../../app/recipes/recipes.selectors";
import { IIngredient } from "../../app/recipes/recipes.types";
import { Ingredients } from "./Ingredients";
import { DietType } from "./DietType";
import { DIET_TYPES } from "../../app/recipes/recipes.constants";
import { Cuisine } from "./Cuisine";
import { MealType } from "./MealType";
import { PreparationTime } from "./PreparationTime";
import { Calories } from "./Calories";
import { NumberOfPeople } from "./NumberOfPeople";
import { Allergens } from "./Allergens";
import { useIngredientsStyle } from "../../assets/styles/ingredients";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  setIngredientFilter,
  setDietTypeFilter,
  setCuisineFilter,
  setMealTypeFilter,
  setTimeFilter,
  setKcalFilter,
  setPplFilter,
  setAllergensFilter,
} from "./utils";
import {
  getRecipes,
  storeFilterIngredients,
  getIngredients,
} from "../../app/recipes/recipes.actions";
import { getAllIngredients } from "../../app/account/account.actions";

export const Filters = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const loadedIngredients = useSelector(selectIngredients);

  //to utils
  const mapToState = (ingredients: any) => {
    const state: any = {};
    ingredients.forEach((ingredient: any) => {
      state[ingredient] = false;
    });
    return state;
  };

  const [ingredients, setIngredients] = useState(mapToState(loadedIngredients));
  const mapToDietState = () => {
    const state: any = {};
    DIET_TYPES.forEach((type) => {
      state[type] = false;
    });
    return state;
  };

  const [dietTypes, setDietTypes] = useState(mapToDietState);

  const [cuisine, setCuisine] = useState("");

  const [mealType, setMealType] = useState("");

  const [fromMins, setFromMins] = useState("");
  const [toMins, setToMins] = useState("");

  const [fromKcal, setFromKcal] = useState("");
  const [toKcal, setToKcal] = useState("");

  const [fromPpl, setFromPpl] = useState("");
  const [toPpl, setToPpl] = useState("");

  const [allergens, setAllergens] = useState(mapToState(loadedIngredients));

  const handleSearch = () => {
    const filters = {};
    setIngredientFilter(filters, ingredients);
    setDietTypeFilter(filters, dietTypes);
    setCuisineFilter(filters, cuisine);
    setMealTypeFilter(filters, mealType);
    setTimeFilter(filters, fromMins, toMins);
    setKcalFilter(filters, fromKcal, toKcal);
    setPplFilter(filters, fromPpl, toPpl);
    setAllergensFilter(filters, allergens);
    dispatch(storeFilterIngredients(filters));
    dispatch(getRecipes());
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
        <Ingredients
          state={mapToState(loadedIngredients)}
          setState={setIngredients}
        />
        <DietType state={dietTypes} setState={setDietTypes} />
        <Cuisine value={cuisine} setValue={setCuisine} />
        <MealType value={mealType} setValue={setMealType} />
        <PreparationTime
          from={fromMins}
          setFrom={setFromMins}
          to={toMins}
          setTo={setToMins}
        />
        <Calories
          from={fromKcal}
          setFrom={setFromKcal}
          to={toKcal}
          setTo={setToKcal}
        />
        <NumberOfPeople
          from={fromPpl}
          setFrom={setFromPpl}
          to={toPpl}
          setTo={setToPpl}
        />
        <Allergens
          state={mapToState(loadedIngredients)}
          setState={setAllergens}
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

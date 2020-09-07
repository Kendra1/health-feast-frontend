export const setIngredientFilter = (filters, ingredients) => {
  const filterBy = Object.keys(ingredients).filter(
    (ingredient) => ingredients[`${ingredient}`] === true
  );

  if (filterBy.length) {
    filters["ingredients"] = filterBy;
  }
};

export const setDietTypeFilter = (filters, dietTypes) => {
  const filterBy = Object.keys(dietTypes).filter(
    (dietType) => dietTypes[`${dietType}`] === true
  );

  if (filterBy.length) {
    filters["dietType"] = filterBy;
  } else {
    filters["dietType"] = null;
  }
};

export const setCuisineFilter = (filters, cuisine) => {
  filters["kitchenType"] = cuisine ? cuisine : null;
};

export const setMealTypeFilter = (filters, mealType) => {
  filters["mealType"] = mealType ? mealType : null;
};

export const setTimeFilter = (filters, from, to) => {
  filters["fromMins"] = from ? from : null;
  filters["toMins"] = to ? to : null;
};

export const setKcalFilter = (filters, from, to) => {
  filters["fromKcal"] = from ? from : null;
  filters["toKcal"] = to ? to : null;
};

export const setPplFilter = (filters, from, to) => {
  filters["fromPpl"] = from ? from : null;
  filters["toPpl"] = to ? to : null;
};

export const setAllergensFilter = (filters, allergens) => {
  const filterBy = Object.keys(allergens).filter(
    (allergen) => allergens[`${allergen}`] === true
  );

  if (filterBy.length) {
    filters["allergens"] = filterBy;
  } else {
    filters["allergens"] = null;
  }
};

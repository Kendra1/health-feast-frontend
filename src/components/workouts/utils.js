export const setExercisesFilter = (filters, exercises) => {
  const filterBy = Object.keys(exercises).filter(
    (exercise) => exercises[`${exercise}`] === true
  );

  if (filterBy.length) {
    filters["exercises"] = filterBy;
  }
};

export const setWorkoutTypeFilter = (filters, workoutType) => {
  filters["workoutType"] = workoutType ? workoutType : null;
};

export const setTimeFilter = (filters, from, to) => {
  filters["fromDuration"] = from ? from : null;
  filters["toDuration"] = to ? to : null;
};

export const setKcalFilter = (filters, from, to) => {
  filters["fromCaloriesBurnt"] = from ? from : null;
  filters["toCaloriesBurnt"] = to ? to : null;
};

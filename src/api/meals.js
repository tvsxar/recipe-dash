import api from "./axios";

export const getRandomMeals = async () => {
  let meals = [];
  let count = 0;

  try {
    while (meals.length < 10 && count < 20) {
      const response = await api.get("/random.php");
      const meal = response.data.meals[0];

      if (!meals.find((m) => m.idMeal === meal.idMeal)) {
        meals.push(meal);
      }

      count++;
    }
  } catch (err) {
    console.error("Error getting random meals:", err);
  }

  return meals;
};

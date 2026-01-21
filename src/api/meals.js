import api from "./axios";

export const getRandomRecipes = async () => {
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

export const getRecipeDetails = async (id) => {
  try {
    const response = await api.get(`/lookup.php?i=${id}`);
    return response.data.meals[0];
  } catch (err) {
    console.error("Error getting meal details:", err);
  }
};

export const searchRecipesByName = async (name) => {
  try {
    const response = await api.get(`/search.php?s=${name}`);
    return response.data.meals || [];
  } catch (err) {
    console.error("Error getting meals by name:", err);
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get("/list.php?c=list");
    return response.data.meals.map((cat) => cat.strCategory);
  } catch (err) {
    console.error("Error getting categories:", err);
  }
};

export const getRecipesByCategory = async (category) => {
  try {
    const response = await api.get(`/filter.php?c=${category}`);
    return response.data.meals;
  } catch (err) {
    console.error("Error getting meals by category:", err);
  }
};

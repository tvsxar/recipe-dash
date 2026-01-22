import {
  getRandomRecipes,
  getRecipeDetails,
  searchRecipesByName,
  getCategories,
  getRecipesByCategory,
} from "../api/meals";

export const fetchRandomRecipes = async ({ commit, state }) => {
  if (state.loading) return;

  commit("setLoading", true);

  try {
    const recipes = await getRandomRecipes();

    commit("setRandomRecipes", recipes || []);
  } catch (err) {
    console.error("Error fetching random recipes:", err);
  } finally {
    commit("setLoading", false);
  }
};

export const fetchRecipeDetails = async ({ commit }, id) => {
  commit("setLoading", true);

  try {
    const recipe = await getRecipeDetails(id);

    commit("setCurrentRecipe", recipe);
  } catch (err) {
    console.error("Error fetching recipe details:", err);
  } finally {
    commit("setLoading", false);
  }
};

export const searchRecipes = async ({ commit }, name) => {
  commit("setLoading", true);

  try {
    const results = await searchRecipesByName(name);

    commit("setSearchResults", results);
  } catch (err) {
    console.error("Error searching recipes:", err);
  } finally {
    commit("setLoading", false);
  }
};

export const fetchCategories = async ({ commit }) => {
  commit("setLoading", true);

  try {
    const categories = await getCategories();

    commit("setCategories", categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
  } finally {
    commit("setLoading", false);
  }
};

export const fetchRecipesByCategory = async ({ commit }, category) => {
  commit("setLoading", true);

  try {
    const recipes = await getRecipesByCategory(category);

    commit("setCategoryRecipes", recipes);
  } catch (err) {
    console.error("Error fetching recipes by category:", err);
  } finally {
    commit("setLoading", false);
  }
};

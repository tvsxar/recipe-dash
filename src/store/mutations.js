export default {
  setRandomRecipes(state, recipes) {
    state.randomRecipes = recipes;
  },
  setCurrentRecipe(state, recipe) {
    state.currentRecipe = recipe;
  },
  setSearchResults(state, results) {
    state.searchResults = results;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setCategoryRecipes(state, recipes) {
    state.categoryRecipes = recipes;
  },
  setLoading(state, isLoading) {
    state.loading = isLoading;
  },
};

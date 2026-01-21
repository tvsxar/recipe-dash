const mapToCard = (meal) => ({
  id: meal.idMeal,
  title: meal.strMeal,
  image: meal.strMealThumb,
  category: meal.strCategory ?? "",
  area: meal.strArea ?? "",
});

export default {
  randomRecipeCards(state) {
    return state.randomRecipes.map(mapToCard);
  },

  searchRecipeCards(state) {
    return state.searchResults.map(mapToCard);
  },

  categoryRecipeCards(state) {
    return state.categoryRecipes.map(mapToCard);
  },

  currentRecipeDetails(state) {
    if (!state.currentRecipe) return null;

    const meal = state.currentRecipe;

    return {
      ...mapToCard(meal),
      instructions: meal.strInstructions,
      youtube: meal.strYoutube,
    };
  },
};

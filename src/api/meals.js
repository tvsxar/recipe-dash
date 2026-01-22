import api from "./axios";

const mockMeals = [
  {
    idMeal: "52772",
    strMeal: "Teriyaki Chicken Casserole",
    strCategory: "Chicken",
    strArea: "Japanese",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
  },
  {
    idMeal: "52804",
    strMeal: "Poutine",
    strCategory: "Miscellaneous",
    strArea: "Canadian",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
    strYoutube: "https://www.youtube.com/watch?v=UVAMAoA2_WU",
  },
  {
    idMeal: "52844",
    strMeal: "Lasagna",
    strCategory: "Pasta",
    strArea: "Italian",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    strYoutube: "https://www.youtube.com/watch?v=0SPwwpruGIA",
  },
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Soup",
    strArea: "Turkish",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    strYoutube: "https://www.youtube.com/watch?v=VVnZd8A84z4",
  },
  {
    idMeal: "53013",
    strMeal: "Big Mac",
    strCategory: "Beef",
    strArea: "American",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    strYoutube: "https://www.youtube.com/watch?v=8N3bVjw7S7E",
  },
  {
    idMeal: "52948",
    strMeal: "Chicken Handi",
    strCategory: "Chicken",
    strArea: "Indian",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    strYoutube: "https://www.youtube.com/watch?v=IO0issT0Rmc",
  },
  {
    idMeal: "52819",
    strMeal: "Honey Teriyaki Salmon",
    strCategory: "Seafood",
    strArea: "Japanese",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
    strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s",
  },
  {
    idMeal: "52939",
    strMeal: "Baked salmon with fennel & tomatoes",
    strCategory: "Seafood",
    strArea: "European",
    strInstructions: "Some cooking instructions...",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
  },
  {
    idMeal: "52834",
    strMeal: "Spaghetti Bolognese",
    strCategory: "Pasta",
    strArea: "Italian",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    strYoutube: "https://www.youtube.com/watch?v=U2u5wFJS6N4",
  },
  {
    idMeal: "52830",
    strMeal: "Chicken Alfredo Primavera",
    strCategory: "Chicken",
    strArea: "Italian",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    strYoutube: "https://www.youtube.com/watch?v=YoEidOnyP4k",
  },
  {
    idMeal: "52912",
    strMeal: "Pad Thai",
    strCategory: "Noodles",
    strArea: "Thai",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
    strYoutube: "https://www.youtube.com/watch?v=rx7k1HxH6I0",
  },
  {
    idMeal: "52861",
    strMeal: "Beef Wellington",
    strCategory: "Beef",
    strArea: "British",
    strInstructions: "Some cooking instructions...",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    strYoutube: "https://www.youtube.com/watch?v=3kCh1HnR0bM",
  },
];

export const getRandomRecipes = async (count = 12) => {
  try {
    const promises = Array.from({ length: count }, () => api.get("/random.php"));

    const responses = await Promise.all(promises);

    const meals = responses
      .map((res) => res.data?.meals?.[0])
      .filter(Boolean);

    return meals.length ? meals : mockMeals;
  } catch (err) {
    console.error("Error getting random meals:", err);
    return mockMeals;
  }
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

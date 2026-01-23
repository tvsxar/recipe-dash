<script>
export default {
    name: 'RecipeHeader',
    computed: {
        recipeDetails() {
            return this.$store.state.currentRecipe;
        }
    }
}
</script>

<template>
    <div class="w-full max-w-5xl mx-auto my-8">
        <img v-if="recipeDetails" :src="recipeDetails.strMealThumb" :alt="recipeDetails.strMeal"
            class="w-full h-70 sm:h-96 md:h-120 object-cover rounded-2xl shadow-lg" />

        <div v-if="recipeDetails" class="mt-4 text-center">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {{ recipeDetails.strMeal }}
            </h1>
            <p class="text-gray-300 text-sm sm:text-base mt-2">
                {{ recipeDetails.strCategory }} • {{ recipeDetails.strArea }}
            </p>
        </div>
    </div>
</template>

<style></style>

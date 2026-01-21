<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
    name: 'RecipesGrid',
    components: { RecipeCard },
    computed: {
        recipes() {
            return this.$store.getters.randomRecipeCards;
        }
    },
    mounted() {
        this.$store.dispatch('fetchRandomRecipes');
    }
}
</script>

<template>
    <div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Random Recipes</h2>

        <div class="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
        </div>
    </div>
</template>

<style scoped></style>
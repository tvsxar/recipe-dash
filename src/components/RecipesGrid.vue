<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
    name: 'RecipesGrid',
    components: { RecipeCard },
    computed: {
        recipes() {
            return this.$store.state.randomRecipes;
        }
    },
    mounted() {
        if (this.recipes.length === 0) {
            this.$store.dispatch('fetchRandomRecipes');
        }
    }
}
</script>

<template>
    <div>
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Random Recipes
        </h2>

        <div class="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
        </div>
    </div>
</template>

<style scoped></style>
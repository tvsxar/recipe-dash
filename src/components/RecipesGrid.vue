<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
    name: 'RecipesGrid',
    components: { RecipeCard },
    data() {
        return {
            recipes: [{}, {}]
        }
    }
}
</script>

<template>
    <div class="p-4 sm:p-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6">Random Recipes</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" :meal="recipe" />
        </div>
    </div>
</template>

<style scoped></style>
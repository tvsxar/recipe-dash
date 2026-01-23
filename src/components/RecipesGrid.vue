<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
    name: 'RecipesGrid',
    components: { RecipeCard },
    props: {
        recipes: {
            type: Array,
            default: () => []
        },
        selectedCategory: {
            type: String,
            default: null
        }
    }
}
</script>

<template>
    <div class="grid gap-6 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" :selectedCategory="selectedCategory" />
    </div>
</template>

<style scoped></style>
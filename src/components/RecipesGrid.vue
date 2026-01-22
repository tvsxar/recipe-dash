<script>
import RecipeCard from '../components/RecipeCard.vue'

export default {
    name: 'RecipesGrid',
    components: { RecipeCard },
    props: {
        recipes: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<template>
    <div>
        <div class="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
        </div>
    </div>
</template>

<style scoped></style>
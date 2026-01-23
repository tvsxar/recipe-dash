<script>
import RecipeHeader from '../components/RecipeHeader.vue';
import RecipeDetails from '../components/RecipeDetails.vue';
import RecipeButton from '../components/RecipeButton.vue';
export default {
    name: 'About',
    components: {
        RecipeHeader,
        RecipeDetails,
        RecipeButton
    },
    mounted() {
        const recipeId = this.$route.params.id;
        this.$store.dispatch('fetchRecipeDetails', recipeId);
    },
    computed: {
        recipeDetails() {
            return this.$store.state.currentRecipe;
        }
    }
}
</script>

<template>
    <div class="py-4 px-4 sm:px-12 lg:px-25">
        <RecipeHeader />
        <RecipeDetails />
        <RecipeButton />
    </div>
</template>

<style></style>
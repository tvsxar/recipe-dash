<script>
import RecipeHeader from '../components/RecipeHeader.vue';
import RecipeDetails from '../components/RecipeDetails.vue';
import RecipeButton from '../components/RecipeButton.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'About',
    components: {
        RecipeHeader,
        RecipeDetails,
        RecipeButton,
        Loading
    },
    mounted() {
        const recipeId = this.$route.params.id;
        this.$store.dispatch('fetchRecipeDetails', recipeId);
    },
    computed: {
        recipeDetails() {
            return this.$store.state.currentRecipe;
        },
        loading() {
            return this.$store.state.loading;
        }
    }
}
</script>

<template>
    <div class="py-4 px-4 sm:px-12 lg:px-25">
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
            <Loading />
        </div>

        <div v-else>
            <RecipeHeader />
            <RecipeDetails />
            <RecipeButton />
        </div>
    </div>
</template>

<style></style>
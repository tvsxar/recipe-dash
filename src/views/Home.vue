<script>
import RecipesGrid from '../components/RecipesGrid.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'Home',
    components: {
        RecipesGrid,
        Loading
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
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
    <div class="relative min-h-[80vh]">
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
            <Loading />
        </div>

        <div v-else class="py-4 px-4 sm:px-12 lg:px-25">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Recipes
            </h2>
            <RecipesGrid :recipes="recipes" />
        </div>
    </div>
</template>

<style></style>

<script>
export default {
    name: 'RecipeButton',
    computed: {
        recipeDetails() {
            return this.$store.state.currentRecipe;
        }
    }
}
</script>

<template>
    <div v-if="recipeDetails && recipeDetails.strYoutube" class="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-25 py-4">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">Video</h2>

        <a :href="recipeDetails.strYoutube" target="_blank"
            class="inline-block px-4 py-2 rounded bg-[#FFE08A] text-black font-semibold hover:drop-shadow-[0_0_6px_rgba(255,224,138,0.6)] transition">
            Watch on YouTube
        </a>
    </div>
</template>

<style></style>

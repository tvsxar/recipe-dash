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
        }
    }
}
</script>

<template>
    <div class="relative min-h-[80vh]">
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
            <Loading />
        </div>

        <div v-else class="mx-auto py-4 px-4 sm:px-12 lg:px-25">
            <RecipesGrid />
        </div>
    </div>
</template>

<style></style>

<script>
import SearchBar from '../components/SearchBar.vue';
import CategoriesGrid from '../components/CategoriesGrid.vue';
import EmptyState from '../components/EmptyState.vue';
export default {
    name: 'Home',
    components: {
        SearchBar,
        CategoriesGrid,
        EmptyState
    },
    data() {
        return {
            searchQuery: '',
            recipes: []
        }
    }
}
</script>

<template>
    <div class="w-full mx-auto py-4 px-4 sm:px-12 lg:px-25">
        <SearchBar />
        <CategoriesGrid />
        <EmptyState v-if="!searchQuery && recipes.length === 0" :recipes="recipes" />
    </div>
</template>

<style></style>

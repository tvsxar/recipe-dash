<script>
import SearchBar from '../components/SearchBar.vue';
import CategoriesGrid from '../components/CategoriesGrid.vue';
import EmptyState from '../components/EmptyState.vue';
import RecipesGrid from '../components/RecipesGrid.vue';
import Loading from '../components/Loading.vue';
export default {
    name: 'Home',
    components: {
        SearchBar,
        CategoriesGrid,
        EmptyState,
        RecipesGrid,
        Loading
    },
    data() {
        return {
            searchQuery: '',
            selectedCategory: null
        }
    },
    computed: {
        loading() {
            return this.$store.state.loading;
        },
        searchResults() {
            return this.$store.state.searchResults;
        },
        categories() {
            return this.$store.state.categories;
        },
        categoryRecipes() {
            return this.$store.state.categoryRecipes;
        }
    },
    mounted() {
        this.$store.dispatch('fetchCategories');

        this.$store.commit('setSearchResults', []);
        this.$store.commit('setCategoryRecipes', []);
    },
    methods: {
        onCategorySelect(category) {
            this.selectedCategory = category;
            this.$store.commit('setSearchResults', []);
            this.searchQuery = '';
            this.$store.dispatch('fetchRecipesByCategory', category);
        }
    },
    watch: {
        searchQuery(newVal) {
            if (newVal) {
                this.selectedCategory = null;
                this.$store.commit('setCategoryRecipes', [])
                this.$store.dispatch('searchRecipes', newVal);
            } else {
                this.$store.commit('setSearchResults', []);
            }
        }
    },
}
</script>

<template>
    <div class="w-full mx-auto py-4 px-4 sm:px-12 lg:px-25">
        <SearchBar v-model="searchQuery" />
        <CategoriesGrid :selectedCategory="selectedCategory" :categories="categories"
            @select-category="onCategorySelect" />

        <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
            <Loading />
        </div>

        <div v-else>
            <EmptyState v-if="searchResults.length === 0 && categoryRecipes.length === 0" />
            <RecipesGrid :selectedCategory="selectedCategory"
                :recipes="searchResults.length ? searchResults : categoryRecipes" v-else />
        </div>
    </div>
</template>

<style></style>

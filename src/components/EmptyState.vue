<script>
export default {
    name: 'EmptyState',
    props: {
        recipes: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div class="flex flex-col items-center text-center mt-16 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>

        <p class="text-sm sm:text-base">
            Start typing a recipe name or select a category to see results
        </p>
    </div>
</template>

<style></style>
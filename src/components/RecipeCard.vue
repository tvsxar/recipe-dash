<script>
export default {
    name: 'RecipeCard',
    props: {
        meal: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg hover:scale-101 transition transform cursor-pointer
           border border-gray-700 hover:border-[#FFE08A] hover:drop-shadow-[0_0_6px_rgba(255,224,138,0.6)]">
        <img src="https://via.placeholder.com/400x200" alt="Recipe" class="w-full h-40 object-cover" />

        <div class="p-4">
            <h3 class="text-white font-bold text-lg mb-2">Recipe Name</h3>
            <p class="text-gray-400 text-sm">Category • Country</p>
        </div>
    </div>
</template>

<style></style>
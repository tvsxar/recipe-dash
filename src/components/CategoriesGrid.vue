<script>
export default {
    name: 'CategoriesGrid',
    props: {
        categories: {
            type: Array,
            required: true
        },
        selectedCategory: {
            type: String,
            default: null
        }
    }
}
</script>

<template>
    <div class="flex flex-wrap gap-2 py-4 justify-center">
        <div v-for="(cat, index) in categories" :key="index" :class="['px-4 py-2 rounded cursor-pointer transition hover:bg-[#FFE08A] hover:text-black',
            selectedCategory === cat ? 'bg-[#FFE08A] text-black' : 'bg-[#1f1f1f] text-white']"
            @click="$emit('select-category', cat)">
            {{ cat }}
        </div>
    </div>
</template>

<style scoped></style>
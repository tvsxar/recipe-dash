<script>
export default {
  name: 'CategoriesGrid',
  data() {
    return {
      categories: [
        { name: 'Example', id: 1 },
        { name: 'Example1', id: 2 },
        { name: 'Example3', id: 3 },
        { name: 'Example4', id: 4 },
        { name: 'Example5', id: 5 },
        { name: 'Example6', id: 6 },
        { name: 'Example7', id: 7 },
        { name: 'Example8', id: 8 },
        { name: 'Example9', id: 9 },
        { name: 'Example10', id: 10 },
        { name: 'Example11', id: 11 },
        { name: 'Example12', id: 12 },
        { name: 'Example13', id: 13 },
      ]
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-2 py-4 justify-center">
    <div
      v-for="cat in categories"
      :key="cat.id"
      class="px-4 py-2 rounded bg-[#1f1f1f] text-white cursor-pointer hover:bg-[#FFE08A] hover:text-black transition"
    >
      {{ cat.name }}
    </div>
  </div>
</template>

<style scoped></style>
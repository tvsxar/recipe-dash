<script>
export default {
  name: 'RecipeDetails',
  computed: {
    recipeDetails() {
      return this.$store.state.currentRecipe;
    },
    ingredients() {
      const items = [];
      if (!this.recipeDetails) return items;

      for (let i = 1; i <= 20; i++) {
        const ingredient = this.recipeDetails[`strIngredient${i}`];
        const measure = this.recipeDetails[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
          items.push({ ingredient, measure });
        }
      }

      return items;
    }
  }
}
</script>

<template>
  <section v-if="recipeDetails" class="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-25 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

    <div class="bg-[#1f1f1f] rounded-2xl p-6 shadow-md">
      <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">Ingredients</h2>
      <ul class="list-disc list-inside text-gray-300 space-y-1">
        <li v-for="(item, idx) in ingredients" :key="idx">
          <span class="font-semibold text-white">{{ item.ingredient }}</span> - {{ item.measure }}
        </li>
      </ul>
    </div>

    <div class="bg-[#1f1f1f] rounded-2xl p-6 shadow-md">
      <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4">Instructions</h2>
      <p class="text-gray-300 whitespace-pre-line">{{ recipeDetails.strInstructions }}</p>
    </div>

  </section>
</template>

<style></style>
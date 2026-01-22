<script>
export default {
  name: 'SearchBar',
}
</script>

<template>
  <div class="w-full relative mt-6">
    <input
      type="text"
      placeholder="Search recipes..."
      class="w-full pl-4 pr-12 py-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-[#FFE08A] focus:border-[#FFE08A]
             transition focus:drop-shadow-[0_0_6px_rgba(255,224,138,0.6)]"
    />
    <button
      class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#FFE08A]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"/>
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
<script>
import {
    MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

export default {
    name: 'Navbar',
    components: {
        MagnifyingGlassIcon,
    }
}
</script>

<template>
    <nav class="flex select-none items-center justify-between
           border-b border-gray-100/30 py-4 px-4 sm:px-12 lg:px-25">
        <router-link to="/" class="font-bold text-lg sm:text-2xl flex items-center">
            Recipe
            <span class="text-[#FFE08A]
               drop-shadow-[0_0_6px_rgba(255,224,138,0.6)]">
                Dash
            </span>
        </router-link>

        <div class="flex items-center gap-3">
            <router-link to="/search" class="rounded-xl p-2 bg-[#FFE08A] text-black
               hover:drop-shadow-[0_0_6px_rgba(255,224,138,0.6)]
               transition active:scale-95 cursor-pointer">
                <MagnifyingGlassIcon class="w-5 h-5" />
            </router-link>
        </div>
    </nav>
</template>

<style></style>
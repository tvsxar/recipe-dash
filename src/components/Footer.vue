<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<template>
    <footer class="border-t border-gray-100/30 py-8 px-6 text-gray-400">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="flex flex-col items-center sm:items-start">
                <h3 class="font-bold text-lg text-gray-200 tracking-wide">
                    Recipe<span class="text-[#FFE08A] drop-shadow-[0_0_4px_rgba(255,224,138,0.6)]">Dash</span>
                </h3>

                <p class="text-gray-500 text-xs mt-1">
                    © {{ year }} All Rights Reserved
                </p>
            </div>

            <div class="flex gap-6 text-sm">
                <a href="https://github.com/tvsxar" target="_blank" rel="noopener noreferrer"
                    class="hover:text-[#FFE08A] transition hover:drop-shadow-[0_0_4px_rgba(255,224,138,0.6)]">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/poiatsyka/" target="_blank" rel="noopener noreferrer"
                    class="hover:text-[#FFE08A] transition hover:drop-shadow-[0_0_4px_rgba(255,224,138,0.6)]">
                    LinkedIn
                </a>
            </div>
        </div>
    </footer>
</template>

<style></style>

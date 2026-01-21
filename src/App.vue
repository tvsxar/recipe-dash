<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <router-view class="flex-1 flex flex-col py-6" />

    <Footer />
  </div>
</template>

<style></style>

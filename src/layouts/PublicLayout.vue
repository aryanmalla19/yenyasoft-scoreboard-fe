<template>
  <Navbar />
    <main class="min-h-[75vh]">
      <router-view />
    </main>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

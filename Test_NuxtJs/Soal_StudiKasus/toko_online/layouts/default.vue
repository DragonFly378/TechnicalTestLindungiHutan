<template>
  <div>
    <Navbar />
    <section class="container mx-auto p-4">
      <slot />
    </section>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style scoped></style>

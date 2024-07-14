<template>
  <div>
    <navbar />
    <section class="container mx-auto p-4">
      <slot />
    </section>
  </div>
</template>

<script setup>
import navbar from "../components/Navbar.vue";
</script>

<style scoped></style>

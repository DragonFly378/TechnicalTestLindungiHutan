<template>
  <div class="card text-center">
    <img :src="`${product.image}`" alt="product-thumb" class="thumb" />
    <div class="title m-4">
      <h1 class="font-bold text-gray-500 truncate">{{ product.title }}</h1>
      <h3 class="font-bold text-gray-500">${{ product.price }}</h3>
    </div>
    <NuxtLink :to="`/`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
  capung: String,
});
// console.log(capung);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>

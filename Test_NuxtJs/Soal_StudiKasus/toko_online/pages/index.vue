<template>
  <div>
    <div class="input mb-8">
      <h2 class="text-xl mb-2">Cari Barang</h2>
      <input
        v-model="searchQuery"
        type="text"
        name="name"
        placeholder="Cari barang"
        class="bg-white px-2 py-3 rounded-lg border-2 border-gray-500"
      />
    </div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(product, productIdx) in filteredProducts" :key="productIdx">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { ref, computed } from "vue";
import ProductCard from "~/components/ProductCard.vue";

const { data: products } = await useFetch("https://fakestoreapi.com/products");
const capung = "hadeh";

const searchQuery = ref("");

// Computed property untuk memfilter produk berdasarkan input pencarian
const filteredProducts = computed(() => {
  if (!products.value) return [];
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped></style>

<template>
  <div class="card text-center">
    <div class="pokemon-image h-32">
      <img
        :src="`${pokemon?.sprites?.front_default}`"
        alt="pokemon-thumb"
        class="thumb h-full m-auto"
      />
    </div>

    <div class="title py-3">
      <h1 class="font-bold text-primary capitalize">{{ pokemon.name }}</h1>
    </div>
    <div class="description flex flex-col px-4 py-2 border-b-2 border-gray-200">
      <div class="tinggi grid grid-cols-12">
        <h4 class="capitalize col-span-4 text-left">tinggi :</h4>
        <p class="col-span-8 text-right">{{ pokemon.height }}</p>
      </div>
    </div>
    <div class="description flex flex-col px-4 py-2 border-b-2 border-gray-200">
      <div class="berat grid grid-cols-12">
        <h4 class="capitalize col-span-4 text-left">berat :</h4>
        <p class="col-span-8 text-right">{{ pokemon.weight }}</p>
      </div>
    </div>
    <div class="description flex flex-col px-4 py-2 border-b-2 border-gray-200">
      <div class="tipe grid grid-cols-12">
        <h4 class="capitalize col-span-4 text-left">tipe :</h4>
        <div
          class="col-span-8 justify-end flex flex-row gap-x-2 capitalize truncate"
        >
          <p
            class=""
            v-for="(pokemonType, typeIdx) in pokemon.types"
            :key="typeIdx"
          >
            {{ pokemonType.type.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="description flex flex-col px-4 py-2 border-b-2 border-gray-200">
      <div class="tipe grid grid-cols-12">
        <h4 class="capitalize col-span-4 text-left">abilites :</h4>
        <div class="col-span-8 justify-end flex flex-row gap-x-2 capitalize">
          <p
            class="truncate"
            v-for="(pokemonAbilites, typeIdx) in pokemon.abilities"
            :key="typeIdx"
          >
            {{ pokemonAbilites.ability.name }}
          </p>
        </div>
      </div>
    </div>
    <NuxtLink :to="`/`">
      <p class="btn my-4 text-primary">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  pokemon: Object,
  //   capung: String,
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

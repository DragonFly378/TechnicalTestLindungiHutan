<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(pokemon, pokemonIdx) in AllPokemons" :key="pokemonIdx">
        <PokemonCard :pokemon="pokemon"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PokemonCard from "~/components/PokemonCard.vue";

const AllPokemons = ref([]);

const getPokemonData = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
};

const fetchAllPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  console.log(data);

  const promises = data.results.map((pokemon) => getPokemonData(pokemon.name));
  AllPokemons.value = await Promise.all(promises); // Update the reactive reference
  console.log(AllPokemons.value);
};

onMounted(() => {
  fetchAllPokemons();
});

</script>

<style scoped></style>

<template>
  <div>
    <div class="about-page">
      <div class="container w-10/12 mx-auto text-center my-4">
        <h2 class="text-2xl font-bold text-orange-400 mb-3">
          Tentang Website Ini
        </h2>
        <p class="w-8/12 text-lg text-white mx-auto">
          Website ini merupakan website yang dibuat untuk menampilkan data
          pokemon yang ada diseluruh dunia, data yang terkumpul diambil dari API
          publik.
        </p>
        <div class="author my-5">
          <h3 class="text-secondary text-xl font-bold mb-3">Tertanda,</h3>
          <NuxtLink
            class="px-3 py-2 text-white bg-orange-400 rounded-md hover:bg-secondary hover:text-primary transition delay-150 ease-in-out"
            to="https://dragonfly378.my.id"
            target="_blank"
            rel="noopener"
            >Muhammad Hafiz Hisbullah</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

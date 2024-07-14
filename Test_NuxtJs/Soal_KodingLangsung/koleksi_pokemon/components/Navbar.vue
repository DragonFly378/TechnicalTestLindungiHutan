<template>
  <header class="shadow-sm">
    <nav class="container mx-auto p-4 flex flex-col gap-y-3 items-center">
      <img src="../assets/img/logo.png" alt="logo" class="w-44 items-center" />
      <div class="flex gap-x-4 text-white">
        <NuxtLink to="/" class="text-center">Home</NuxtLink>
        <NuxtLink to="/about" class="text-center">About</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
  font-weight: bold;
}
</style>

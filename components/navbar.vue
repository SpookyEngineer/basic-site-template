<template>
  <div>
    <div class="flex flex-col bg-aconchego-green text-white p-4">
      <!-- Navigation links, logo, etc. -->
      <div class="flex justify-between">
        <NuxtImg height="72px" quality="80" src="/clinica.png" />
        <div class="flex flex-col align-middle justify-center">
          <p>Contacte-nos</p>
          <p>Chamada</p>
        </div>
      </div>

      <!-- Add more links as needed -->
    </div>
    <nav class="flex justify-center align-middle bg-black py-2">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>

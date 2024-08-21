<template>
  <div>
    <header class="sticky top-0 z-50">
      <div class="flex flex-col bg-aconchego-green text-white p-4">
        <div class="flex justify-between">
          <NuxtImg height="72px" quality="80" src="/clinica.png" />
          <div class="flex flex-col align-middle justify-center">
            <p>Contacte-nos</p>
            <p>Chamada</p>
          </div>
        </div>
      </div>

      <navbar />
    </header>

    <main>
      <!-- This is where the page content will be rendered -->
      <NuxtPage />
    </main>

    <footer>
      <!-- Footer content -->
      <p>&copy; 2024 Your Company Name</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  app: {
    head: {
      // Forcing correct tab favicon image path
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
};
</script>

<style scoped>
main {
  padding: 2rem;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

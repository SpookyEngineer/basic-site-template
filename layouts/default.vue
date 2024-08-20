<template>
  <div>
    <header>
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

<script>
export default {
  app: {
    head: {
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

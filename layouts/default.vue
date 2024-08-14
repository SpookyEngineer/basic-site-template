<template>
  <div>
    <header>
      <nav>
        <!-- Navigation links, logo, etc. -->
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <!-- Add more links as needed -->
      </nav>
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

<script setup>
// You can add script logic here if needed
</script>

<style scoped>
/* Add your styles here */
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
}

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

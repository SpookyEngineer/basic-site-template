<template>
  <div>
    <header class="sticky top-0 z-50">
      <div class="flex flex-col bg-aconchego-green text-white p-4">
        <div class="flex justify-between items-center">
          <NuxtImg height="72px" quality="80" src="/clinica.png" />
          <div class="md:flex hidden flex-col justify-center text-right">
            <p>Contacte-nos</p>
            <p>Chamada</p>
          </div>
          <!-- Hamburger Menu -->
          <button @click="toggleMenu" class="md:hidden focus:outline-none">
            <Icon name="cil:hamburger-menu" size="26px" />
          </button>
        </div>
      </div>

      <navbarMobile
        v-model:menuOpen="menuOpen"
        v-model:dropdownOpen="dropdownOpen"
      />
    </header>

    <!-- <Icon name="cil:hamburger-menu" /> -->

    <!-- <header class="sticky top-0 z-50">
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
    </header> -->

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

<script setup lang="ts">
import { ref } from "vue";

/* const aboutUsLink = {
  name: "About Us",
  items: [
    [
      { label: "About Us", subRoute: "about" },
      { label: "Our Mission", subRoute: "mission" },
      { label: "Our Values", subRoute: "values" },
      { label: "Contact Us", subRoute: "contact" },
    ],
  ],
}; */

const menuOpen = ref(false);
const dropdownOpen = ref(false);
const navbarData = [];

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
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

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
          <!-- Hamburger Menu, Only appears on mobile -->
          <button @click="toggleMenu" class="md:hidden focus:outline-none">
            <Icon name="cil:hamburger-menu" size="26px" />
          </button>
        </div>
      </div>

      <navbarMobile
        class="md:hidden"
        v-model:menuOpen="menuOpen"
        :navbarData="navbarData"
      />
      <navbar class="hidden md:block" :navbarData="navbarData" />
    </header>

    <main>
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

const menuOpen = ref(false);

const navbarData = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Us",
    route: "about",
    items: [
      [
        { label: "About Us", subRoute: "about" },
        { label: "Our Mission", subRoute: "mission" },
        { label: "Our Values", subRoute: "values" },
        { label: "Contact Us", subRoute: "contact" },
      ],
    ],
  },
  {
    name: "Contact Us",
    route: "contact-us",
  },
  {
    name: "Our Team",
    route: "team",
    items: [
      [
        { label: "Team 1", subRoute: "team1" },
        { label: "Team 2", subRoute: "team2" },
        { label: "Team 3", subRoute: "team3" },
        { label: "Team 4", subRoute: "team4" },
      ],
    ],
  },
];

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

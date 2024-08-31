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

      <!-- Full-Screen Slide-In Menu -->
      <TransitionExpand axis="x">
        <div v-if="menuOpen" class="fixed inset-0 bg-white text-black p-6 z-50">
          <div class="flex justify-between items-center mb-6">
            <span class="text-lg font-bold">Menu</span>

            <!-- Close Button -->
            <button @click="toggleMenu" class="focus:outline-none">
              <Icon name="material-symbols:close-rounded" size="26px" />
            </button>
          </div>
          <div class="flex flex-col">
            <nuxt-link class="block py-2" @click="toggleMenu" to="/"
              >Home</nuxt-link
            >
            <div>
              <div
                @click="toggleDropdown"
                class="flex justify-between items-center cursor-pointer"
              >
                {{ aboutUsLink.name }}
                <Icon name="i-heroicons-chevron-down-20-solid" />
              </div>
              <div v-if="dropdownOpen" class="ml-4 mt-2">
                <nuxt-link
                  v-for="item in aboutUsLink.items[0]"
                  :key="item.subRoute"
                  class="block py-1"
                  @click="toggleMenu"
                  :to="`/about#${item.subRoute}`"
                >
                  {{ item.label }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </TransitionExpand>
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
import { ref, onMounted } from "vue";
import { useRouter } from "nuxt/app";

const router = useRouter();

const aboutUsLink = {
  name: "About Us",
  items: [
    [
      { label: "About Us", subRoute: "about" },
      { label: "Our Mission", subRoute: "mission" },
      { label: "Our Values", subRoute: "values" },
      { label: "Contact Us", subRoute: "contact" },
    ],
  ],
};

const menuOpen = ref(false);
const dropdownOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
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

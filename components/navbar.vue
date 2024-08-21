<template>
  <div>
    <!-- Navbar header -->
    <div class="flex flex-col bg-aconchego-green text-white p-4">
      <!-- Navigation links, logo, etc. -->
      <div class="flex justify-between">
        <NuxtImg height="72px" quality="80" src="/clinica.png" />
        <div class="flex flex-col align-middle justify-center">
          <p>Contacte-nos</p>
          <p>Chamada</p>
        </div>
      </div>

      <!-- Navbar links -->
    </div>
    <nav class="flex justify-center align-middle bg-white py-2">
      <nuxt-link class="mx-2" to="/">Home</nuxt-link>

      <UDropdown
        :items="items"
        mode="hover"
        :popper="{ placement: 'bottom-start' }"
      >
        <!-- The below is the dropdown label -->
        <span v-on:click="clickFunction"
          >About Us <Icon name="i-heroicons-chevron-down-20-solid"
        /></span>

        <template #item="{ item }">
          <span>{{ item.label }}</span>
        </template>
      </UDropdown>
    </nav>
  </div>
</template>

<script setup lang="ts">
function clickFunction() {
  console.log("Button clicked");
}

const items = [
  [
    {
      label: "Profile",
      click: () => {
        console.log("Clicked");
      },
    },
    {
      label: "Edit",
      click: () => {
        console.log("Clicked");
      },
    },
    {
      label: "Duplicate",
      click: () => {
        console.log("Clicked");
      },
    },
    {
      label: "Archive",
      click: () => {
        console.log("Clicked");
      },
    },
  ],
];
</script>

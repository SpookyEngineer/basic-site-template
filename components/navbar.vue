<template>
  <div>
    <!-- Navbar header -->
    <div class="flex flex-col bg-aconchego-green text-white p-4">
      <div class="flex justify-between">
        <NuxtImg height="72px" quality="80" src="/clinica.png" />
        <div class="flex flex-col align-middle justify-center">
          <p>Contacte-nos</p>
          <p>Chamada</p>
        </div>
      </div>
    </div>

    <!-- Navbar links -->
    <nav class="flex justify-center align-middle bg-white py-2">
      <nuxt-link class="mx-2" to="/">Home</nuxt-link>

      <UDropdown
        :items="items"
        mode="hover"
        :popper="{ placement: 'bottom-start' }"
      >
        <!-- The below is the dropdown label -->
        <span v-on:click="routingFunction('/about')"
          >About Us <Icon name="i-heroicons-chevron-down-20-solid"
        /></span>

        <template #item="{ item }">
          <span v-on:click="routingFunction(`/about#${item.subRoute}`)">{{
            item.label
          }}</span>
        </template>
      </UDropdown>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "nuxt/app";

const router = useRouter();

function routingFunction(route) {
  router.push(route);
}

const items = [
  [
    {
      label: "About Us",
      subRoute: "about",
    },
    {
      label: "Our Mission",
      subRoute: "mission",
    },
    {
      label: "Our Values",
      subRoute: "values",
    },
    {
      label: "Contact Us",
      subRoute: "contact",
    },
  ],
];
</script>

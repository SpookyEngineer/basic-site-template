<template>
  <div class="border-y">
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

function routingFunction(route: string) {
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

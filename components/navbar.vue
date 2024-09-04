<template>
  <div class="border-y">
    <nav class="flex justify-center align-middle bg-white py-2">
      <div v-for="(link, index) in navbarData" :key="index">
        <nuxt-link v-if="!link.items" class="mx-2" to="/">{{
          link.name
        }}</nuxt-link>
        <NavbarLinkDropdown v-if="link.items" :navbarData="link" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface subRoute {
  label: string;
  subRoute: string;
}

interface itemsArray extends Array<subRoute[]> {}

interface navbarItem {
  name: string;
  items?: itemsArray;
}

type navbarData = navbarItem[];

interface Props {
  navbarData: navbarData;
}

const props = defineProps<Props>();
</script>

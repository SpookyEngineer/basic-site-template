<template>
  <div class="border-y">
    <nav class="flex justify-center align-middle bg-white pt-2">
      <div v-for="(link, index) in navbarData" :key="index">
        <nuxt-link v-if="!link.items" class="mx-1" :to="`${link.route}`">
          {{ link.name }}
        </nuxt-link>
        <NavbarLinkDropdown class="ml-1" v-else :navbarData="link" />
        {{ link }}
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface SubRoute {
  label: string;
  subRoute: string;
}

interface ItemsArray extends Array<SubRoute[]> {}

interface NavbarItem {
  name: string;
  route: string;
  items?: ItemsArray;
}

type NavbarData = NavbarItem[];

interface Props {
  navbarData: NavbarData;
}

const props = defineProps<Props>();
</script>

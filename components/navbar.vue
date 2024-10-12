<template>
  <div>
    <nav
      class="flex justify-center align-middle bg-aconchego-blue font-roboto font-bold"
    >
      <div v-for="(link, index) in navbarData" :key="index">
        <nuxt-link v-if="!link.items" class="mx-2" :to="`${link.route}`">
          {{ link.name }}
        </nuxt-link>
        <NavbarLinkDropdown class="mx-2" v-else :navbarData="link" />
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

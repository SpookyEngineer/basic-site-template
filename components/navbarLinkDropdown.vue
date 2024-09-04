<template>
  <div>
    <UDropdown
      :items="navbarData.items"
      mode="hover"
      :popper="{ placement: 'bottom-start' }"
    >
      <!-- The below is the dropdown label -->
      <span class="flex items-center" v-on:click="routingFunction('/about')"
        >{{ navbarData.name
        }}<Icon class="ml-1" name="i-heroicons-chevron-down-20-solid"
      /></span>

      <!-- The below is the dropdown itself -->
      <template #item="{ item }">
        <span v-on:click="routingFunction(`/about#${item.subRoute}`)">{{
          item.label
        }}</span>
      </template>
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "nuxt/app";

const router = useRouter();

function routingFunction(route: string) {
  router.push(route);
}

interface subRoute {
  label: string;
  subRoute: string;
}

interface itemsArray extends Array<subRoute[]> {}

interface navbarItem {
  name: string;
  items: itemsArray;
}

type navbarData = navbarItem[];

interface Props {
  navbarData: any;
}

const props = defineProps<Props>();
</script>

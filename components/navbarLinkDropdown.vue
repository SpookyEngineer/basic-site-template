<template>
  <div>
    <UDropdown
      :items="items"
      mode="hover"
      :popper="{ placement: 'bottom-start' }"
    >
      <!-- The below is the dropdown label -->
      <span v-on:click="routingFunction('/about')"
        >{{ name }}<Icon name="i-heroicons-chevron-down-20-solid"
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

// The below is required in order to fix a type error in regard to arrays within arrays
interface Item {
  label: string;
  subRoute: string;
}

type ItemsArray = Item[][];

interface Props {
  name: string;
  items: ItemsArray;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <UDropdown
      :items="navbarData.items"
      mode="hover"
      :popper="{ placement: 'bottom-start' }"
      @mouseenter="isDropdownOpen = true"
      @mouseleave="isDropdownOpen = false"
    >
      <!-- The below is the dropdown label -->
      <span
        class="flex items-center cursor-pointer"
        v-on:click="routingFunction(`/${navbarData.route}`)"
      >
        {{ navbarData.name }}
        <Icon
          class="ml-1 transition-transform duration-300 ease-in-out"
          :class="{ 'rotate-180': isDropdownOpen }"
          name="charm:chevron-down"
        />
      </span>

      <!-- The below is the dropdown itself -->
      <template #item="{ item }">
        <span
          v-on:click="routingFunction(`/${navbarData.route}#${item.subRoute}`)"
        >
          {{ item.label }}
        </span>
      </template>
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "nuxt/app";
import { ref } from "vue";

const router = useRouter();

function routingFunction(route: string) {
  router.push(route);
}

const isDropdownOpen = ref(false);

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

interface Props {
  navbarData: NavbarItem;
}

const props = defineProps<Props>();
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>

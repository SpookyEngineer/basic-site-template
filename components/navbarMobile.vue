<template>
  <div>
    <TransitionSlide :offset="['100%', 0]">
      <div v-if="menuOpen" class="fixed inset-0 bg-white text-black p-6 z-50">
        <div class="flex justify-between items-center mb-6">
          <span class="text-lg font-bold">Menu</span>

          <!-- Close Button -->
          <button @click="toggleMenu" class="focus:outline-none">
            <Icon name="material-symbols:close-rounded" size="26px" />
          </button>
        </div>

        <div
          v-for="(link, index) in navbarData"
          :key="index"
          class="flex flex-col"
        >
          <nuxt-link
            v-if="!link.items"
            class="block pt-2"
            @click="toggleMenu"
            :to="`${link.route}`"
          >
            {{ link.name }}
          </nuxt-link>

          <div v-else>
            <div
              @click="toggleDropdown(index)"
              class="flex justify-between items-center cursor-pointer pt-1"
            >
              {{ link.name }}
              <Icon
                name="charm:chevron-down"
                class="transition-transform duration-300 ease-in-out"
                :class="{ 'rotate-180': dropdownOpen[index] }"
              />
            </div>
            <div v-if="dropdownOpen[index]" class="ml-4 mt-2">
              <nuxt-link
                v-for="item in link.items[0]"
                :key="item.subRoute"
                class="block py-1"
                @click="toggleMenu"
                :to="`/${link.route}#${item.subRoute}`"
              >
                {{ item.label }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </TransitionSlide>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dropdownOpen = ref<boolean[]>([]);

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
  menuOpen: Boolean;
  navbarData: NavbarData;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:menuOpen"]);

function toggleMenu() {
  emit("update:menuOpen", !props.menuOpen);
}

function toggleDropdown(index: number) {
  dropdownOpen.value = props.navbarData.map((_, i) =>
    i === index ? !dropdownOpen.value[i] : false
  );
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>

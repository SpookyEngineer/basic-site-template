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
        <div class="flex flex-col">
          <nuxt-link class="block py-2" @click="toggleMenu" to="/"
            >Home</nuxt-link
          >
          <div>
            <div
              @click="toggleDropdown"
              class="flex justify-between items-center cursor-pointer"
            >
              {{ aboutUsLink.name }}
              <Icon name="i-heroicons-chevron-down-20-solid" />
            </div>
            <div v-if="dropdownOpen" class="ml-4 mt-2">
              <nuxt-link
                v-for="item in aboutUsLink.items[0]"
                :key="item.subRoute"
                class="block py-1"
                @click="toggleMenu"
                :to="`/about#${item.subRoute}`"
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
const aboutUsLink = {
  name: "About Us",
  items: [
    [
      { label: "About Us", subRoute: "about" },
      { label: "Our Mission", subRoute: "mission" },
      { label: "Our Values", subRoute: "values" },
      { label: "Contact Us", subRoute: "contact" },
    ],
  ],
};

interface Props {
  menuOpen: Boolean;
  dropdownOpen: Boolean;
  //navbarData: Array<Object>;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:menuOpen", "update:dropdownOpen"]);

function toggleMenu() {
  emit("update:menuOpen", !props.menuOpen);
}

function toggleDropdown() {
  emit("update:dropdownOpen", !props.dropdownOpen);
}
</script>

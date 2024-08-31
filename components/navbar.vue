<template>
  <div class="border-y">
    <nav class="flex justify-center align-middle bg-white py-2">
      <nuxt-link class="mx-2" to="/">Home</nuxt-link>
      <NavbarLinkDropdown :dropdownData="aboutUsLink" />
    </nav>
  </div>
</template>

<script setup lang="ts">
const aboutUsLink = {
  name: "About Us",
  items: [
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
  ],
};
</script>

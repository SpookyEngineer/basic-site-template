<template>
  <div>
    <!-- Importing fonts from Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@400;700&family=Ubuntu+Condensed&display=swap"
      rel="stylesheet"
    />
    <NuxtLayout>
      <v-app>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>

<style>
/* Global CSS */

.grayscale-transition {
  filter: grayscale(100%);
  transition: filter 500ms ease;
}

.grayscale-transition:hover {
  filter: grayscale(0%);
}
</style>

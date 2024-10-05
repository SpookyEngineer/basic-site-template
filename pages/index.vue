<template>
  <div>
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          src="/images/lar_idosos.webp"
          alt="Sample Image"
        />
      </template>
      <template #text>
        <div>
          <h1 class="text-5xl">LAR DE IDOSOS</h1>
          <button
            class="bg-aconchego-green py-2 px-6 rounded-lg mt-4 font-bold"
          >
            Ligue-nos
          </button>
        </div>
      </template>
    </ImgOverlay>

    <div
      class="flex flex-col items-center justify-center text-center py-16 px-32"
    >
      <div class="text-3xl">
        <h2 class="text-aconchego-red mb-2">VEJA AQUI AS NOSSAS INSTALAÇÕES</h2>
        <h2 class="">CLÍNICA DE REPOUSO O ACONCHEGO</h2>
      </div>
      <p class="font-roboto mt-2">
        O nosso Lar de Idosos, em Gondomar, tem como principais objetivos
        combater o isolamento social e prestar o <br />
        devido acompanhamento aos utentes das zonas do Porto, Gaia, Valongo,
        Maia e Matosinhos.
      </p>
    </div>

    <div
      class="bg-aconchego-green flex items-centers justify-center px-12 py-16"
    >
      <n-carousel
        :loop="true"
        draggable
        autoplay
        :show-dots="false"
        :slides-per-view="4"
        :space-between="25"
      >
        <n-carousel-item v-for="(item, index) in carouselData" :key="index">
          <div class="overflow-hidden relative group h-80">
            <img
              class="w-full h-full object-cover transform transition-transform duration-500 scale-125 group-hover:scale-100"
              :src="item.img"
              :title="item.imgTitle"
            />
          </div>
        </n-carousel-item>
      </n-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const carouselData = [
  {
    img: "/images/tempLounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/tempLounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/tempLounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/tempLounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/tempLounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/tempLounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/tempLounge.webp",
    imgTitle: "Image Title",
  },
];

useHead({
  title: "Clinica de Repouso",
});
</script>

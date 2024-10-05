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
      class="bg-aconchego-green flex items-centers justify-center px-16 py-16"
    >
      <Carousel :carouselData="carouselData" />
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

<template>
  <div>
    <!-- Lar de Idosos Image -->
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
          <h1 class="text-2xl md:text-4xl font-ubuntu">LAR DE IDOSOS</h1>
          <button
            class="bg-aconchego-green py-2 px-6 rounded-lg mt-4 font-bold font-roboto"
          >
            Ligue-nos
          </button>
        </div>
      </template>
    </ImgOverlay>

    <div
      class="flex flex-col items-center justify-center text-center py-8 md:my-8 px-16 md:px-32"
    >
      <div class="text-xl md:text-3xl font-ubuntu-condensed">
        <h2 class="text-aconchego-red mb-2">VEJA AQUI AS NOSSAS INSTALAÇÕES</h2>
        <h2>CLÍNICA DE REPOUSO O ACONCHEGO</h2>
      </div>
      <p class="font-roboto mt-2">
        O nosso Lar de Idosos, em Gondomar, tem como principais objetivos
        combater o isolamento social e prestar o <br class="hidden md:block" />
        devido acompanhamento aos utentes das zonas do Porto, Gaia, Valongo,
        Maia e Matosinhos.
      </p>
    </div>

    <!-- Carousels -->
    <div
      class="bg-aconchego-green flex items-centers justify-center p-8 md:p-16"
    >
      <Carousel :carouselData="carouselData" />
      <CarouselMobile :carouselData="carouselData" />
    </div>

    <!-- Sala de Convivio Image -->
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          src="/images/this_space.webp"
          alt="Sample Image"
        />
      </template>
      <template #text>
        <h2 class="text-2xl md:text-4xl font-ubuntu">SALA DE CONVIVIO</h2>
      </template>
    </ImgOverlay>

    <!-- This Space Section -->
    <GreyscaleTextImages :imagesData="thisSpaceData">
      <template #text>
        <p class="text-center">
          Neste espaço, os utentes têm a possibilidade de conviver uns com os
          outros e partilhar momentos, atividades e recordações.
          <br class="hidden md:block" />
          É o local ideal para passar uma boa parte do dia e fugir ao
          isolamento.
        </p>
      </template>
    </GreyscaleTextImages>
    <!-- Mobile Section -->
    <div class="mx-8 my-4 md:hidden">
      <CarouselMobile
        class="grayscale-transition"
        :carouselData="thisSpaceData"
      />
    </div>

    <!-- Our Rooms Section -->
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          src="/images/lar_idosos.webp"
          alt="Sample Image"
        />
      </template>
      <template #text>
        <h2 class="text-2xl md:text-4xl font-ubuntu">QUARTOS</h2>
      </template>
    </ImgOverlay>
    <GreyscaleTextImages :imagesData="ourRoomsData">
      <template #text>
        <p class="text-center">
          Os nossos quartos apresentam toda a comodidade que os nossos utente
          precisam. Todos os quartos têm casa de banho privativa, televisão por
          cabo e telefone.
          <br class="hidden md:block" />
          Decorados com um ambiente acolhedor, tornam a sua estadia muito
          agradável. Pode optar por quartos individuais ou duplos.
        </p>
      </template>
    </GreyscaleTextImages>
    <!-- Mobile Section -->
    <div class="mx-8 my-4 md:hidden">
      <CarouselMobile
        class="grayscale-transition"
        :carouselData="ourRoomsData"
      />
    </div>

    <!-- Accesses Section -->
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          src="/images/lar_idosos.webp"
          alt="Sample Image"
        />
      </template>
      <template #text>
        <h2 class="text-2xl md:text-4xl font-ubuntu">CORREDORES E ACESSOS</h2>
      </template>
    </ImgOverlay>
    <GreyscaleTextImages :imagesData="accessData">
      <template #text>
        <p class="text-center">
          Os nossos corredores e acessos são adaptados para pessoas com menor
          mobilidade para que todos os utentes se possam movimentar para
          qualquer parte das nossas instalações.
        </p>
      </template>
    </GreyscaleTextImages>
    <CarouselMobile class="grayscale-transition" :carouselData="accessData" />

    <!-- Kitchen Section -->
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          src="/images/lar_idosos.webp"
          alt="Sample Image"
        />
      </template>
      <template #text>
        <h2 class="text-2xl md:text-4xl font-ubuntu">COZINHA</h2>
      </template>
    </ImgOverlay>
    <GreyscaleTextImages :imagesData="kitchenData">
      <template #text>
        <p class="text-center">
          Na nossa cozinha preparamos refeições saudáveis e nutritivas.
          <br class="hidden md:block" />
          Os nossos cozinheiros têm em atenção as restrições das dietas para que
          não prejudiquem a saúde dos utentes.
        </p>
      </template>
    </GreyscaleTextImages>
    <CarouselMobile class="grayscale-transition" :carouselData="kitchenData" />

    <!-- Exteriors Section -->
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          src="/images/lar_idosos.webp"
          alt="Sample Image"
        />
      </template>
      <template #text>
        <h2 class="text-2xl md:text-4xl font-ubuntu">EXTERIORES</h2>
      </template>
    </ImgOverlay>
    <GreyscaleTextImages :imagesData="exteriorsData">
      <template #text>
        <p class="text-center">
          Veja os exteriores das nossas instalações e conheça os espaços ao ar
          livre de que pode usufruir.
        </p>
      </template>
    </GreyscaleTextImages>
    <CarouselMobile
      class="grayscale-transition"
      :carouselData="exteriorsData"
    />
  </div>
</template>

<script setup lang="ts">
const exteriorsData = [
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
];

const kitchenData = [
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
];

const accessData = [
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
];

const ourRoomsData = [
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
];

const thisSpaceData = [
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/this_space.webp",
    imgTitle: "Image Title",
  },
];

const carouselData = [
  {
    img: "/images/lounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/lounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/lounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/lounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/lounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/lounge.webp",
    imgTitle: "Image Title",
  },
  {
    img: "/images/lounge.webp",
    imgTitle: "Image Title",
  },
];

useHead({
  title: "Clinica de Repouso",
});
</script>

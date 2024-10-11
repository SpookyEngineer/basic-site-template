<template>
  <div>
    <!-- Lar de Idosos Image -->
    <SectionDisplay :section-data="nursingHomeSection" />

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

    <!-- Living Room Section -->
    <SectionDisplay :section-data="livingRoomSection" />

    <!-- Our Rooms Section -->
    <SectionDisplay :section-data="ourRoomsSection" />

    <!-- Accesses Section -->
    <SectionDisplay :section-data="accessSection" />

    <!-- Kitchen Section -->
    <SectionDisplay :section-data="kitchenSection" />

    <!-- Exteriors Section -->
    <SectionDisplay :section-data="exterioresSection" />

    <!-- Location Section -->
    <SectionDisplay :section-data="locationSection" />

    <!-- Contact Us Section -->
    <FormSection />
  </div>
</template>

<script setup lang="ts">
const nursingHomeSection = {
  img: "lar_idosos.webp",
  imgTitle: "Lar de Idosos",
  title: "LAR DE IDOSOS",
  buttonContent: "Ligue-nos",
};

const livingRoomSection = {
  img: "this_space.webp",
  imgTitle: "Sala de Estar",
  title: "SALA DE ESTAR",
  greyscaleSection: {
    text: "Neste espaço, os utentes têm a possibilidade de conviver uns com os outros e partilhar momentos, atividades e recordações. É o local ideal para passar uma boa parte do dia e fugir ao isolamento.",
    gridImages: [
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
    ],
  },
};

const ourRoomsSection = {
  img: "this_space.webp",
  imgTitle: "Quartos",
  title: "QUARTOS",
  greyscaleSection: {
    text: "Os nossos quartos apresentam toda a comodidade que os nossos utente precisam. Todos os quartos têm casa de banho privativa, televisão por cabo e telefone. Decorados com um ambiente acolhedor, tornam a sua estadia muito agradável. Pode optar por quartos individuais ou duplos.",
    gridImages: [
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
    ],
  },
};

const accessSection = {
  img: "this_space.webp",
  imgTitle: "Acessos",
  title: "CORREDORES E ACESSOS",
  greyscaleSection: {
    text: "Os nossos corredores e acessos são adaptados para pessoas com menor mobilidade para que todos os utentes se possam movimentar para qualquer parte das nossas instalações.",
    gridImages: [
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
    ],
  },
};

const kitchenSection = {
  img: "this_space.webp",
  imgTitle: "Cozinha",
  title: "COZINHA",
  greyscaleSection: {
    text: "Na nossa cozinha preparamos refeições saudáveis e nutritivas. Os nossos cozinheiros têm em atenção as restrições das dietas para que não prejudiquem a saúde dos utentes.",
    gridImages: [
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
    ],
  },
};

const exterioresSection = {
  img: "this_space.webp",
  imgTitle: "Acessos",
  title: "CORREDORES E ACESSOS",
  greyscaleSection: {
    text: "Veja os exteriores das nossas instalações e conheça os espaços ao ar livre de que pode usufruir.",
    gridImages: [
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
    ],
  },
};

const locationSection = {
  img: "this_space.webp",
  imgTitle: "Localização",
  title: "LOCALIZAÇÃO",
  buttonContent: "Marque uma visita",
};

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

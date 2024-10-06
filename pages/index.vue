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
      <CarouselMobile :carouselData="thisSpaceData" />
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
      <CarouselMobile :carouselData="ourRoomsData" />
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
    <div class="mx-8 my-4 md:hidden">
      <CarouselMobile :carouselData="accessData" />
    </div>

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
    <div class="mx-8 my-4 md:hidden">
      <CarouselMobile :carouselData="kitchenData" />
    </div>

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
    <div class="mx-8 my-4 md:hidden">
      <CarouselMobile :carouselData="exteriorsData" />
    </div>

    <!-- Location Section -->
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          src="/images/lar_idosos.webp"
          alt="Sample Image"
        />
      </template>
      <template #text>
        <h2 class="text-2xl md:text-4xl font-ubuntu mb-2">LOCALIZAÇÃO</h2>
        <p>
          Visite as nossas instalações na rua Lorem Ipsum. Marque já a sua
          visita!
        </p>
        <br />
        <p class="mb-6">Lorem Ipsum dolor sit amet</p>
        <n-button>Marque ums visita</n-button>
      </template>
    </ImgOverlay>

    <!-- Form Section -->
    <div class="flex flex-col justify-center items-center my-4 mx-3 md:px-96">
      <h2
        class="mb-3 text-aconchego-red text-xl font-ubuntu-condensed font-bold"
      >
        Fale connosco, estamos aqui para ajudar
      </h2>
      <p class="font-bold text-sm">
        Fale connosco e tire as dúvidas sobre os nossos serviços.
      </p>
      <n-form
        class="mt-6"
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="rules"
        :size="size"
      >
        <div class="flex flex-col justify-center items-center w-full">
          <n-input
            class="border-2 border-aconchego-green"
            v-model:value="formValue.name"
            placeholder="*Nome"
            clearable
          />
          <n-input
            class="border-2 border-aconchego-green my-3"
            color="#559a28"
            v-model:value="formValue.email"
            placeholder="*Email"
            clearable
          />
          <n-input
            class="border-2 border-aconchego-green"
            v-model:value="formValue.phone"
            placeholder="Telefone"
            clearable
            :allow-input="onlyAllowNumber"
          />
          <n-input
            class="border-2 border-aconchego-green my-3"
            type="textarea"
            v-model:value="formValue.message"
            placeholder="Mensagem"
            clearable
          />
          <n-button
            @click="handleValidateClick"
            ghost
            color="#559a28"
            class="font-ubuntu-condensed px-16 py-4 text-black"
          >
            Enviar
          </n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type FormInst } from "naive-ui";

const formRef = ref<FormInst | null>(null);

const size = ref<"small" | "medium" | "large">("large");

const formValue = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);

const rules = {
  name: {
    required: true,
    message: "Por favor, insira seu nome",
    trigger: "blur",
  },
  email: {
    required: true,
    message: "Por favor, insira sua idade",
    trigger: ["input", "blur"],
  },
  phone: {
    required: false,
    message: "Por favor, insira seu número",
    trigger: ["input"],
  },
  message: {
    required: false,
    message: "Por favor, insira sua mensagem",
    trigger: ["input"],
  },
};

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log("Valid");
    } else {
      console.log(errors);
    }
  });
};

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

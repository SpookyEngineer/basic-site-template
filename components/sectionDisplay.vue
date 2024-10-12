<template>
  <div>
    <ImgOverlay>
      <template #img>
        <img
          class="w-full block max-h-96 object-cover"
          :src="`/images/${sectionData.img}`"
          :alt="sectionData.imgTitle"
          :title="sectionData.imgTitle"
        />
      </template>
      <template #text>
        <h2 v-if="sectionData.title" class="text-2xl md:text-4xl font-ubuntu">
          {{ sectionData.title }}
        </h2>
        <p v-if="sectionData.subTitle">{{ sectionData.subTitle }}</p>
        <button
          v-if="sectionData.buttonContent"
          class="bg-aconchego-blue transition duration-300 hover:bg-aconchego-light-blue py-2 px-6 rounded-lg mt-4 font-bold font-roboto"
        >
          {{ sectionData.buttonContent }}
        </button>
      </template>
    </ImgOverlay>
    <GreyscaleTextImages
      v-if="sectionData.greyscaleSection"
      :imagesData="sectionData.greyscaleSection?.gridImages"
    >
      <template #text>
        <div class="px-2 font font-roboto">
          <p
            class="text-center hidden md:block"
            v-html="breakLine(sectionData.greyscaleSection?.text)"
          />
          <p class="text-center md:hidden">
            {{ sectionData.greyscaleSection?.text }}
          </p>
        </div>
      </template>
    </GreyscaleTextImages>
    <div class="mx-8 my-4 md:hidden">
      <CarouselMobile
        :carouselData="sectionData.greyscaleSection?.gridImages"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface GridImagesItem {
  img: string;
  imgTitle: string;
}

interface SectionDataItem {
  img: string;
  imgTitle: string;
  title: string;
  subTitle?: string;
  buttonContent?: string;
  greyscaleSection?: {
    text: string;
    gridImages: GridImagesItem[];
  };
}

type SectionData = SectionDataItem;

interface Props {
  sectionData: SectionData;
}

const props = defineProps<Props>();

// Makes each sentence be on a new line
function breakLine(text: string) {
  return text.replace(/([.?!])\s/g, "$1<br>");
}
</script>

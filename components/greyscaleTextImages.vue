<template>
  <div class="flex flex-col items-center justify-center mt-6">
    <slot name="text" />
    <div class="hidden md:grid md:grid-cols-3 gap-8 pb-12 pt-8 px-32 w-full">
      <div
        class="h-32 overflow-hidden"
        v-for="(item, index) in imagesData"
        :key="index"
      >
        <img
          class="grayscale-transition object-cover"
          :src="item.img"
          :alt="item.imgTitle"
          :title="item.imgTitle"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ImagesDataItem {
  img: string;
  imgTitle: string;
}

type ImagesData = ImagesDataItem;

interface Props {
  imagesData: ImagesData;
}

const props = defineProps<Props>();
</script>

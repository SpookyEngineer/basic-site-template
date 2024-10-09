<template>
  <n-carousel
    class="md:hidden"
    :loop="true"
    draggable
    autoplay
    :interval="4000"
    :show-dots="false"
    :space-between="25"
    :transition-style="{
      transitionDuration: '1500ms',
    }"
  >
    <n-carousel-item v-for="(item, index) in carouselData" :key="index">
      <div class="overflow-hidden relative group h-56">
        <img
          class="w-full h-full object-cover"
          :src="item.img"
          :title="item.imgTitle"
        />
      </div>
    </n-carousel-item>
  </n-carousel>
</template>

<script setup lang="ts">
interface CarouselItem {
  img: string;
  imgTitle: string;
}

type CarouselData = CarouselItem[];

interface Props {
  carouselData?: CarouselData;
}

const props = defineProps<Props>();
</script>

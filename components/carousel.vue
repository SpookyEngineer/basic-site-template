<template>
  <n-carousel
    class="hidden md:block"
    :loop="true"
    draggable
    autoplay
    :interval="4000"
    :show-dots="false"
    :slides-per-view="4"
    :space-between="25"
    :transition-style="{
      transitionDuration: '1500ms',
    }"
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
</template>

<script setup lang="ts">
interface CarouselItem {
  img: string;
  imgTitle: string;
}

type CarouselData = CarouselItem[];

interface Props {
  carouselData: CarouselData;
}

const props = defineProps<Props>();
</script>

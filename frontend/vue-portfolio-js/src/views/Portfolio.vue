
<script setup>
  import { ref } from 'vue';
  import HeroSection from '../components/HeroSection.vue';
  import Navbar from '@/components/Navbar.vue';
  import AboutSection from '@/components/about/AboutSection.vue';
  import WelcomeTransition from '@/components/transtitions/WelcomeTransition.vue';
  import ProjectsSection from '@/components/projects/ProjectsSection.vue';
  import PlaygroundSection from '@/components/playground/PlaygroundSection.vue';
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from '@/components/ui/carousel';

  const activeCarouselIndex = ref(0);
  const carouselApi = ref(null);

  function onCarouselInit(api) {
    carouselApi.value = api;

    if (api) {
      // Update active index when carousel slides change
      api.on('select', () => {
        activeCarouselIndex.value = api.selectedScrollSnap();
      });
    }
  }

  function scrollToIndex(index) {
    carouselApi.value?.scrollTo(index);
  }

</script>

<template>
  <WelcomeTransition/>
  <Navbar
    :active-index="activeCarouselIndex"
    @navigate="scrollToIndex"
  />

  <Carousel
    class="w-full h-screen"
    :opts="{
      align: 'start',
      loop: false,
      axis: 'x'
    }"
    @init-api="onCarouselInit"
  >
    <CarouselContent class="h-screen">
      <CarouselItem class="h-screen">
        <HeroSection/>
      </CarouselItem>

      <CarouselItem class="h-screen">
        <AboutSection/>
      </CarouselItem>

      <CarouselItem class="h-screen">
        <ProjectsSection/>
      </CarouselItem>

      <CarouselItem class="h-screen">
        <PlaygroundSection/>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious class="left-4 z-10" />
    <CarouselNext class="right-4 z-10" />
  </Carousel>
</template>

<style scoped>
</style>
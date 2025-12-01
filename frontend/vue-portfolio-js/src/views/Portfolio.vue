
<script setup>
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

</script>

<template>
  <WelcomeTransition/>
  <Navbar/>

  <Carousel
    class="w-full h-screen"
    :opts="{
      align: 'start',
      loop: false,
      axis: 'x'
    }"
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

    <CarouselPrevious class="left-4" />
    <CarouselNext class="right-4" />
  </Carousel>
</template>

<style scoped>
</style>
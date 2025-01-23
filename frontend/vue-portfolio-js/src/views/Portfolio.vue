
<script setup>
  import HeroSection from '../components/HeroSection.vue';
  import Navbar from '@/components/Navbar.vue';
  import AboutSection from '@/components/about/AboutSection.vue';
  import WelcomeTransition from '@/components/transtitions/WelcomeTransition.vue';

  // const currentTransition = "Welcome"

</script>

<template>

    <!-- <component :is="{currentTransition + 'Transition'}" class="transition"></component> -->
    <WelcomeTransition/>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <!-- <Typewriter/> -->
</template>

<style scoped>
</style>
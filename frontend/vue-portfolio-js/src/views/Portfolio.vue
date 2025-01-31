
<script setup>
  import HeroSection from '../components/HeroSection.vue';
  import Navbar from '@/components/Navbar.vue';
  import AboutSection from '@/components/about/AboutSection.vue';
  import WelcomeTransition from '@/components/transtitions/WelcomeTransition.vue';
  import ProjectsSection from '@/components/projects/ProjectsSection.vue';

  // const currentTransition = "Welcome"

</script>

<template>

    <!-- <component :is="{currentTransition + 'Transition'}" class="transition"></component> -->
    <WelcomeTransition/>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <!-- <Typewriter/> -->
</template>

<style scoped>
</style>
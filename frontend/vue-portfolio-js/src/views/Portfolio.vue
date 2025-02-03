
<script setup>
  import HeroSection from '../components/HeroSection.vue';
  import Navbar from '@/components/Navbar.vue';
  import AboutSection from '@/components/about/AboutSection.vue';
  import WelcomeTransition from '@/components/transtitions/WelcomeTransition.vue';
  import ProjectsSection from '@/components/projects/ProjectsSection.vue';
  import PlaygroundSection from '@/components/playground/PlaygroundSection.vue';

</script>

<template>

    <WelcomeTransition/>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <PlaygroundSection/>
</template>

<style scoped>
</style>
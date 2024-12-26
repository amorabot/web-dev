<script setup>
  import HeroSection from '../components/HeroSection.vue';
  import Navbar from '@/components/Navbar.vue';
  import AboutSection from '@/components/AboutSection.vue';
</script>

<template>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <div id="dummyspacediv">

    </div>
    <!-- <Typewriter/> -->
</template>

<style scoped>
  #dummyspacediv{
    height: 30vh;
  }
</style>
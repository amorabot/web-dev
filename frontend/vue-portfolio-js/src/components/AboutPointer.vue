<script setup>
    import IconPointer from '../components/IconPointer.vue';
</script>

<template>
    <div id="pointer-container">
        <IconPointer/>
        <IconPointer/>
    </div>
</template>

<style scoped>
    #pointer-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        
    }
</style>
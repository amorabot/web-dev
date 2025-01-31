<script setup>
const props = defineProps({
  name: String,
  svgSource: String
});

</script>


<template>
    <div id="tech-icon-container">
        <img style="width: 64px;" :src="svgSource">
        <span class="ubuntu-mono-regular">{{ name }}</span>
    </div>
</template>

<style scoped>
    #tech-icon-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 64px;
    }
    span{
        color: #968E7F;
        text-align: center;
    }
</style>
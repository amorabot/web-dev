<script setup>
    import IconPointer from '../components/IconPointer.vue';
</script>

<template>
    <div id="pointer-container">
        <IconPointer class="about-pointer"/>
        <IconPointer class="about-pointer"/>
    </div>
</template>

<style scoped>
    #pointer-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;

        border-top: 11px solid var(--darker);
        border-bottom: 11px solid var(--secondary);
    }
    #pointer-container .about-pointer{
        translate: 0px 5px;
    }
    .about-pointer{
        /* color: #FFF; */
        color: var(--darker-shade);
        /* color: #f9edc8; */
    }
</style>
<script setup>
import IconGithub from './icons/IconGithub.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';
import IconItch from './icons/IconItch.vue';

</script>

<template>
    <div id="socials-icons-container">
        <span class="socials-icon">
            <IconGithub/>
        </span>

        <span class="socials-icon">
            <IconLinkedIn/>
        </span>

        <span class="socials-icon">
            <IconItch/>
        </span>
        
    </div>
</template>

<style>
    
    #socials-icons-container{
        display: grid;
        grid-template-rows: repeat(3, 40px);
        grid-template-columns: 40px;
        max-width: fit-content;
        max-height: fit-content;

        row-gap: 5px;

        margin-top: 3rem;
        z-index: 10;
    }
    .socials-icon{
        border: 5px inset var(--darker);
    }
    .socials-icon:hover{
        border-right: 5px solid var(--darker-shade);
        border-bottom: 5px solid var(--darker-shade);
        transition: 0.8s;
    }
    

</style>
<script setup>
    import AboutImageDisplay from './AboutImageDisplay.vue';
    import AboutDescription from './AboutDescription.vue';
    import AboutPointer from '../components/AboutPointer.vue';
    import Typewriter from './Typewriter.vue';
</script>

<template>
    <div id="about-container">
        <AboutPointer/>
        <div id="about-heading">
        <span class="league-spartan-header">
            <span class="material-symbols-outlined">stylus_note</span> Sobre mim
        </span>
        </div>

        <div id="about-typewriter">
            <Typewriter class="ibm-plex-mono"/>
        </div>

        <div id="about-content">
            <AboutImageDisplay/>
            <AboutDescription/>
        </div>

    </div>
</template>

<style scoped>
    #about-typewriter{
        display: flex;
        justify-content: center;

        font-size: 1rem;
        /* color: #FFF; */
        /* color: var(--secondary-shade); */
        color: var(--secondary);
        align-self: center;
    }

    /* #about-container{
        background-color: var(--secondary);
    } */
    #about-heading{
        width: 100%;
        height: 3.5rem;
        text-align: center;
    }
    #about-heading span{
        /* color: #FFF; */
        /* color: var(--secondary-shade); */
        color: var(--secondary);
        font-size: 3rem;

    }
    #about-heading span:nth-child(1){
        translate: 0px 8px;
    }

    #about-content{
        display: flex;
        margin-top: 5rem;
        justify-content: center;

    }

</style>
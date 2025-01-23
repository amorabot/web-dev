<script setup>
    import { onMounted } from 'vue'
    import {animate, stagger, spring} from 'motion';

    const sequence = [
        [".welcome-header", { opacity: [0,1], y: [20, 0]}, { duration: 0.3, delay: stagger(0.3), opacity: {type: spring, stiffness: 300} }],
        [".loading-dots li", { opacity: 1, y: [40, 0] }, { duration: 0.7, delay: stagger(0.2)}],
        ["#welcome-container", {opacity: [1,0], width: 0}, {duration: 0.2, at:3}],
        ["#welcome-transition", { x: ['0vw','-100vw']},{duration: 0.5}]
    ]
    async function welcome(){
        await animate(sequence);
        const welcomeElement = document.getElementById("welcome-transition");
        welcomeElement.style.display = "none";
    }

    onMounted(() => {
        welcome()

        // await animate(sequence)
        // animate(".loading-dots li", { opacity: 1, y: [50, 0] }, { delay: stagger(0.1) })
    })
</script>

<template>
    <div id="welcome-transition" style="width: 100vw; height: 100vh;">
        <div id="welcome-container">
            <div id = "welcome-message">
            <h3 class="league-spartan-header welcome-header">daniel</h3>
            <h3 class="league-spartan-header welcome-header">amorim</h3>
            </div>
            <ul class="loading-dots">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    <!-- <Transition :css="false" @enter="onEnter">
    </Transition> -->
</template>

<style scoped>
    #welcome-transition{
        position: fixed;
        top:0;
        left:0;

        display: flex;

        justify-content: center;
        align-items: center;

        background-color: var(--darker);

        z-index: 1000;
    }
    
    #welcome-container{
        display: grid;
        grid-template-columns:max-content;
        grid-template-rows: max-content 70px;

        text-align: center;

    }
    /* #welcome-header{
        opacity: 0;
    } */

    #welcome-message{

        /* display: grid; */
        display: grid;
        column-gap: 30px;
        grid-template-columns: max-content max-content;
        max-width: 20%;

        max-width: fit-content;
        font-size: 4rem;
        color: var(--bg-secondary);
    }



    ul.loading-dots{
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 20px;
        flex: 0;
        margin: 0;
        padding: 0
    }

    ul.loading-dots li{
        width: 25px;
        height: 25px;
        border-radius: 6px;
        display: block;
        background-color: var(--bg-secondary);
        opacity: 0;
        flex: 0 0 25px;
    }

</style>
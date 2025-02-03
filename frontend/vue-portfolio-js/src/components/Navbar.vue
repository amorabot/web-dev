<script setup>
import NavButton from './navbar/NavButton.vue';



const buttonData = [
    {
        targetContainerSelector: "#hero",
        iconName: "home",
        displayName: "Home"
    },
    {
        targetContainerSelector: "#about-container",
        iconName: "stylus_note",
        displayName: "Sobre"
    },
    {
        targetContainerSelector: "#projects-container",
        iconName: "star",
        displayName: "Projetos"
    },
    {
        targetContainerSelector: "#playground",
        iconName: "music_note",
        displayName: "Playground"
    }
]
</script>

<template>
    <div id="main-navbar">
        <img src="@/assets/images/grapes-export.png" width="50" height="50">
        <nav id="navbar-list">
            <span class="navbar-item league-spartan-header">daniel amorim</span>
            <nav-button
            v-for="button in buttonData"
            :target-container-selector="button.targetContainerSelector"
            :icon-name="button.iconName"
            :display-name="button.displayName"
            ></nav-button>
            <div class="league-spartan-header">
                <a id="button-cv" target="_blank" href="/src/assets/CV_Daniel.pdf"> 
                    <span class="material-symbols-outlined nav-icon">download</span>Currículo
                </a>
            </div>
        </nav>
    </div>
    
</template>

<style scoped>
    #button-cv{
        background-color: #FFF;
        padding: 15px 25px 10px 15px;
        border-radius: 35px;
        text-decoration: none;

        margin-left: 1.5rem;
    }
    .navbar-item{
        font-size: 20px;
    }
    img{
        margin-top: 0px;
        margin-right: 12px;
    }
    .nav-icon{
        translate: 0 4px;
        margin-right: 4px;
    }
    #main-navbar{
        display: flex;
        align-items: center;
        justify-content: center;

        /* border-top: 11px solid var(--darker); */

        position:fixed;
        width: 100%;
        top: 3%;
        left: 0;

        z-index: 999;
    }

    #navbar-list{
        /* max-width: 1200px; */
        width: 950px;
        background-color: var(--darker);
        border-radius: 30px;
        border: 3px solid var(--darker-shade);
        display: grid;
        grid-template-columns: 250px auto auto auto auto auto;
        grid-template-rows: 60px;
        align-items: center;
        justify-items: center;

        
        padding: 5px 0px 8px 0px;
        padding-inline: 20px;

        color: #FFF;

    }
    .navbar-item:nth-child(1) {
        font-size: 2rem;
        justify-self: start;
        align-self: center;
        margin-left: 1rem;
        margin-top: 5px;
    }
    /* #navbar-list:nth-child(5) {
        margin-right: 20rem;
    } */

    a:link{
        color: #FFF;
    }
    a:visited{
        color: var(--darker-shade);
    }
</style>
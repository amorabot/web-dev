<script setup>
import TechComponent from './TechComponent.vue';

import javaSvg from "/assets/svgs/techIcons/java.svg"
import dockerSvg from "/assets/svgs/techIcons/docker.svg"
import flaskSvg from "/assets/svgs/techIcons/flask.svg"
import githubSvg from "/assets/svgs/techIcons/github.svg"
import linuxSvg from "/assets/svgs/techIcons/linux.svg"
import pythonSvg from "/assets/svgs/techIcons/python.svg"
import springSvg from "/assets/svgs/techIcons/spring.svg"
import vueSvg from "/assets/svgs/techIcons/vue.svg"

const myTechStacks = [
    {name: "Java", icon: javaSvg},
    {name: "Docker", icon: dockerSvg},
    {name: "Flask", icon: flaskSvg},
    {name: "Github", icon: githubSvg},
    {name: "Linux", icon: linuxSvg},
    {name: "Python", icon: pythonSvg},
    {name: "Spring", icon: springSvg},
    {name: "Vue.js", icon: vueSvg}
]
</script>

<template>
    <div id="about-container">
        <div id="about-content-grid">
            <div id="about-heading" style="position: relative; top: -15px">
                <h1 class="" style="font-family: ThunderSemibold; ">SOBRE</h1><br>
                <h1 class="" style="position: relative; top: -60px; font-family: ThunderLight;">MIM</h1>
            </div>
            <img id="about-img" src="/assets/images/profilepixel.png" >

            <div id="about-content">
                <div id="about-description" class="ubuntu-mono-regular">
                    <p>
                        Formado em Sistemas e Mídias Digitais pela Universidade Federal do Ceará,
                         me especializo em sistemas Back-end mas sou um profissional curioso e multifacetado.
                    </p>
                    <br>
                    <p>
                        Minha curiosidade me levou a áreas como Ilustração, Programação pra jogos e Computação gráfica e me permitiu desenvolver diversas habilidades!
                        Além disso, com <i>background</i> em Engenharia de Software e desenvolvimento de jogos, tenho uma grande familiaridade com todo o ciclo de vida 
                        de aplicações web e jogos.
                    </p>
                </div>

                <div id="tech-section">
                    <h2 class="ubuntu-mono-regular" style="color: #EAA932; font-size:36px;">Minhas principais tecnologias:</h2>
                    <br>
                    <div id="tech-tray">
                        <TechComponent
                        v-for="tech in myTechStacks"
                        :name="tech.name"
                        :svg-source="tech.icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #tech-section{
        margin-left: 3%;
    }

    #tech-tray{
        display: flex;
        gap: 45px;

        margin-top:3rem;
    }

    #about-container{
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #1E1E1E;

        border-top: 10px solid #FFC421;
        border-bottom: 10px solid #FFC421;
    }
    #about-content-grid{
        display: grid;
        grid-template-columns: max-content 50vw;
        grid-template-areas: 
        "heading items"
        "image items";
        column-gap: 1rem;

        margin-top: 25vh;
        margin-bottom: 25vh;
        max-width: 80%;
    }
    #about-img{
        grid-area: image;
        margin-top: -1.5rem;
        width: 100%;
    }
    #about-heading h1{
        text-align: start;

        color: #FFC421;        
        -webkit-text-stroke: 1px #FFC421;

        font-size: 110px;
        grid-area: heading;
    }
    #about-content{
        grid-area: items;

        display: grid;
        grid-template-rows: 35% max-content;
        row-gap: 5rem;
        align-items: center;

        border-top: 1px solid #FFC421;
        border-bottom: 2px solid #FFC421;
    }
    #about-content p{
        max-width: 100%;
        align-self: center;

        padding-inline: 2rem;
    }
    #about-description{
        overflow-wrap: break-word;
        text-wrap-mode: wrap;
        text-wrap: wrap;

        text-align: start;
        font-size: 20px;

        margin-top: 2rem;

        color: #968E7F;
    }

    .bg-test{
        background-color: darkgray;
    }

</style>
<script setup>
import ProjectCard from './ProjectCard.vue';
import inscriptedImg from '@/assets/images/inscriptedbanner.png'
import replantImg from '@/assets/images/replantinho.png'
import fontspopuliImg from '@/assets/images/tracy.png'
import whaleImg from '@/assets/images/whale.png'
import crusadeImg from '@/assets/images/crusade.png'

const projectsData = [
    {
        name: "Inscripted",
        description: "Uma modificação server-side para Minecraft que adiciona elementos de Action-RPGs"+
        ", como Path of Exile, no jogo e permite um combate e uma construção de pesonagem mais profundos e personalizáveis!",
        image: inscriptedImg,
        link: "https://github.com/amorabot/Inscripted"
    },
    {
        name: "Replant",
        description: "Um serviço web que busca gamificar a experiência de jardinagem doméstica, possibilitando ao usuário"+
        " registrar 'Tamagotchis' que representam suas plantas e integrar seu jardim com sistemas embarcados para detecção de umidade do solo.",
        image: replantImg,
        link: "https://github.com/amorabot/replant-app"
    },
    {
        name: "Fontspopuli",
        description: "Uma ferramenta web que busca ajudar designers de fontes tipográficas e acadêmicos da área no processo de revisão bibliográfica"+
        ", testes práticos com espaçamento e kerning e obtenção de estatísticas sobre fontes populares!",
        image: fontspopuliImg,
        link: "http://150.230.65.198:8080/"
    },
    {
        name: "Whale Eater",
        description: "Um jogo de puzzle premiado em uma competição com mais de 8000 participantes!",
        image: whaleImg,
        link: "https://moraguma.itch.io/whale-eater"
    },
    {
        name: "Crusade To Die",
        description: "Um jogo arcade sobre gerenciar a própria sorte em um pequeno mundo de dados.",
        image: crusadeImg,
        link: "https://moraguma.itch.io/crusade-to-die"
    }
]

</script>

<template>

    <div id="projects-header">
        <span class="">----&nbsp;&nbsp;&nbsp;------&nbsp;----------- ===</span>
        <span id="p-header" style="font-size: 48px;" class="league-spartan-header">Meus projetos</span>
        <span class="">=== -----------&nbsp;------&nbsp;&nbsp;&nbsp;----</span>
    </div>
    <div id="projects-grid">
        <ProjectCard
        v-for="project in projectsData"
        :project-name="project.name"
        :description="project.description"
        :img-src="project.image"
        :link="project.link"
        />
    </div>
    <div id="projects-footer"></div>

</template>

<style scoped>
    #projects-grid{
        margin-top: 3vh;

        display: grid;
        grid-template-columns: max-content max-content;
        column-gap: 3rem;
        row-gap: 2rem;
    }
    #projects-header{
        margin-top: 15vh;
        display: grid;
        grid-template-columns: auto max-content auto;
        align-items: end;
        text-align: center;

        width: 50%;
    }
    #p-header{
        padding-top: 15px;
        padding-inline: 10px;
        border-radius: 10px 10px 0px 0px;
    }
    #projects-header span{
        white-space: nowrap;
        overflow: hidden;

        background-color: var(--darker);
        color: var(--bg-secondary);
    }
    #projects-footer{
        height: 10px;
        margin-top: 3vh;
        width: 50%;
        background-color: var(--darker);
    }
</style>
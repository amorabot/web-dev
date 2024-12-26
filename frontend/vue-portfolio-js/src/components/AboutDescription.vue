<template>
    <div id="about-description">
        <div id="description-length-selector" class="inter-body">
            <span>Descrição: </span>
            <button>
                Breve
            </button>
            <button>
                Completa
            </button>
        </div>
        <h3 class="inter-body">
            Me chamo <b>Daniel</b> e sou apaixonado por tecnologia, jogos e arte!<br>
            <br>
            Atualmente conto com <b>2+</b> anos de experiência como <b>desenvolvedor backend</b> para a <b>web</b> e para <b>jogos</b>.<br>
            <br>
            Sou um profissional multidiciplinar, que ama aprender coisas novas e explorar tecnologias.<br>
            Essa curiosidade já me levou a explorar diversas áreas de desenvolvimento, como: Microsserviços, Computação gráfica,
            Game engines, Design patterns para jogos e para a web, dentre muitras outras.<br>
            <br>
            Sendo formando em Sistemas e Mídias Digitais pela Universidade Federal do Ceará, tenho um amplo conhecimento
            sobre técnicas e práticas de <b>engenharia de software</b> e <b>arquitetura de sistemas</b>, além de experiência prática
            com design, UX e desenvolvimento de jogos.<br>
            <br>
            Abaixo você pode ver algumas das minhas habilidades práticas, assim como principais ferramentas e linguagens que utilizo!<br>
        </h3>
    </div>
</template>

<style scoped>
    #about-description{
        width: 40%;
        padding-top: 2rem;
        padding-left: 10rem;

        font-size: 1rem;
        line-height: 26px;
        /* color: #c3c2c4; */
        color: #c3c2c4;
        line-break: strict;
    }
    #description-length-selector{
        padding-left: 15px;
        padding-block: 10px;
        background-color: var(--secondary-shade);
        /* background-color: var(--darker-shade); */

        border-radius: 10px 10px 0 0;
    }
    h3{
        margin-top: 0.5rem;
        padding-block: 1rem;
        padding-left: 2rem;
        padding-right: 1rem;

        background-color: var(--secondary-shade);
        /* background-color: var(--darker-shade); */

        /* border-radius: 10px; */
    }
</style>
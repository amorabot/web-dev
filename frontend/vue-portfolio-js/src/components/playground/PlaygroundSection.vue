<script setup>

</script>

<template>

    <div id="playground" class="league-spartan-header">
        <div id="playground-heading">
            <img src="/assets/gifs/spin.gif"><span>Meu playground na web!</span><img src="/assets/gifs/rodando.gif">
        </div>
        <p>
            Aqui você vai poder encontrar meu lado criativo e algumas das coisas legais que tenho pra mostrar na web!<br>
            <i>Futuramente pretendo embutir <b>playlists</b>, <b>builds jogáveis</b> de alguns jogos meus, <b>simulações</b> e muito mais! No momento ainda estou trabalhando em
            disponibilizar tudo isso por aqui. Cheque depois</i>
        </p>
        <div><span class="yellow keep-out">/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / </span></div>
        <h3 class="yellow">Under construction</h3>
        <div><span class="yellow keep-out">/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / </span></div>
        <div id="playground-bg">

        </div>
        <div id="shader-demo-container"></div>
    </div>

</template>

<style scoped>
    .keep-out{
        display: flex;
        width: 100%;
        overflow: hidden;
        justify-content: center;
        white-space: nowrap;

        text-align: center;
        font-size: 40px;
        font-weight: 800;
    }
    .yellow{
        color:rgb(252, 229, 28);
    }

    #playground{
        color: #fff;
        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;

        flex-direction: column;

        width: 100%;
        height: 100vh;

        z-index: 50;
        position: absolute;
    }
    #playground-bg{
        position: relative;
        background-color: transparent;

        width: 100%;

        z-index: 49;
    }

    #shader-demo-container{
        z-index: 51;
        width: 50vw;
        height: 30vh;

        margin-top: 5rem;

        box-shadow: 0px 7px 3px #6e6969;
    }
    #playground-heading{
        max-height: 64px;
        width: 80%;
        display: flex;
        justify-content: center;
        padding: 0.5rem 1rem;
    }
    #playground-heading span{
        width: fit-content;
        white-space: nowrap;
        font-size: 48px;
    }
    img{
        flex-shrink: 3;
        margin-inline: 3rem;
    }
    p{
        font-size: 20px;
        padding: 15px 40px;
        margin-bottom: 20px;

        color:#6e6969;
        width: 35%;
        text-align: center;
    }
</style>
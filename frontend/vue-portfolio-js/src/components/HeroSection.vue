<script setup>
    import ProfileIcon from './ProfileIcon.vue';
    import SocialsIcon from './SocialsIcon.vue';
</script>


<template>
    <div id="hero">
        <div id="hero-left">
        <div id="hero-text-container">
        <span class="league-spartan-header">
            Engenheiro<br/>Back-end
        </span>
        <p class="ibm-plex-mono">
            Sou desenvolvedor software há mais de 3 anos e me especializo em sistemas back-end.
            <br/>
            <br/>
            Também sou um grande entusiasta de jogos e cultura digital, sendo game developer e designer no tempo livre!
            <br/>
            <br/>
            Busco trazer para os projetos a minha paixão por fazer coisas que geram impacto! 
        </p>
        </div>
        </div>

        <div id="hero-right">
        <div id="perlin-sketch-container"></div>
        <div id="profile-icons">
            <ProfileIcon/>
            <SocialsIcon/>
        </div>
        </div>
    </div>
</template>

<style scoped>
/* consider using clamp() for fontsize */
    #hero{
        display: flex;
        width: 100%;
        height: 100%;

        /* background-color: ; */
        /* border-bottom: 11px solid var(--darker); */
    }
    #hero-left{
        display: flex;

        width: 50%;
        height: 100%;
    }
    #hero-text-container{
        color: var(--darker);
        padding-top: 12%;
        margin-left: 15%;
        display: flex;
        flex-direction: column;
        align-self: center;
    }
    #hero-left span{
        font-size: max(38px, 4vw);
        line-height: max(42px, 4.2vw);
        margin-top: 0;
        margin-bottom: 5%;
        margin-right: 30%;
        align-self: start;
    }
    #hero-left p{
        font-size: max(14px, 1.2vw);
        line-height: max(16px, 1.4vw);
        margin-right: 20%;
        margin-block: 0;
    }
    /* @media (800px < width < 1200px) {
        #hero-left span{
            font-size: 6vw;
            line-height: 5.8vw;
        }
        #hero-left p{
            font-size: 2vw;
            line-height: 2.1vw;
        }
    }
        @media (width <= 800px) {
        #hero-left span{
            font-size: 8vw;
            line-height: 7.6vw;
        }
        #hero-left h2{
            font-size: 3vw;
            line-height: 2.7vw;
        }
        #hero-left{
            height: 50%;
            width: 100%;
        }
        #hero-right{
            height: 50%;
            width: 100%;
        }
        #hero{
            flex-direction: row;
            flex-wrap: wrap;
        }
    } */

    #hero-right{
        display: flex;
        width: 50%;
        height: 100%;
    }
    #profile-icons{
        display: flex;
        /* display: grid;
        grid-template-columns: 300px auto; */
        margin-left: 25%;
        align-self: center;
    }
    #perlin-sketch-container{
        position: absolute;
        width: 50%;
        height: 100%;
    }
</style>

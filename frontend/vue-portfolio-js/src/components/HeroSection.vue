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
            Sou desenvolvedor back-end e engenheiro de software, pensando
            sempre em escalabilidade. No tempo livre? Sou game designer/dev!
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

        border-bottom: 11px solid var(--darker);
    }
    #hero-left{
        display: flex;

        width: 50%;
        height: 100%;
    }
    #hero-text-container{
        color: var(--darker);
        padding-top: 15%;
        margin-left: 3rem;
        display: flex;
        flex-direction: column;
        align-self: center;
    }
    #hero-left span{
        font-size: 4.5vw;
        line-height: 4.2vw;
        margin-top: 0;
        margin-bottom: 5%;
        margin-right: 30%;
        align-self: start;
    }
    #hero-left p{
        font-size: 1.2vw;
        line-height: 1.5vw;
        margin-right: 25%;
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
        height: 80%;
    }
</style>

<template>
    <div id="main-navbar">
        <img src="@/assets/images/grapes-export.png" width="50" height="50">
        <nav id="navbar-list">
            <span class="navbar-item league-spartan-header">daniel amorim</span>
            <span class="navbar-item league-spartan-header">
                <a href="#hero">
                    <span class="material-symbols-outlined nav-icon">home</span>Home
                </a>
            </span>
            <span class="navbar-item league-spartan-header">
                <a href="#about-container">
                    <span class="material-symbols-outlined nav-icon">stylus_note</span>Sobre
                </a>
            </span>
            <span class="navbar-item league-spartan-header">
                <a href="#projects">
                    <span class="material-symbols-outlined nav-icon">star</span>Projetos
                </a>
            </span>
            <span class="navbar-item league-spartan-header">
                <a href="#playground">
                    <span class="material-symbols-outlined nav-icon">music_note</span>Playground
                </a>
            </span>
            <div class="league-spartan-header">
                <!-- download="" target="_blank" href="../assets/CV_Daniel_Amorim_FULLSTACK_XMOBOTS.pdf" -->
                <a id="button-cv" target="_blank" href=""> 
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
    }
    a{
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
        width: 900px;
        background-color: var(--darker);
        /* border-radius: 0 0 20px 20px; */
        border-radius: 30px;
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
    .navbar-item:nth-child(5) {
        margin-right: 1.5rem;
    }

    a:link{
        color: #FFF;
    }
    a:visited{
        color: var(--darker-shade);
    }
</style>
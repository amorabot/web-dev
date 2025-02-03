<script setup>
import ProjectsGrid from './ProjectsGrid.vue';
import TerminalMock from './TerminalMock.vue';


</script>



<template>

    <div id="projects-container">
        <TerminalMock/>
        <div id="bg-noise" class="ubuntu-mono-regular">
            <span style=" top: -190px; left: 590px;">/%./</span>
            <span style=" top: -80px; left: 720px;">/%./</span>
            <span style="top: -600px; left: 500px; font-size: 24px; font-weight: 100;">////////%%|///////--///</span>
            <span style=" top: -480px; left: 670px;">/%-- =.__</span>
            <span style=" top: -500px; left: -700px;">
                &nbsp;&nbsp;_-===-_<br>
                &nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<br>
                |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>
                :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;<br>
                &nbsp;\&nbsp;&nbsp;\~/&nbsp;&nbsp;/<br>
                &nbsp;&nbsp;`,&nbsp;Y&nbsp;,'<br>
                &nbsp;&nbsp;&nbsp;|_|_|<br>
                &nbsp;&nbsp;&nbsp;|===|<br>
                &nbsp;&nbsp;&nbsp;&nbsp;\_/<br>
            </span>
            <span style=" top: -200px; left: -820px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br>
                &nbsp;&nbsp;&nbsp;&nbsp;/<br>
                &nbsp;&nbsp;&nbsp;/<br>
                &nbsp;&nbsp;/<br>
                &nbsp;/<br>
                /
            </span>
            <span style="top: -230px; left: -870px; font-size: 60px; color: #EAE9E7;"><</span>
            <span style="top: -160px; left: -730px; font-size: 40px; color: #EAE9E7;">></span>
        </div>
        <br>
        <ProjectsGrid/>
    </div>

</template>



<style scoped>
    #projects-container{
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
    }
    #bg-noise{
        position:relative; 
        /* overflow-block: hidden; */
    }
    #bg-noise span{
        color: #CECAC5;
        position:absolute;
        overflow: hidden;
        white-space: nowrap;
        
        max-width: 300px;
    }
</style>
<template>
    <div id="terminal-container" class="ubuntu-mono-regular">
        <div id="terminal-header">
            <p style="width: 100%;text-align: center; margin-top: 10px; font-size: 20px;" class="league-spartan-header">~/portfolio/projetos</p>
            <div id="terminal-buttons">
                <!-- <span>-</span>
                <span style="border: 1px solid #47b838;"></span> -->
                <ul class="butau">
                    <li style="position: relative; top: -3px;">_</li>
                    <li><div style="border: 1px solid #AEA79F; width: 8px; height: 8px; position: relative; top: +7px; left: 3px;"></div></li>
                    <li style="background: #e63030; border-radius: 20px; margin-top: 4px;"><span style=" position: relative; top: -2px; left:-1px">x</span></li>
                </ul>
            </div>
        </div>
        <div id="terminal-window">
            <!-- <p  style="color: #47b838;">daniel@portfolio-terminal:</p> -->
            <div id="typewrite-terminal-line">
                <span style="color: #47b838; margin-left: 5px;">daniel@portfolio-terminal: </span><span id="terminal-cmd">~$ sudo ./projects.sh</span>
            </div>
            <div id="projects-ascii" style="color: #AEA79F">
                <p>&nbsp;&nbsp;&nbsp;
                    ____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    _&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    __&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br>
                    &nbsp;&nbsp;&nbsp;/&nbsp;__&nbsp;\_________&nbsp;&nbsp;&nbsp;&nbsp;(_)__&nbsp;&nbsp;_____/&nbsp;/______
                    <br>
                    &nbsp;&nbsp;/&nbsp;/_/&nbsp;/&nbsp;___/&nbsp;__&nbsp;\&nbsp;&nbsp;/&nbsp;/&nbsp;_&nbsp;\/&nbsp;___/&nbsp;__/&nbsp;___/
                    <br>
                    &nbsp;/&nbsp;____/&nbsp;/&nbsp;&nbsp;/&nbsp;/_/&nbsp;/&nbsp;/&nbsp;/&nbsp;&nbsp;__/&nbsp;/__/&nbsp;/_(__&nbsp;&nbsp;) 
                    <br>
                    /_/&nbsp;&nbsp;&nbsp;/_/&nbsp;&nbsp;&nbsp;\____/_/&nbsp;/\___/\___/\__/____/  
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/___/
                </p>
            </div>
            <p>Unpacking projects...</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Back-end:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Inscripted: A custom-made Minecraft mod that adds Action-RPG elements</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Fontspopuli: A tool/service for typeface designers and researchers</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Replant: A webservice that aims to Tamagotchi-fy the home gardening experience</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Games:</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Whale Eater: A puzzle game about whales, gravity and weird perspectives</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Crusade to Die: A arcade game where you control a little dice world and</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; the consequences of each die roll</p>
            <br>
            <p><span id="progress-bar">New project's progress (43%)</span> [###########%..............]</p>
        </div>
    </div>
</template>

<style scoped>
    #typewriter-terminal-line{
        width: fit-content;
        display: flex;
    }
    #terminal-cmd{
        border-right: 1px solid;

        animation: blink 1s step-end infinite;
    }
    @keyframes blink {
        50%{
            border-color: transparent;
        }

    }

    #progress-bar{
        background-color: #47b838;
        color: #411934;
    }


    #terminal-container{
        width: 60%;

        margin-top: 5vh;
        margin-bottom: 5vh;
    }
    #terminal-header{
        display: flex;
        color:var(--bg-secondary);
        background-color: #333333;
        height: 40px;
        border-radius: 10px 10px 0px 0px;

        justify-content: end;
    }
    #terminal-window{
        background-color: #2C001E;
        height: 55vh;

        font-size: 20px;
        color: #DAD7D3;
    }
    #terminal-window p{
        margin-left: 5px;
    }
    #terminal-buttons{
        max-width: fit-content;
        padding-top: 5px;
        
        margin-right: 25px;
    }

    #projects-ascii{
        width: 100%;
        height: fit-content;
    }

    ul.butau{
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 12px;
        flex: 0;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    ul.butau li{
        text-align: center;
        
        width: 18px;
        height: 18px;
        display: block;
        flex: 0 0 18px;
    }
    ul.butau div{
        align-self: center;
    }
</style>
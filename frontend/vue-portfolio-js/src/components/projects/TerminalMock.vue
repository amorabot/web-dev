<template>
    <div id="terminal-container" class="ubuntu-mono-regular">
        <!-- Terminal Title Bar -->
        <div id="terminal-header">
            <div class="header-left">
                <!-- Window Control Buttons -->
                <div id="terminal-buttons">
                    <button class="window-btn close" aria-label="Close">
                        <span class="btn-icon">×</span>
                    </button>
                    <button class="window-btn minimize" aria-label="Minimize">
                        <span class="btn-icon">−</span>
                    </button>
                    <button class="window-btn maximize" aria-label="Maximize">
                        <span class="btn-icon">□</span>
                    </button>
                </div>
            </div>

            <!-- Terminal Menu Bar -->
            <Menubar class="terminal-menubar">
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>New Terminal <MenubarShortcut>Ctrl+Shift+N</MenubarShortcut></MenubarItem>
                        <MenubarItem>New Window <MenubarShortcut>Ctrl+Shift+T</MenubarShortcut></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Close Terminal <MenubarShortcut>Ctrl+Shift+W</MenubarShortcut></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Copy <MenubarShortcut>Ctrl+Shift+C</MenubarShortcut></MenubarItem>
                        <MenubarItem>Paste <MenubarShortcut>Ctrl+Shift+V</MenubarShortcut></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Find <MenubarShortcut>Ctrl+Shift+F</MenubarShortcut></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Full Screen <MenubarShortcut>F11</MenubarShortcut></MenubarItem>
                        <MenubarItem>Zoom In <MenubarShortcut>Ctrl++</MenubarShortcut></MenubarItem>
                        <MenubarItem>Zoom Out <MenubarShortcut>Ctrl+-</MenubarShortcut></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Help</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>About</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

            <!-- Terminal Title -->
            <div class="terminal-title">
                <span class="league-spartan-header">daniel@portfolio: ~/projects</span>
            </div>
        </div>

        <!-- Terminal Content -->
        <ScrollArea id="terminal-window">
            <div class="terminal-content">
                <!-- Command Prompt -->
                <div id="typewrite-terminal-line">
                    <span class="terminal-user">daniel@portfolio-terminal</span>
                    <span class="terminal-separator">:</span>
                    <span class="terminal-path">~</span>
                    <span class="terminal-prompt">$</span>
                    <span id="terminal-cmd">sudo ./projects.sh</span>
                </div>

                <!-- ASCII Art Banner -->
                <div id="projects-ascii">
                    <pre>
    ____              _            __
   / __ \_________  (_)__  _____/ /______
  / /_/ / ___/ __ \/ / _ \/ ___/ __/ ___/
 / ____/ /  / /_/ / /  __/ /__/ /_(__  )
/_/   /_/   \____/_/\___/\___/\__/____/
                    </pre>
                </div>

                <p class="terminal-output">Unpacking projects...</p>

                <!-- Project Tree Structure -->
                <div class="project-tree">
                    <div class="tree-item">
                        <span class="tree-label category">Back-end</span>
                    </div>
                    <div class="tree-item nested">
                        <span class="tree-branch">├──</span>
                        <span class="tree-label">Inscripted</span>
                        <span class="tree-description">A custom-made Minecraft mod that adds Action-RPG elements</span>
                    </div>
                    <div class="tree-item nested">
                        <span class="tree-branch">├──</span>
                        <span class="tree-label">Fontspopuli</span>
                        <span class="tree-description">A tool/service for typeface designers and researchers</span>
                    </div>
                    <div class="tree-item nested">
                        <span class="tree-branch">└──</span>
                        <span class="tree-label">Replant</span>
                        <span class="tree-description">A webservice that aims to Tamagotchi-fy the home gardening experience</span>
                    </div>

                    <div class="tree-item">
                        <span class="tree-label category">Games</span>
                    </div>
                    <div class="tree-item nested">
                        <span class="tree-branch">├──</span>
                        <span class="tree-label">Whale Eater</span>
                        <span class="tree-description">A puzzle game about whales, gravity and weird perspectives</span>
                    </div>
                    <div class="tree-item nested">
                        <span class="tree-branch">└──</span>
                        <span class="tree-label">Crusade to Die</span>
                        <span class="tree-description">An arcade game where you control a little dice world and the consequences of each die roll</span>
                    </div>
                </div>

                <Separator class="my-2" />

                <!-- Progress Bar -->
                <div class="progress-container">
                    <p class="progress-text">New project's progress (43%)</p>
                    <div class="progress-bar-wrapper">
                        <div class="progress-bar" style="width: 43%">
                            <span class="progress-fill">███████████</span>
                        </div>
                        <span class="progress-empty">█████████████████</span>
                    </div>
                </div>

                <!-- Cursor Blinking Effect -->
                <div class="terminal-cursor">_</div>
            </div>
        </ScrollArea>
    </div>
</template>

<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '@/components/ui/menubar'
</script>

<style scoped>
    /* Terminal Container */
    #terminal-container {
        width: 55%;
        max-width: 900px;
        margin-top: 10vh;
        margin-bottom: 5vh;
        z-index: 89;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
                    0 0 0 1px rgba(0, 0, 0, 0.3);
        background: #300a24;
    }

    /* Terminal Header */
    #terminal-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(180deg, #3d3d3d 0%, #2e2e2e 100%);
        padding: 0.3rem 0.5rem;
        border-bottom: 1px solid #1a1a1a;
        min-height: 35px;
    }

    .header-left {
        display: flex;
        align-items: center;
    }

    /* Window Control Buttons */
    #terminal-buttons {
        display: flex;
        gap: 0.4rem;
        padding-left: 0.3rem;
    }

    .window-btn {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        transition: all 0.2s;
        position: relative;
    }

    .window-btn .btn-icon {
        opacity: 0;
        position: absolute;
        color: #1a1a1a;
        font-size: 12px;
        line-height: 1;
    }

    .window-btn:hover .btn-icon {
        opacity: 1;
    }

    .window-btn.close {
        background: #fc615d;
    }

    .window-btn.close:hover {
        background: #fb4943;
    }

    .window-btn.minimize {
        background: #fdbc40;
    }

    .window-btn.minimize:hover {
        background: #fcb123;
    }

    .window-btn.maximize {
        background: #34c749;
    }

    .window-btn.maximize:hover {
        background: #28b33f;
    }

    /* Terminal Menubar */
    .terminal-menubar {
        background: transparent;
        border: none;
        padding: 0;
        height: auto;
        flex: 1;
    }

    /* Menubar triggers (File, Edit, View, Help) */
    .terminal-menubar :deep([role="menubar"] > button) {
        color: #ddd;
        font-size: 13px;
        padding: 0.2rem 0.6rem;
        height: auto;
        border-radius: 3px;
        background: transparent;
        border: none;
    }

    .terminal-menubar :deep([role="menubar"] > button:hover) {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }

    .terminal-menubar :deep([role="menubar"] > button[data-state="open"]) {
        background: rgba(255, 255, 255, 0.15);
        color: white;
    }

    /* Menubar dropdown content */
    .terminal-menubar :deep([role="menu"]) {
        background: #2e2e2e;
        border: 1px solid #1a1a1a;
        border-radius: 4px;
        padding: 0.25rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    /* Menubar items inside dropdown */
    .terminal-menubar :deep([role="menuitem"]) {
        color: #ddd;
        font-size: 13px;
        padding: 0.4rem 0.8rem;
        height: auto;
        border-radius: 2px;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .terminal-menubar :deep([role="menuitem"]:hover) {
        background: rgba(255, 255, 255, 0.15);
        color: white;
    }

    /* Menubar shortcuts */
    .terminal-menubar :deep([role="menuitem"] span) {
        color: #888;
        font-size: 12px;
    }

    /* Menubar separator */
    .terminal-menubar :deep([role="separator"]) {
        background: #444;
        margin: 0.25rem 0;
    }

    /* Terminal Title */
    .terminal-title {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        color: #ddd;
        font-size: 13px;
        font-weight: 500;
        text-align: center;
        padding-right: 100px; /* Balance with buttons on left */
    }

    /* Terminal Window */
    #terminal-window {
        background: #300a24;
        height: 40vh;
        color: #ddd;
        font-size: 16px;
        line-height: 1.5;
    }

    .terminal-content {
        padding: 0.75rem 1rem;
    }

    /* Command Prompt Line */
    #typewrite-terminal-line {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
    }

    .terminal-user {
        color: #8ae234;
        font-weight: 600;
    }

    .terminal-separator {
        color: #fff;
    }

    .terminal-path {
        color: #729fcf;
        font-weight: 600;
    }

    .terminal-prompt {
        color: #fff;
        margin-left: 0.2rem;
    }

    #terminal-cmd {
        color: #ddd;
        margin-left: 0.3rem;
        border-right: 2px solid #ddd;
        padding-right: 2px;
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        }
    }

    /* ASCII Art */
    #projects-ascii {
        color: #ad7fa8;
        margin: 0.5rem 0;
        font-size: 14px;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    #projects-ascii pre {
        margin: 0;
        font-family: 'Ubuntu Mono', monospace;
        display: inline-block;
        text-align: left;
    }

    /* Terminal Output */
    .terminal-output {
        margin: 0.5rem 0 0.25rem 0;
        color: #ddd;
    }

    /* Project Tree */
    .project-tree {
        margin: 0.5rem 0;
        font-family: 'Ubuntu Mono', monospace;
    }

    .tree-item {
        display: flex;
        align-items: flex-start;
        gap: 0.4rem;
        margin: 0.15rem 0;
        line-height: 1.4;
    }

    .tree-item.nested {
        padding-left: 1.5rem;
    }

    .tree-branch {
        color: #75507b;
        font-weight: bold;
        margin-right: 0.2rem;
    }

    .tree-icon {
        font-size: 14px;
    }

    .tree-label {
        color: #8ae234;
        font-weight: 600;
    }

    .tree-label.category {
        color: #729fcf;
        font-size: 16px;
        font-weight: 700;
    }

    .tree-description {
        color: #888;
        font-size: 14px;
        margin-left: 0.5rem;
    }

    /* Progress Bar */
    .progress-container {
        margin: 0.5rem 0;
    }

    .progress-text {
        margin-bottom: 0.25rem;
        color: #ddd;
    }

    .progress-bar-wrapper {
        display: flex;
        align-items: center;
        font-family: monospace;
        position: relative;
    }

    .progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }

    .progress-fill {
        color: #300a24;
        background: #8ae234;
        padding: 0 0.2rem;
        font-weight: bold;
    }

    .progress-empty {
        color: #555;
    }

    /* Terminal Cursor */
    .terminal-cursor {
        display: inline-block;
        color: #ddd;
        animation: blink 1s step-end infinite;
        margin-top: 0.5rem;
    }

    /* Scrollbar Styling */
    #terminal-window :deep(.scrollbar) {
        background: #1a1a1a;
    }

    #terminal-window :deep(.scrollbar .thumb) {
        background: #555;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        #terminal-container {
            width: 70%;
        }

        .terminal-title {
            display: none;
        }
    }

    @media (max-width: 768px) {
        #terminal-container {
            width: 90%;
            margin-top: 5vh;
        }

        #terminal-window {
            height: 50vh;
        }

        .terminal-menubar {
            display: none;
        }

        .tree-description {
            display: block;
            margin-left: 2rem;
            margin-top: 0.2rem;
        }
    }

    @media (max-width: 480px) {
        #terminal-container {
            width: 95%;
        }

        .terminal-content {
            padding: 0.5rem;
            font-size: 14px;
        }
    }
</style>

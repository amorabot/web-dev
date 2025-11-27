<script setup>
import { computed, ref } from 'vue';
import NavButton from './navbar/NavButton.vue';

const buttonData = [
    {
        targetContainerSelector: "#hero",
        iconName: "home",
        displayName: "Home"
    },
    {
        targetContainerSelector: "#about-container",
        iconName: "stylus_note",
        displayName: "Sobre"
    },
    {
        targetContainerSelector: "#projects-container",
        iconName: "star",
        displayName: "Projetos"
    },
    {
        targetContainerSelector: "#playground",
        iconName: "music_note",
        displayName: "Playground"
    }
];

const isMenuOpen = ref(false);
const menuIcon = computed(() => isMenuOpen.value ? "close" : "menu");

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    isMenuOpen.value = false;
}
</script>

<template>
    <header class="navbar-wrapper">
        <nav class="navbar">
            <a href="#hero" class="brand league-spartan-header" @click="closeMenu">
                <img src="/assets/images/grapes-export.png" width="48" height="48" alt="Logo">
                <span>daniel amorim</span>
            </a>
            <button
                class="menu-toggle"
                type="button"
                @click="toggleMenu"
                :aria-expanded="isMenuOpen"
                aria-label="Alternar navegação"
            >
                <span class="material-symbols-outlined">{{ menuIcon }}</span>
            </button>
            <ul class="nav-links" :class="{ 'is-open': isMenuOpen }">
                <li v-for="button in buttonData" :key="button.targetContainerSelector">
                    <nav-button
                        :target-container-selector="button.targetContainerSelector"
                        :icon-name="button.iconName"
                        :display-name="button.displayName"
                        @clicked="closeMenu"
                    />
                </li>
                <li>
                    <a class="cv-link league-spartan-header" target="_blank" href="/assets/CV_Daniel.pdf">
                        <span class="material-symbols-outlined">download</span>
                        Currículo
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.75rem 0;
    z-index: 1000;
    pointer-events: none;
}

.navbar {
    pointer-events: auto;
    width: min(1100px, calc(100% - 2rem));
    max-width: 1100px;
    box-sizing: border-box;
    margin: 0 auto;
    background: var(--darker);
    border: 2px solid var(--darker-shade);
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.35rem 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: 0.05em;
}

.brand img {
    display: block;
}

.menu-toggle {
    display: none;
    margin-left: auto;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: transparent;
    border-radius: 999px;
    color: #fff;
    padding: 0.35rem 0.6rem;
    cursor: pointer;
}

.menu-toggle .material-symbols-outlined {
    font-size: 1.8rem;
}

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
}

.nav-links li {
    display: flex;
}

.cv-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    background: #fff;
    color: var(--darker);
    text-decoration: none;
    font-size: 0.95rem;
    transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.cv-link:hover {
    transform: translateY(-1px);
    background: var(--darker-shade);
    color: #fff;
}

@media (max-width: 900px) {
    .navbar {
        border-radius: 30px;
    }
}

@media (max-width: 768px) {
    .navbar {
        flex-wrap: wrap;
        padding: 0.75rem 1.25rem;
        width: calc(100% - 2rem);
    }

    .menu-toggle {
        display: inline-flex;
    }

    .nav-links {
        width: 100%;
        flex-direction: column;
        align-items: stretch;
        margin: 0;
        padding-top: 0.75rem;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        display: none;
    }

    .nav-links.is-open {
        display: flex;
    }

    .nav-links li {
        width: 100%;
        justify-content: center;
    }

    .cv-link {
        justify-content: center;
    }
}
</style>

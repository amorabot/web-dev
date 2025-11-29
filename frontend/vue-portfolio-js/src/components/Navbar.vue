<script setup>
import NavButton from './navbar/NavButton.vue';
import { Button } from '@/components/ui/button';

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
</script>

<template>
    <header class="navbar-wrapper">
        <nav class="navbar">
            <!-- Brand/Logo -->
            <a href="#hero" class="brand league-spartan-header">
                <img src="/assets/images/grapes-export.png" width="48" height="48" alt="Logo">
                <span>daniel amorim</span>
            </a>

            <!-- Navigation Links (Always Visible, Compact on Mobile) -->
            <div class="nav-links">
                <nav-button
                    v-for="button in buttonData"
                    :key="button.targetContainerSelector"
                    :target-container-selector="button.targetContainerSelector"
                    :icon-name="button.iconName"
                    :display-name="button.displayName"
                />
                <Button
                    as="a"
                    variant="default"
                    target="_blank"
                    href="/assets/CV_Daniel.pdf"
                    class="cv-button league-spartan-header"
                >
                    <span class="material-symbols-outlined cv-icon">download</span>
                    <span class="cv-text">Currículo</span>
                </Button>
            </div>
        </nav>
    </header>
</template>

<style scoped>
@reference;

.navbar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    z-index: 1000;
    pointer-events: none;
}

.navbar {
    pointer-events: auto;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 9999px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    background: var(--darker);
    border: 2px solid var(--darker-shade);
    width: min(1100px, calc(100% - 2rem));
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.25rem;
    letter-spacing: 0.025em;
}

.brand img {
    display: block;
}

.brand span {
    display: none;
}

.nav-links {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 0.35rem;
}

.cv-button {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.5rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    transition: all 0.2s;
    background: #fff !important;
    color: var(--darker) !important;
    font-weight: 600;
}

.cv-button:hover {
    transform: translateY(-2px);
    background: #f0f0f0 !important;
}

.cv-icon {
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.cv-text {
    font-size: 0.875rem;
    letter-spacing: 0.025em;
}

/* Responsive adjustments */
@media (min-width: 640px) {
    .brand span {
        display: inline;
    }
}

@media (min-width: 768px) {
    .navbar {
        gap: 0.5rem;
    }

    .nav-links {
        gap: 0.5rem;
    }

    .cv-button {
        padding: 0.5rem 1rem;
    }
}

@media (max-width: 900px) {
    .navbar {
        border-radius: 30px;
    }
}

@media (max-width: 640px) {
    .navbar {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        gap: 0.25rem;
    }

    .brand img {
        width: 40px;
        height: 40px;
    }

    .nav-links {
        gap: 0.25rem;
    }

    .cv-button {
        padding: 0.45rem 0.6rem;
        gap: 0.25rem;
    }

    .cv-icon {
        font-size: 1rem;
    }

    .cv-text {
        font-size: 0.8rem;
    }
}
</style>

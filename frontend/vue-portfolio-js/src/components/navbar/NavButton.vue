<script setup>
import { Button } from '@/components/ui/button';

function smoothScrollTo(containerSelector){
    document.querySelector(containerSelector)?.scrollIntoView({
        behavior: 'smooth'
    });
}

const props = defineProps({
    targetContainerSelector: String,
    iconName: String,
    displayName: String,
    isActive: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['clicked']);

function handleClick() {
    emit('clicked');
}
</script>

<template>
    <Button
        variant="ghost"
        :class="['nav-button league-spartan-header', { 'nav-button-active': isActive }]"
        @click="handleClick"
    >
        <span class="material-symbols-outlined nav-icon">{{ iconName }}</span>
        <span class="icon-name">{{ displayName }}</span>
    </Button>
</template>

<style scoped>
@reference;

.nav-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    padding: 0.5rem 0.85rem;
    border-radius: 9999px;
    border: 1px solid transparent;
    transition: all 0.2s;
    color: #fff !important;
    background: transparent !important;
    font-size: 0.95rem;
}

.nav-button:hover,
.nav-button:focus-visible {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.4) !important;
}

.nav-button-active {
    background: rgba(255, 255, 255, 0.2) !important;
    border-color: rgba(255, 255, 255, 0.6) !important;
    transform: scale(0.95);
}

.nav-icon {
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.icon-name {
    letter-spacing: 0.025em;
    display: inline-flex;
    align-items: center;
}

/* Desktop - show full text */
@media (min-width: 1025px) {
    .nav-button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }

    .nav-icon {
        font-size: 1.25rem;
    }
}

/* Tablet - icon only with subtle background */
@media (max-width: 1024px) and (min-width: 769px) {
    .icon-name {
        display: none;
    }

    .nav-button {
        padding: 0.55rem 1rem;
        background: rgba(0, 0, 0, 0.15) !important;
        border-color: rgba(255, 255, 255, 0.2) !important;
    }

    .nav-button:hover {
        background: rgba(255, 255, 255, 0.15) !important;
        border-color: rgba(255, 255, 255, 0.4) !important;
    }

    .nav-button-active {
        background: rgba(255, 255, 255, 0.25) !important;
        border-color: rgba(255, 255, 255, 0.7) !important;
    }
}

/* Mobile - icon only, more compact but wider */
@media (max-width: 768px) {
    .icon-name {
        display: none;
    }

    .nav-button {
        padding: 0.5rem 1.05rem;
        background: rgba(0, 0, 0, 0.15) !important;
        border-color: rgba(255, 255, 255, 0.2) !important;
    }

    .nav-icon {
        font-size: 1.1rem;
    }

    .nav-button:hover {
        background: rgba(255, 255, 255, 0.15) !important;
    }

    .nav-button-active {
        background: rgba(255, 255, 255, 0.25) !important;
        border-color: rgba(255, 255, 255, 0.7) !important;
    }
}
</style>

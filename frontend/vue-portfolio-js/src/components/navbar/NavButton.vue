<script setup>
function smoothScrollTo(containerSelector){
    document.querySelector(containerSelector)?.scrollIntoView({
        behavior: 'smooth'
    });
}

const props = defineProps({
    targetContainerSelector: String,
    iconName: String,
    displayName: String
});

const emit = defineEmits(['clicked']);

function handleClick() {
    smoothScrollTo(props.targetContainerSelector);
    emit('clicked');
}
</script>

<template>
    <button class="nav-button league-spartan-header" type="button" @click="handleClick">
        <span class="material-symbols-outlined nav-icon">{{ iconName }}</span>
        <span class="icon-name">{{ displayName }}</span>
    </button>
</template>

<style scoped>
.nav-button {
    color: #fff;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 1.05rem;
    background: transparent;
    cursor: pointer;
    padding: 0.45rem 0.9rem;
    border-radius: 999px;
    border: 1px solid transparent;
    transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.nav-button:hover,
.nav-button:focus-visible {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
}

.nav-icon {
    font-size: 1.35rem;
}

.icon-name {
    letter-spacing: 0.05em;
}

@media (max-width: 1000px) {
    .icon-name {
        display: none;
    }

    .nav-button {
        background: rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 255, 255, 0.25);
    }
}

@media (max-width: 768px) {
    .icon-name {
        display: inline;
    }

    .nav-button {
        width: 100%;
        justify-content: center;
        background: transparent;
        border-color: transparent;
    }
}
</style>

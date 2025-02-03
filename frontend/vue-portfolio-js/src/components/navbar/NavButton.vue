<script setup>

function smoothScrollTo(containerSelector){
    const element = document.querySelector(containerSelector).scrollIntoView({
        behavior: 'smooth'
    });
    console.log(containerSelector)
}

const props = defineProps({
    targetContainerSelector: String,
    iconName: String,
    displayName: String
});
</script>

<template>
    <span @click="smoothScrollTo(props.targetContainerSelector)" class="">
        <button class="league-spartan-header"><span class="material-symbols-outlined nav-icon">{{iconName}}</span><span class="icon-name">{{displayName}}</span></button>
    </span>
</template>

<style scoped>
    button{
        color: #FFF;
        display: flex;
        text-align: end;
        font-size: 20px;
        background: transparent;

        cursor:pointer;
        padding: 5px 10px 5px 7px;
        margin-inline: 5px;
        border-radius: 10px;
        border-bottom: 3px solid #fff;

        margin-top: 5px;
    }
    .nav-icon{
        margin-right: 4px;
    }
    .icon-name{
        translate: 0 3px;
    }

    @media (max-width: 1000px) {
        .icon-name{
            display: none;
        }
        .nav-icon{
            margin: 0px;
            justify-self: center;
        }
        button{
            margin-inline: 0px;
        }
    }

</style>
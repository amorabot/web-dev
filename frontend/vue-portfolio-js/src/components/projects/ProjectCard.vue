<script setup>
const props = defineProps({
  projectName: String,
  description: String,
  imgSrc: String,
  link: String
});
</script>

<template>

    <div class="projects-card ubuntu-mono-regular">
        <img :src="imgSrc">
        <div class="card-text">
            <div id="name">
                <span>{{ projectName }}</span>
                <a :href="link"><img src="/assets/images/share.png"></a>
            </div>
            
            <p>{{ description }}</p>
        </div>
    </div>
    
</template>

<style scoped>
    #name{
        margin-top: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-justify: center;
    }
    #name a{
        margin-left: 15px;
    }
    #name img{
        filter: invert(100%);
        width: 24px; height: 24px;

    }
    .projects-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        width: 300px;
        max-height: 600px;

        padding: 30px 10px 20px 10px;

        border-radius: 15px;
        background-color: var(--darker);
        color: var(--bg-secondary);
        box-shadow: 6px 6px 4px #7b8379;
    }
    .projects-card img{
        border-radius: 20px;
        max-width: 300px;
        height: 150px;

        object-fit: cover;
    }

    .card-text span{
        width: max-content;
        font-size: 30px;
        font-weight: 600;
        height: 32px;
    }
    .card-text p{
        font-size: 16px;
        width: fit-content;
        max-width: 100%;
        word-wrap: break-word;

        margin-top: 5px;
        margin-inline: 10px;
    }
</style>
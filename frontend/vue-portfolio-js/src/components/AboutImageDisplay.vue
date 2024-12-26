<script setup>
    // import Typewriter from './Typewriter.vue';
</script>
<template>
    <div id="about-img-content">
        <!-- <Typewriter id="about-typewriter" class="ibm-plex-mono"/> -->
        <ul>
            <li>
                <img src="@/assets/images/profilehome.png">
            </li>
            <li>
                <img src="@/assets/images/profiletech.png">
            </li>
            <li>
                <img src="@/assets/images/profilepixel.png">
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #about-img-content{
        margin-top: 6rem;
    }
    ul{
        list-style-type: none;
    }
    img{
        width: 150px;
        max-width: 250px;
        box-shadow: 10px 10px var(--secondary-shade);
        border-radius: 7px;
        border: 4px solid #FFF;

        transition: 1s;
    }
    li{
        margin-block: 15px;
    }
    li:hover img{
        width: 200px;
        /* height: 250px; */
        border-radius: 20px;
        border: 10px solid #FFF;
        box-shadow: 14px 14px var(--secondary-shade);

        transition: 0.5s;
    }
</style>
<template>

  <div id="profile-pic-container">

    <span class="ascii topleft ubuntu-mono-regular">##%//-!/</span>
    <img alt="A ASCII Logo for 'amorabot'" class="logo" src="/assets/svgs/logoASCII.svg" />
    <span class="ascii topright ubuntu-mono-regular">/=/{!}##</span>

    <span class="ascii left ubuntu-mono-regular">######=#====!!!!|<br/>.<br/><br/>.</span>

    <div class="figure">
      <img src="/assets/images/profilehome.png" id="profile-pic"/>
      <img src="/assets/images/handsomeASCII.png" id="ascii-profile-pic"/>
    </div>

    <span class="ascii right ubuntu-mono-regular">######=#====!!!!|<br/>.<br/><br/>.</span>

    <span class="ascii bottom ubuntu-mono-regular">//////////////// Daniel "amorabot" Amorim ////////////////</span>
    
  </div>
</template>

<style scoped>
/* @import '../assets/base.css'; */
  /* .ascii{
    margin: 0;
    font-size: 10px;
    background-color:var(--darker);
    color: #fff;
  } */

  #profile-pic-container{
    margin: 1rem;
    /* max-width: 300px; */
    max-width: 100%;

    display: grid;
    grid-template-columns: 15px 30px 210px 30px 15px;
    grid-template-rows: 100%;
    grid-template-areas:
      "topleft topleft logo topright topright"
      "left pic pic pic right"
      "bot bot bot bot bot";

    align-self: start;
  }

  .logo{
    grid-area: logo;
    align-self: end;
    border-style: hidden hidden solid hidden;
    border-width: 3px;
    border-color: hsl(97, 31%, 27%);
  }
  .topleft{
    padding-top: 3px;
    padding-left: 5px;
    grid-area: topleft;
    align-self: end;
    justify-self: center;
    border-radius: 5px 0 0 0;
  }
  .topright{
    padding-top: 3px;
    padding-right: 5px;
    grid-area: topright;
    align-self: end;
    justify-self: center;
    border-radius: 0 5px 0 0;
  }

  .left{
    word-wrap: break-word;
    padding-left: 3px;
    grid-area: left;
  }
  .right{
    text-align: right;
    word-wrap: break-word;
    padding-right: 3px;
    grid-area: right;
  }
  .bottom{
    padding-block: 3px;
    grid-area: bot;
    justify-self: stretch;
    text-align: center;
  }
</style>
<script setup>

import PrimaryTemplate from "./PrimaryTemplate.vue";
import WorkDisplayContainer from "./workDisplayContainer.vue";
</script>

<template>
  <primary-template>

    <div class="workContainer">

      <router-link :to="{ name:'SLP' }"class="workLink">
        <work-display-container proj-pic="SLPtitle.png" proj-name="CITY OF ST. LOUIS PARK"></work-display-container>
      </router-link>
      <router-link :to="{ name:'manaalmeals' }" class="workLink">
        <div class="vidMainContainer">
          <div class="videoContainer">
            <video autoplay muted loop class="actualVid">
              <source src="../assets/manaalAni.mp4" type="video/mp4">
            </video>
            <h1>MANAALS MEALS</h1>
          </div>
        </div>
      </router-link>
      <router-link :to="{ name:'golden' }" class="workLink">
        <work-display-container proj-pic="goldenTitle.png" proj-name="GOLDEN MEDIA"></work-display-container>
      </router-link>
      <router-link :to="{ name:'Mesapizza' }" class="workLink">
        <work-display-container proj-pic="mesaHeader1.png" proj-name="MESA PIZZA"></work-display-container>
      </router-link>
      <router-link :to="{ name:'bioDes' }" class="workLink">
        <work-display-container proj-pic="bioDes.png" proj-name="BIO DES. CHALLENGE"></work-display-container>
      </router-link>
      <router-link :to="{ name:'SAS' }" class="workLink">
        <work-display-container proj-pic="laptopMockupSAS.png" proj-name="AD2 SAS"></work-display-container>
      </router-link>
      <router-link :to="{ name:'deLu' }" class="workLink">
        <work-display-container proj-pic="DeLu.png"  proj-name="DE LU STUDIOS"></work-display-container>
      </router-link>
      <router-link :to="{ name:'archive' }" class="workLink">
        <div class="vidMainContainer">
          <div class="videoContainer">
            <video autoplay muted loop class="actualVid">
              <source src="../assets/ARCHIVE/archive%20ani.mp4" type="video/mp4">
            </video>
            <h1>ARCHIVE</h1>
          </div>
        </div>
      </router-link>

    </div>

  </primary-template>
</template>

<style scoped>

*{
  text-decoration: none;
}

.workContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: .25rem;
  text-decoration: none;

  @media screen and (width <= 600px){
    align-items: center;
  }
  a{
    color: black;
    width: fit-content;
    height: fit-content;

    :hover{
      cursor: pointer;
    }
  }

  .vidMainContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vh;
    background-color: black;

    @media screen and (width <= 600px){
      margin-bottom: 9vh;
    }

  }

  .videoContainer{
    width: 48vw;
    min-height: 30vh;
    height: auto;
    aspect-ratio: 16/9;
    @media screen and (width <= 600px){
      width: 90vw;
      height: auto;
    }

    .actualVid{
      position: relative;
      width: 100%;
      min-height: 29.5vh;
      object-fit: cover;
      overflow: hidden;
    }
  }
  @media screen and (width <= 600px){
    flex-direction: column;
  }
}


</style>
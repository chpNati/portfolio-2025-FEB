<script setup>
import bottomComp from "./bottomComp.vue";
import PrimaryTemplate from "./PrimaryTemplate.vue";

</script>

<template>

  <primary-template>
    <p class="introContainer">Collection of projects from 2022 to (?)</p>

    <div class="projWork">
      <figure class="ic1">
        <video autoplay muted loop class="actualVid">
          <source src="../assets/ARCHIVE/Book animation 1.mp4" type="video/mp4">
        </video>
      </figure>
      <figure class="ic2">
        <img src="../assets/ARCHIVE/bg goloden 1.png" class="pic2" alt="">
      </figure>
      <figure class="ic25">
        <img src="../assets/ARCHIVE/Can%20KIWI%20and%20STRAW.png" class="pic2" alt="">
      </figure>
      <figure class="ic3">
        <img src="../assets/ARCHIVE/hair%20mockup%202.png" class="pic3" alt="">
      </figure>
      <figure class="ic4">
        <img src="../assets/ARCHIVE/Como%20Seed%20Mockuo.png" class="pic4" alt="">
      </figure>
      <figure class="ic45">
        <img src="../assets/ARCHIVE/BOXES%20MOCKUP%20PRESENTATION%203%20.png" class="pic4" alt="">
      </figure>
      <figure class="ic5">
        <img src="../assets/ARCHIVE/BOXES%20MOCKUP%20PRESENTATION%201%20.png" class="pic5" alt="">
      </figure>
      <figure class="ic6">
        <img src="../assets/ARCHIVE/faded%20whale.png" class="pic6" alt="">
      </figure>
      <figure class="ic7">
        <img src="../assets/ARCHIVE/blue%20hawk.png" class="pic7" alt="">
      </figure>
      <figure class="ic17">
        <img src="../assets/ARCHIVE/horse%20in%20utah.png" class="pic6" alt="">
      </figure>
      <figure class="ic16">
        <img src="../assets/ARCHIVE/ID%20sq1.png" class="pic6" alt="">
      </figure>
      <figure class="ic18">
        <img src="../assets/ARCHIVE/wayzgoose wide.png" class="pic6" alt="">
      </figure>
      <figure class="ic19">
        <img src="../assets/ARCHIVE/planeStuff.png" class="pic7" alt="">
      </figure>
    </div>

  </primary-template>
  <bottomComp></bottomComp>

</template>

<style scoped>

.introContainer {
  padding-left: 1rem;
}

.projWork{
  display: grid;
  align-items: center;
  align-self: center;
  padding: 0.75rem;
  grid-template-columns: repeat(6, 2fr);
  grid-template-rows: repeat(5, minmax(100px,auto));
  grid-row-gap: 0.75rem;
  grid-column-gap: .25rem;
  margin: 0.75rem;

  @media screen and (width <= 600px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}

img{
  overflow: clip;
  object-fit: cover;
  display: block;
  width: 100%;
  max-height: 1080px;
  height: auto;
  aspect-ratio: 16/9;
}

.ic1{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 1/2;
  grid-column: 1/3;
  aspect-ratio: 16/9;

  @media screen and (width <= 800px) {
    grid-row: 1/2;
    grid-column: 1/4;
  }
    @media screen and (width <= 600px) {
    grid-row: 1;
    grid-column: 1;
    video{
      width: 100%;
      height: 100%;
    }
  }
}
.ic2{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 1/2;
  grid-column: 3/5;
  @media screen and (width <= 800px) {
    grid-row: 1/2;
    grid-column: 4/7;
  }
  @media screen and (width <= 600px) {
    grid-row: 2;
    grid-column: 1;
  }
}
.ic25{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 1/2;
  grid-column: 5/7;

  @media screen and (width <= 800px) {
    grid-row: 2/3;
    grid-column: 1/4;
  }
  @media screen and (width <= 600px) {
    grid-row: 3;
    grid-column: 1;
  }
}
.ic3{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 2/3;
  grid-column: 1/3;

  @media screen and (width <= 800px) {
    grid-row: 2/3;
    grid-column: 4/7;
  }
  @media screen and (width <= 600px) {
    grid-row: 4;
    grid-column: 1;
  }
}
.ic4{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 2/3;
  grid-column: 3/5;

  @media screen and (width <= 800px) {
    grid-row: 3/4;
    grid-column: 1/4;
  }
  @media screen and (width <= 600px) {
    grid-row: 5;
    grid-column: 1;
  }
}
.ic45{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 2/3;
  grid-column: 5/7;

  @media screen and (width <= 800px) {
    grid-row: 3/4;
    grid-column: 4/7;
  }
  @media screen and (width <= 600px) {
    grid-row: 6;
    grid-column: 1;

  }
}
.ic5{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 3/4;
  grid-column: 1/3;

  @media screen and (width <= 800px) {
    grid-row: 4/5;
    grid-column: 1/4;
  }
  @media screen and (width <= 600px) {
    grid-row: 7;
    grid-column: 1;
  }
}
.ic6{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 3/4;
  grid-column: 3/5;

  @media screen and (width <= 800px) {
    grid-row: 4/5;
    grid-column: 4/7;
  }
  @media screen and (width <= 600px) {
    grid-row: 8;
    grid-column: 1;
  }
}
.ic7{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 3/4;
  grid-column: 5/7;

  @media screen and (width <= 800px) {
    grid-row: 5/6;
    grid-column: 1/4;
  }

  @media screen and (width <= 600px) {
    grid-row: 9;
    grid-column: 1;
  }
}
.ic18{
  display: flex;
  height: 100%;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
  overflow: hidden;
  grid-row: 4/5;
  grid-column: 1/3;


  @media screen and (width <= 800px) {
    grid-row: 5/6;
    grid-column: 4/7;
  }
  @media screen and (width <= 600px) {
    grid-row: 11;
    grid-column: 1;
  }
}
.ic16{
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: contain;
  grid-row: 4/5;
  grid-column: 3/5;


  @media screen and (width <= 800px) {
    grid-row: 6/7;
    grid-column: 1/4;
  }

  video{
    margin-left: -50%;
  }
  @media screen and (width <= 600px) {
    grid-row: 12;
    grid-column: 1;
  }
}
.ic17{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 4/5;
  grid-column: 5/7;


  @media screen and (width <= 800px) {
    grid-row: 6/7;
    grid-column: 4/7;
  }
  @media screen and (width <= 600px) {
    grid-row: 10;
    grid-column: 1;
  }
}
.ic19{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 5/6;
  grid-column: 1/3;

  @media screen and (width <= 800px) {
    grid-row: 7/8;
    grid-column: 1/4;
  }
  @media screen and (width <= 600px) {
    grid-row: 13;
    grid-column: 1;
  }
}


</style>
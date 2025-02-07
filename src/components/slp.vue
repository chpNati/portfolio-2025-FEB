<script setup>

import PrimaryTemplate from "./PrimaryTemplate.vue";
import PageDisplayComponent from "./pageDisplayComponent.vue";
import bottomComp from "./bottomComp.vue";
</script>

<template>
  <primary-template>

    <page-display-component work-desc="My main responsibility as a graphic design intern for the SLP was to assist
with the production of multiple digital and printed communication content. I worked with multiple departments such
as elections, engineering, parks and recreation and general city communication. " work-name=" City of St. Louis Park " img0="goldenTitle.png"></page-display-component>

    <div class="projWork">
      <figure class="ic1">
        <img src="../assets/SLP work/11by17s.png" class="pic1" alt="">
      </figure>
      <figure class="ic2">
        <img src="../assets/SLP work/flyers 1.png" class="pic2" alt="">
      </figure>
      <figure class="ic25">
        <img src="../assets/SLP work/flyers 2.png" class="pic2" alt="">
      </figure>
      <figure class="ic3">
        <img src="../assets/SLP work/flyers 3.png" class="pic3" alt="">
      </figure>
      <figure class="ic4">
        <img src="../assets/SLP work/flyers 4.png" class="pic4" alt="">
      </figure>
      <figure class="ic45">
        <img src="../assets/SLP work/SCS digital.png" class="pic4" alt="">
      </figure>
      <figure class="ic5">
        <img src="../assets/SLP work/SCS Digital 2.png" class="pic5" alt="">
      </figure>
      <figure class="ic15">
        <video autoplay muted loop class="actualVid">
          <source src="../assets/SLP work/Summer Concert Series Intro Video.mp4" type="video/mp4">
        </video>
      </figure>
      <figure class="ic16">
        <img src="../assets/SLP work/SCS IG1.png" class="pic6" alt="">
      </figure>
      <figure class="ic6">
        <img src="../assets/SLP work/sq howl 1.png" class="pic6" alt="">
      </figure>
      <figure class="ic7">
        <img src="../assets/SLP work/sq mp 1.png" class="pic7" alt="">
      </figure>
      <figure class="ic17">
        <img src="../assets/SLP work/Movies Digital 1.png" class="pic6" alt="">
      </figure>
      <figure class="ic18">
        <img src="../assets/SLP work/Movies Digital 2.png" class="pic6" alt="">
      </figure>
      <figure class="ic8">
        <img src="../assets/SLP work/sq pol 1.png" class="pic8" alt="">
      </figure>
      <figure class="ic10">
        <img src="../assets/SLP work/sq pol 2.png" class="pic9" alt="">
      </figure>
      <figure class="ic11">
        <img src="../assets/SLP work/elections fly main .png" class="pic10" alt="">
      </figure>
      <figure class="ic12">
        <img src="../assets/SLP work/elections fly main_.png" class="pic11" alt="">
      </figure>
      <figure class="ic13">
        <img src="../assets/SLP work/elections fly 1.png" class="pic12" alt="">
      </figure>
      <figure class="ic14">
        <img src="../assets/SLP work/elections fly 2.png" class="pic13" alt="">
      </figure>
    </div>

    <bottomComp></bottomComp>
  </primary-template>


</template>

<style scoped>
.projWork{
  display: grid;
  align-items: center;
  align-self: center;
  padding: 0.75rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(11, minmax(100px,auto));
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
  height: auto;
}

.ic1{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 3/4;
  grid-column: 1/7;
  @media screen and (width <= 600px) {
    grid-row: 1;
    grid-column: 1;
  }
}
.ic2{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 2/3;
  grid-column: 4/7;
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
  grid-column: 4/7;
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
  grid-column: 1/4;
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
  grid-row: 1/2;
  grid-column: 1/4;
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
  grid-row: 8/9;
  grid-column: 1/7;
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
  grid-row: 7/8;
  grid-column: 1/7;
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
  grid-row: 4/5;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 19;
    grid-column: 1;
  }
}
.ic7{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 4/5;
  grid-column: 1/4;

  @media screen and (width <= 600px) {
    grid-row: 20;
    grid-column: 1;
  }
}
.ic8 {
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 11/12;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 10;
    grid-column: 1;
  }
}

.ic10{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 11/12;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 12;
    grid-column: 1;
  }
}
.ic11{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 7/8;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 13;
    grid-column: 1;
  }
}
.ic12{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 10/11;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 14;
    grid-column: 1;
  }
}
.ic13{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 10/11;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 15;
    grid-column: 1;
  }
}
.ic14{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 9/10;
  grid-column: 1/7;
  @media screen and (width <= 600px) {
    grid-row: 16;
    grid-column: 1;
  }
}
.ic15{
  display: flex;
  height: 100%;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  overflow: hidden;
  grid-row: 6/7;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 8;
    grid-column: 1;
  }
}
.ic16{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 6/7;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 9;
    grid-column: 1;
  }
}
.ic17{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 5/6;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 17;
    grid-column: 1;
  }
}
.ic18{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 5/6;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 18;
    grid-column: 1;
  }
}

</style>
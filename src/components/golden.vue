<script setup>

import PageDisplayComponent from "./pageDisplayComponent.vue";
import PrimaryTemplate from "./PrimaryTemplate.vue";
import bottomComp from "./bottomComp.vue";

</script>

<template>

  <primary-template>

    <page-display-component work-desc="Working as a Graphic Designer for Golden
 Media Magazine, I was held with the responsibility of designing website
 banners, social media marketing tools, and magazine spreads.
 Collaborating with a large team, I was able to assist with the
 creative requests that ranged from merchandise designs to article
 covers. " work-name=" Golden Media " img0="goldenTitle.png"></page-display-component>


  <div class="projWork">
    <figure class="ic1">
      <img src="../assets/golden work images/Golden Magazine Online Spread 1.png" class="pic1" alt="">
    </figure>
    <figure class="ic2">
      <img src="../assets/golden work images/Golden Magazine spread online 2.png" class="pic2" alt="">
    </figure>
    <figure class="ic25">
      <img src="../assets/golden work images/GOLDEN_ best local bakeries.png" class="pic2" alt="">
    </figure>
    <figure class="ic3">
      <img src="../assets/golden work images/golden burn out visual.png" class="pic3" alt="">
    </figure>
    <figure class="ic4">
      <img src="../assets/golden work images/What happened to black friday_.png" class="pic4" alt="">
    </figure>
    <figure class="ic45">
      <img src="../assets/golden work images/Safety in Dinky.png" class="pic4" alt="">
    </figure>
    <figure class="ic5">
      <img src="../assets/golden work images/st paul campus.png" class="pic5" alt="">
    </figure>
    <figure class="ic6">
      <img src="../assets/golden work images/Sweet Treat Gen Z.png" class="pic6" alt="">
    </figure>
    <figure class="ic7">
      <img src="../assets/golden work images/Tote full thing.png" class="pic7" alt="">
    </figure>
    <figure class="ic8">
      <img src="../assets/golden work images/new merch 2.png" class="pic8" alt="">
    </figure>
    <figure class="ic9">
      <img src="../assets/golden work images/Revival tshirt.png" class="pic9" alt="">
    </figure>
  </div>
  </primary-template>
  <bottomComp></bottomComp>

</template>

<style scoped>
.projWork{
  display: grid;
  align-items: center;
  align-self: center;
  padding: 0.75rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, minmax(100px,auto));
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
  grid-row: 1/2;
  grid-column: 1/5;
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
  grid-row: 3/4;
  grid-column: 1/7;
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
  grid-row: 5/6;
  grid-column: 4/7;
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
  grid-column: 4/7;
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
  grid-column: 4/7;
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
  grid-row: 7/8;
  grid-column: 1/4;
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
  grid-row: 5/6;
  grid-column: 1/4;

  @media screen and (width <= 600px) {
    grid-row: 9;
    grid-column: 1;
  }
}
.ic8{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 6/7;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 10;
    grid-column: 1;
  }
}
.ic9{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 6/7;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 11;
    grid-column: 1;
  }
}
</style>
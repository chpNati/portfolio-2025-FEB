<script setup>

import PrimaryTemplate from "./PrimaryTemplate.vue";
import PageDisplayComponent from "./pageDisplayComponent.vue";
import bottomComp from "./bottomComp.vue";
</script>

<template>
<primary-template>
  <page-display-component work-desc="SAS (Student Advertising Summit) is a 2 day event that connects agencies,
  professionals and students through a networking event in which all 3 can learn more about each other. For the
   year of 2024 I worked as a Creative Designer alongside a passionate team that executed social, digital and
   print designs. " work-name=" Student Advertisment Services, AD2 " img0="goldenTitle.png">
  </page-display-component>


  <div class="projWork">
    <figure class="ic1">
      <img src="../assets/SAS/2024 SAS Team.png" class="pic2" alt="">
    </figure>
    <figure class="ic2">
      <img src="../assets/SAS/phone mockups sas.png" class="pic2" alt="">
    </figure>
    <figure class="ic25">
      <img src="../assets/SAS/SAS No Pressure Header Black.png" class="pic2" alt="">
    </figure>
    <figure class="ic3">
      <img src="../assets/SAS/laptop mockup sas.png" class="pic3" alt="">
    </figure>
    <figure class="ic45">
      <img src="../assets/SAS/SAS Mockup Basic.png" class="pic4" alt="">
    </figure>
    <figure class="ic15">
      <img src="../assets/SAS/branding coloring.png" class="pic6" alt="">
    </figure>
    <figure class="ic5">
      <img src="../assets/SAS/branding type.png" class="pic5" alt="">
    </figure>
    <figure class="ic6">
      <img src="../assets/SAS/WBG_6400.jpg" class="pic6" alt="">
    </figure>
    <figure class="ic7">
      <img src="../assets/SAS/WBG_6408.jpg" class="pic7" alt="">
    </figure>
    <figure class="ic17">
      <img src="../assets/SAS/WBG_6464.jpg" class="pic6" alt="">
    </figure>
    <figure class="ic16">
      <img src="../assets/SAS/WBG_6473.jpg" class="pic6" alt="">
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
  grid-template-rows: repeat(7, minmax(100px,auto));
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
}

.ic1{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 1/2;
  grid-column: 1/7;
  aspect-ratio: 16/9;

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
  grid-row: 7/8;
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
  grid-row: 2/3;
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
  grid-row: 3/4;
  grid-column: 1/4;
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
  grid-row: 5/6;
  grid-column: 1/7;
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
.ic15{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: contain;
  overflow: hidden;
  grid-row: 3/4;
  grid-column:4/7;
  @media screen and (width <= 600px) {
    grid-row: 8;
    grid-column: 1;
  }
}
.ic16{
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: contain;
  aspect-ratio: 16/9;
  grid-row: 6/7;
  grid-column: 1/7;

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
  grid-row: 4/5;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 17;
    grid-column: 1;
  }
}
</style>
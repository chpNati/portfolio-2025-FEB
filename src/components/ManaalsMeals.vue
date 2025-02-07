<script setup>

import PageDisplayComponent from "./pageDisplayComponent.vue";
import PrimaryTemplate from "./PrimaryTemplate.vue";
import bottomComp from "./bottomComp.vue";

</script>

<template>
  <primary-template>
  <page-display-component work-desc="Manaals Meals was made to represent a high class airline experience with
a focus on Greek cuisine and quality customer service. By presenting users with more variability in their airline
dining experience, the brand identity work of Manaals Meals shows how to merge an appealing design structure to a
a branding concept such as Manaals. " work-name=" Manaals Meals " img0="goldenTitle.png"></page-display-component>


  <div class="projWork">
    <figure class="ic1">
      <video autoplay muted loop class="actualVid">
        <source src="../assets/Manaals/manaal intro animation.mp4" type="video/mp4">
      </video>
    </figure>
    <figure class="ic2">
      <img src="../assets/Manaals/billboard ad full.png" class="pic2" alt="">
    </figure>
    <figure class="ic25">
      <img src="../assets/Manaals/Airport mockup MAIN.png" class="pic2" alt="">
    </figure>
    <figure class="ic3">
      <img src="../assets/Manaals/Open booklet mockup.png" class="pic3" alt="">
    </figure>
    <figure class="ic4">
      <img src="../assets/Manaals/plastic water bottle mockup.png" class="pic4" alt="">
    </figure>
    <figure class="ic45">
      <img src="../assets/Manaals/poster mockup 1.png" class="pic4" alt="">
    </figure>
    <figure class="ic15">
      <video autoplay muted loop class="actualVid">
        <source src="../assets/Manaals/manaal brand guide ani.mp4" type="video/mp4">
      </video>
    </figure>
    <figure class="ic5">
      <img src="../assets/Manaals/manaals logo finalizedish-01.png" class="pic5" alt="">
    </figure>
    <figure class="ic6">
      <img src="../assets/Manaals/manaals logo finalizedish-02.png" class="pic6" alt="">
    </figure>
    <figure class="ic7">
      <img src="../assets/Manaals/manaals logo finalizedish-03.png" class="pic7" alt="">
    </figure>
    <figure class="ic17">
      <img src="../assets/Manaals/manaals logo finalizedish-04.png" class="pic6" alt="">
    </figure>
    <figure class="ic16">
      <video autoplay muted loop class="actualVid">
        <source src="../assets/Manaals/iphone mockup.mp4" type="video/mp4">
      </video>
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
  grid-row: 7/8;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 12;
    grid-column: 1;
    img{
      aspect-ratio: 16/9;
    }
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
    grid-row: 2;
    grid-column: 1;
  }
}
.ic4{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 3/4;
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
  grid-row: 7/8;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 11;
    grid-column: 1;

  }
}
.ic5{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 4/5;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 6;
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
    grid-row: 7;
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
    grid-row: 8;
    grid-column: 1;
  }
}
.ic15{
  display: flex;
  height: 100%;
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
  overflow: hidden;
  grid-row: 6/7;
  grid-column: 1/7;
  @media screen and (width <= 600px) {
    grid-row: 10;
    grid-column: 1;
  }
}
.ic16{
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: contain;
  aspect-ratio: 1/1;
  grid-row: 3/4;
  grid-column: 4/7;

  video{
    margin-left: -50%;
  }
  @media screen and (width <= 600px) {
    grid-row: 5;
    grid-column: 1;
  }
}
.ic17{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 5/6;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 9;
    grid-column: 1;
  }
}
</style>
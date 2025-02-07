<script setup>

import PrimaryTemplate from "./PrimaryTemplate.vue";
import PageDisplayComponent from "./pageDisplayComponent.vue";
import bottomComp from "./bottomComp.vue";

</script>

<template>
<primary-template>
  <page-display-component work-desc= "Contracted by DeLu Studios, I was able to work along side multiple brands to
develop digital marketing content that would be posted on social media. By following strict brand guidelines, I was
able to explore creative options to display marketing content that fit within each unique brand." work-name="
   DeLu Studios"></page-display-component>


  <div class="projWork">
    <figure class="ic1">
      <img src="../assets/DeLu work pics/iphone mockupMain.png" class="pic1" alt="">
    </figure>
    <figure class="ic2">
      <img src="../assets/DeLu work pics/Laptop mockup.png" class="pic2" alt="">
    </figure>
    <figure class="ic25">
      <img src="../assets/DeLu work pics/SQ 1.png" class="pic2" alt="">
    </figure>
    <figure class="ic4">
      <img src="../assets/DeLu work pics/SQ 2.png" class="pic4" alt="">
    </figure>
    <figure class="ic45">
      <img src="../assets/DeLu work pics/SQ 3.png" class="pic4" alt="">
    </figure>
    <figure class="ic6">
      <img src="../assets/DeLu work pics/SQ 4.png" class="pic4" alt="">
    </figure>
    <figure class="ic5">
      <img src="../assets/DeLu work pics/WD1.png" class="pic5" alt="">
    </figure>
    <figure class="ic16">
      <img src="../assets/DeLu work pics/WD2.png" class="pic6" alt="">
    </figure>
    <figure class="ic7">
      <img src="../assets/DeLu work pics/WD4.png" class="pic6" alt="">
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
  grid-template-rows: repeat(6, minmax(100px,auto));
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
  grid-row: 6/7;
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
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 3;
    grid-column: 1;
  }
}
.ic4{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 2/3;
  grid-column: 4/7;
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
  grid-row: 3/4;
  grid-column: 4/7;
  @media screen and (width <= 600px) {
    grid-row: 5;
    grid-column: 1;
  }
}
.ic5{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 5/6;
  grid-column: 1/7;
  @media screen and (width <= 600px) {
    grid-row: 10;
    grid-column: 1;
  }
}
.ic6{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 3/4;
  grid-column: 1/4;
  @media screen and (width <= 600px) {
    grid-row: 6;
    grid-column: 1;
  }
}
.ic7{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 4/5;
  grid-column: 4/7;

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
  grid-row: 4/5;
  grid-column: 1/4;
  img{
    aspect-ratio: 16/9;
  }
  @media screen and (width <= 600px) {
    grid-row: 7;
    grid-column: 1;
  }
}
</style>
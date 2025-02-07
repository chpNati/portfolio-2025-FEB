<script setup>

import PageDisplayComponent from "./pageDisplayComponent.vue";
import bottomComp from "./bottomComp.vue";
import PrimaryTemplate from "./PrimaryTemplate.vue";

</script>

<template>
  <primary-template>
    <page-display-component work-desc= "Leftovers imagines an alternative to single
   use plastics by creating a more sustainable and completely biodegradable
   option. By using rice paper as the main source of inspiration, our team
   concepted, prototyped, tested and presented out sustainable packaging
   option at the 2024 Biodesign Challenge Competition in New York." work-name="
   Bio Design Challenge"></page-display-component>

    <div class="projWork">
      <figure class="ic1">
        <img src="../assets/BIODES/LEFT OVERS LOGO MAIN.png" class="pic1" alt="">
      </figure>
      <figure class="ic2">
        <img src="../assets/BIODES/lft overs new logo mockup (1).png" class="pic2" alt="">
      </figure>
      <figure class="ic25">
        <img src="../assets/BIODES/mockup leftovers 2.png" class="pic2" alt="">
      </figure>
      <figure class="ic4">
        <img src="../assets/BIODES/lotus miro.png" class="pic4" alt="">
      </figure>
      <figure class="ic45">
        <img src="../assets/BIODES/walt disney.png" class="pic4" alt="">
      </figure>
      <figure class="ic5">
        <img src="../assets/BIODES/campus team pic .jpeg" class="pic5" alt="">
      </figure>
      <figure class="ic15">
        <video autoplay muted loop class="actualVid">
          <source src="../assets/BIODES/Day of Updated.mp4" type="video/mp4">
        </video>
      </figure>
      <figure class="ic16">
        <img src="../assets/BIODES/biodes branch.jpeg" class="pic6" alt="">
      </figure>
      <figure class="ic6">
        <img src="../assets/BIODES/scamper.jpeg" class="pic6" alt="">
      </figure>
      <figure class="ic7">
        <img src="../assets/BIODES/prototype record.png" class="pic7" alt="">
      </figure>
      <figure class="ic17">
        <img src="../assets/BIODES/Screenshot 2023-05-04 at 1.54.19 PM.png" class="pic6" alt="">
      </figure>
      <figure class="ic18">
        <img src="../assets/BIODES/_DSC3293.jpg" class="pic6" alt="">
      </figure>
      <figure class="ic8">
        <img src="../assets/BIODES/_DSC3307.jpg" class="pic8" alt="">
      </figure>
      <figure class="ic10">
        <img src="../assets/BIODES/_DSC4704.jpg" class="pic9" alt="">
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
  grid-template-rows: repeat(9, minmax(100px,auto));
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
  grid-row: 6/7;
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
  grid-row: 4/5;
  grid-column: 4/7;
  img{
    aspect-ratio: 16/9;
  }
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
  grid-row: 5/6;
  grid-column: 4/7;

  @media screen and (width <= 600px) {
    grid-row: 8;
    grid-column: 1;
  }
}
.ic8 {
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 9/10;
  grid-column: 1/4;
  img{
    aspect-ratio: 16/9;
  }
  @media screen and (width <= 600px) {
    grid-row: 13;
    grid-column: 1;
  }
}

.ic10{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  grid-row: 9/10;
  grid-column: 4/7;
  img{
   aspect-ratio: 16/9;
  }
  @media screen and (width <= 600px) {
    grid-row: 12;
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
  grid-row: 7/8;
  grid-column: 1/7;
  @media screen and (width <= 600px) {
    grid-row: 11;
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
.ic17{
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  grid-row: 5/6;
  grid-column: 1/4;
  background-color: black;
  img{
    width: 108%;
    height: 105%;
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
  object-fit: cover;
  grid-row: 8/9;
  grid-column: 1/7;
  @media screen and (width <= 600px) {
    grid-row: 14;
    grid-column: 1;
  }
}
</style>
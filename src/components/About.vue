<script setup>

import PrimaryTemplate from "./PrimaryTemplate.vue";
</script>

<template>

  <primary-template>
    <div class="container">
      <div class="pictureContainer">
        <div class="picture"
             :style="'background-image: url(./src/assets/IMG_6010.JPG);'"></div>
      </div>
      <div class="infoContainer">
        <h1 class="bigText">
          Hi!
        </h1>
        <h2 class="smallText">
          My name is Natinael Yeshiwas but I go by Nati!
        </h2>
        <p class="bodyText">
          I am a Graphic and UX Designer based in the Twin Cities.
          Other than working on design stuff, I like movies and anything that can tap into
          my creative outlet. If you would like to get into contact with me, please follow any of the
          links below and I would love to respond/work together. Thanks for checking out my site!
        </p>
        <div class="socialLinkContainer">
          <a :href=" 'mailto:natinigisty@gmail.com' "
             target="_blank" rel="noopener noreferrer" class="socialLink">Email</a>
          <a :href=" 'https://www.linkedin.com/in/natinael-yeshiwas-bb24b621b/' "
             target="_blank" rel="noopener noreferrer" class="socialLink">LinkedIn</a>
          <a :href=" 'https://www.instagram.com/restingvagabond/' "
             target="_blank" rel="noopener noreferrer" class="socialLink">Instagram</a>
          <a :href=" 'https://drive.google.com/file/d/1YviI62Si6h6ELanYM6m8fd7-6qImvYBy/view?usp=sharing' "
             target="_blank" rel="noopener noreferrer" class="socialLink">Resume</a>
        </div>
      </div>
    </div>
  </primary-template>

</template>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;

  @media screen and (width <= 800px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


    .picture {
      width: 45vw;
      height: 45vh;
      background-color: #222222;

      @media screen and (width <= 800px){
        width: 98vw;
      }
    }
  .infoContainer{
    width: 45vw;
    height: 45vh;
    @media screen and (width <= 800px){
      width: 95%;
    }

    .bigText{
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    .smallText{
      font-size: 1.5rem;
    }

    .bodyText{
      margin: 2.5rem 0 3rem 0;
      word-break: break-word;
      width: 100%;
    }
  }
}
.socialLinkContainer{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;

  a{
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: .5rem;
    padding: .5rem;
    color: black;
  }
  a:hover{
      background-color: #222222;
      color: white;
      transition: .15s ease-in;

  }
}

.picture{
  background-size: cover;
  background-position: 50% 50%;
}
</style>
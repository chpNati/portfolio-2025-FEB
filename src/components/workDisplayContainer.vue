<script setup>
defineProps({
  projName: {
    type: String,
    required: true
  },
  projDesc: {
    type: String,
    required: false
  },
  projPic: {
    type: String,
    required: false
  }
})

</script>

<template>
  <div class="mainContainer">

  <div class="projContainer">

    <div class="projectPicContainer">
      <div class="projectPic" :style="'background-image: url(../src/assets/' + projPic + ');'">
      </div>
    </div>

    <div class="projDescContainer">
      <div class="projectName">
        <h1 class="name">{{projName}}</h1>
      </div>

      <div class="projectDesc">
        <h1 class="description">{{projDesc}}</h1>
      </div>
    </div>


  </div>
  </div>

</template>

<style scoped>
*{
  text-decoration: none;
}

.mainContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (width <= 600px){
    justify-content: center;
  }
}
.projContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
}

.projectPic{
  width: 48vw;
  height: auto;
  min-height: 30vh;
  background-size: cover;
  background-position: 50% 50%;
  aspect-ratio: 16/9;
  @media screen and (width <= 600px){
    width: 90vw;
    height: auto;
  }
}

.projDescContainer{
  display: flex;
  flex-direction: column;
  width: 48vw;
  h1{
    padding: 0;
    margin: 0;
    text-decoration: none;
    width: 100%;
  }
}


</style>
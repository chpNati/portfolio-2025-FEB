<script setup>
defineProps({
  workName: {
    type: String,
    required: false
  },
  workDesc: {
    type: String,
    required: false
  }

})

</script>

<template>

  <div class="workInfoContainer">
    <div class="workInfo">
      <h1 class="workName">{{workName}}</h1>
      <h2 class="workDesc">{{workDesc}}</h2>
    </div>
  </div>

  <div class="picHeadContainer">
    <div class="pic0"
         :style="'background-image: url(../src/assets/' + img0 + ');'">
    </div>
  </div>

</template>

<style scoped>

.workInfoContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: baseline;
  margin: 1rem;
  horiz-align: center;


    .workInfo{
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    width: 100%;

    @media screen and (width <= 600px) {
      flex-direction: column;
      justify-content: flex-start;
      padding-left: 1rem;
    }

      .workName {
        font-size: 3rem;
        margin: auto;
        @media screen and (width <= 600px) {
          margin: 0;
        }
        }

    .workDesc{
      width: 45vw;
      font-size: 1rem;
      font-weight: 300;
      margin: auto;
      @media screen and (width <= 600px) {
        margin: 0;
        width: 90%;
      }
    }
  }
}

</style>
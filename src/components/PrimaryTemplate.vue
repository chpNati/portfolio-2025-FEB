<script setup>

</script>

<template>

  <div class="navContainer">
    <router-link :to="{ name: 'home' }">Work</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>

  <section class="slot-info">
    <slot></slot>
  </section>

</template>

<style scoped>

.navContainer{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 1rem;
  a{
    font-size: 1.75rem;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }
}

</style>
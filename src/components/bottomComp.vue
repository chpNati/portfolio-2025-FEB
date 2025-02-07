<script setup>

</script>

<template>
  <footer>
    <div class="footerContainer">
      <div class="socialLinkContainer">
        <a :href=" 'mailto:natinigisty@gmail.com' "
           target="_blank" rel="noopener noreferrer" class="socialLink">Email</a>
        <a :href=" 'https://www.linkedin.com/in/natinael-yeshiwas-bb24b621b/' "
           target="_blank" rel="noopener noreferrer" class="socialLink">LinkedIn</a>
        <a :href=" 'https://www.instagram.com/restingvagabond/' "
           target="_blank" rel="noopener noreferrer" class="socialLink">Instagram</a>
      </div>
      <div class="footerNavContainer">
        <router-link :to="{ name: 'home' }">More work</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>


.footerContainer{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 2rem 1rem 2rem 1rem;

  a {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    border: 1px solid black;
    border-radius: .35rem;
    padding: .5rem;
    color: black;
  }

  a:hover {
    background-color: #222222;
    color: white;
    transition: .15s ease-in;

  }
}
.socialLinkContainer {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0;

}
.footerNavContainer{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
}

</style>
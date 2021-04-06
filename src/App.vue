<template>
  <div id="app">
    <Nav />
    <router-link to="/home">Home</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
}

#nav .nav__left {
  display: flex;
}
</style>

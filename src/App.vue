<template>
  <div id="app">
    <SplashPage msg="sup"/>
  </div>
</template>

<script>
import SplashPage from './components/SplashPage.vue'

export default {
  name: 'App',
  components: {
    SplashPage
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');
body {
  font-family: 'Yellowtail', cursive;
  background: url("./assets/pexels-boats.jpg") no-repeat center center fixed;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

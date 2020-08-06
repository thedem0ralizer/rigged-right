<template>
  <div id="splash-text">
    <h1>Rigged Right, LLC</h1>
    <p>Coming soon...</p>
  </div>
</template>

<script>
export default {
  name: 'SplashPage',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#splash-text {
  margin-top: 35vh;
}

h1, p {
  color: white;
  text-shadow: 2px 2px black;
  font-weight: 200;
}

</style>

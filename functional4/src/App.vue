<template>
  <div id="app">
    <Internship />
  </div>
</template>

<script>
import Internship from "./components/Internship.vue";

export default {
  name: "app",
  components: {
    Internship
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

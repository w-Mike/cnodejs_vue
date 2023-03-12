<template>
  <div id="app">
    <nc-header></nc-header>
    <div id="mainContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ncHeader from "./components/ncHeader.vue"

export default {
  name: 'app',
  components: {
    ncHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}
#mainContent{
  width: 80%;
  margin: 0 auto;
  margin-top: 2em;
}
</style>

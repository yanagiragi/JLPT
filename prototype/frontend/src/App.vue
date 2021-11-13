<template>
  <div id="app">
    <div class="block">
      <h1 class="font-sans text-8xl text-gray-200">
        JLPT Prototype
      </h1>
    </div>
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}

body {
  /* 
  * Image Source: 
  * "Webtreats Seamless Web Background in Rich Black Wood 2" by webtreats 
  * is licensed with CC BY 2.0. To view a copy of this license, visit 
  * https://creativecommons.org/licenses/by/2.0/  
  */
  background-image: url("/bg.jpg");
}
</style>

<template>
  <div id="app">
    <img class="vue-img" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="account">Accont</div>
    <circle4 style="width: 100px; height: 100px;"></circle4>
    <p></p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Circle4 } from "vue-loading-spinner";
export default {
  name: "app",
  components: {
    HelloWorld,
    Circle4
  }
};
</script>

<style lang="scss">
$color: green;
%bg-color {
  background-color: rgba($color: #000000, $alpha: 0.5);
  border: 2px solid #2c3e50;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  @extend %bg-color;
}
.vue-img {
  border: 1px solid $color;
}
p::before {
  content: "\e0cd";
  font-family: "material icons";
  font-weight: 100;
  color: red;
}
.account::before {
  content: "\f346";
  font-family: "Material Design Icons";
}
.spinner {
  margin: auto;
}
</style>

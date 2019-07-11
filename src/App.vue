<template>
  <div id="app">
    <router-view/>
    <mainPage>
    </mainPage>    
  </div>
</template>

<script>
import mainPage from './components/mainPage';
// import hello from './components/HelloWorld'
export default {
  name: "app",
  components: {
    mainPage
  }
};
</script>

<style lang="scss">
// Colors
$color: green;
// Sizes

%bg-color {
  background-color: rgba($color: #000000, $alpha: 0.5);
  border: 2px solid #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  // @extend %bg-color;
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
</style>

<template>
  <div id="left-menu">
    <h3>Меню</h3>
    <select name="tegs" id="menu-tegs" size="1">
      <option value>Post 1</option>
      <option value>Post 2</option>
      <option value>Post 3</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "leftMenu",
  props: {
    // msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Colors */
$white: #ffffff;
$black: #000000;
$background: #483d8b;

#left-menu {
  width: 70px;
  height: 100vh;
  padding-top: 2%;
  padding-left: 1.5%;
  padding-right: 15%;
  box-sizing: border-box;
  box-shadow: 2px 0 3px rgba($color: #000000, $alpha: 0.7);
  background-color: $background;
  color: $white;
}
#menu-tegs {
  width: auto;
  border: 1px solid #48acde;
  border-radius: 2px;
  background-color: $white;
}
</style>
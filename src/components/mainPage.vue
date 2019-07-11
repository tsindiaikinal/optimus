<template>
  <div id="main-page">
    <div class="content__container">
      <leftMenu />
      <!-- <header>
      </header>-->
      <div class="content__posts">
        <h1>Объявления</h1>
        <posts />
        <circle4 style="width: 100px; height: 100px;" />
        <router-link to="/hello">Go to Hello</router-link>
        <div class="account">Accont</div>
        <footer>
          <small>&copy; 2019 Made by Aleksej Tsyndiaikin</small>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from "./leftMenu";
import posts from "./posts";
import { Circle4 } from "vue-loading-spinner";
export default {
  name: "mainPage",
  components: {
    posts,
    leftMenu,
    Circle4
  },
  props: {
    // msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  width: 80%;
}
.content {
  &__container {
    max-width: 1200px;
    display: flex;
    justify-content: center;
  }
  &__posts {
    width: 100%;
    h1 {
      text-align: center;
    }
  }
}

.account::before {
  content: "\f346";
  font-family: "Material Design Icons";
}
.spinner {
  margin: auto;
}
footer {
  margin-top: 10%;
}
</style>
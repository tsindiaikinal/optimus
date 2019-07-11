<template>
  <section class="posts" id="posts">
    <!-- <span class="your-name">Roma</span> -->
    <section class="posts__item">
      <!-- v-for="posts of dataPosts" -->
      <h3 class="posts__title">{{ dataPosts.title }}</h3>
      <div
        class="posts__description"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, unde.</div>
      <div class="posts__tegs-container">
        <span class="posts__teg">Марка автомобиля</span>
        <span class="posts__teg">Год выпуска</span>
        <span class="posts__teg">Б/У</span>
      </div>
      <button @click="getData()">Load</button>
    </section>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "posts",
  props: {
    // msg: String
  },
  data() {
    return {
      dataPosts: [],
      error: ""
      // titles: [cat],
      // descriptions: [],
      // tegs: []
    };
  },
  // created: function () {
  //   this.getData();
  // },
  methods: {
    getData: function() {
    let self = this;
    axios
      .get("/../list-posts.json")
      .then(response => {
        self.dataPosts = response.data;
      })
      .catch(function(e) {
        self.error = e;
      });
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.posts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  &__item {
    width: 200px;
    margin: 1.5%;
    padding: 2%;
    padding-top: 2%;
    padding-bottom: 4%;
    border: 1px solid grey;
  }
}
button {
  width: 150px;
}
</style>
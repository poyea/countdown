<template>
  <span class="banner">Countdown</span>
  <Counter />
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
  created() {
    document.title = "The Countdown";
  },
};
</script>

<style>
html,
body {
  height: 100%;
  background-color: #262626;
}

* {
  color: #f2f2f2;
  font-family: "OCR A Std", monospace;
}

html {
  display: table;
  margin: auto;
}

body {
  display: table-cell;
  vertical-align: middle;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 100%;
}

.banner {
  font-size: 3rem;
}
</style>

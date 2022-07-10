<template>
  <div class="words">
    <h1 class="time">{{ text }}</h1>
    <br />
    <br />
    <br />
    <div v-if="!timeSet">
      Try:
      <span class="trial">
        <a v-bind:href="'.' + trial">
          {{ trial.substring(4).split("T").join(" ") }}</a
        >
      </span>
    </div>
  </div>
</template>

<script>
import msToFull from "../utils/time";
const search = window.location.search;
const params = new URLSearchParams(search);
const t = params.get("t");
let point = new Date(t);
let text = "loading...";
const trial =
  "/?t=" +
  new Date(new Date().setDate(new Date().getDate() + 3))
    .toISOString()
    .slice(0, -5);

export default {
  name: "Counter",
  data() {
    return {
      text,
      trial,
    };
  },
  mounted() {
    setInterval(() => {
      const diff = point - Date.now();
      if (isNaN(diff)) {
        this.setTest("Failed. Please retry.");
        this.timeSet = false;
      }
      if (diff < 0) {
        this.setTest("Please give the correct date & time.");
        this.timeSet = false;
      } else {
        const out = msToFull(diff);
        this.setTest(out);
      }
    }, 1000);
  },
  beforeCreate() {
    this.timeSet = true;
  },
  methods: {
    setTest(t) {
      this.text = t;
    },
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.trial {
  background-color: grey;
  color: azure;
  border-radius: 5px;
  padding: 3px 5px 3px 5px;
}

.time {
  font-size: 1.5rem;
}

a:link,
a:hover,
a:active,
a:visited {
  color: white;
}
</style>

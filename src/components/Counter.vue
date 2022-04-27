<template>
  <div class="words">
    <h1>{{ text }}</h1>
    <br />
    <br />
    <br />
    <div v-if="!time_set">
      Try:
      <br />
      <span class="trial">
        <a v-bind:href="'.' + trial">{{ trial }}</a>
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
        this.time_set = false;
      }
      if (diff < 0) {
        this.setTest("Please give the correct date & time.");
        this.time_set = false;
      } else {
        const out = msToFull(diff);
        this.setTest(out);
      }
    }, 1000);
  },
  beforeCreate() {
    this.time_set = true;
  },
  methods: {
    setTest(t) {
      this.text = t;
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
  font-family: "Lucida Console", "Courier New", monospace;
  background-color: grey;
  color: azure;
  border-radius: 5px;
  padding: 3px 5px 3px 5px;
}

a:link,
a:hover,
a:active,
a:visited {
  color: white;
}
</style>

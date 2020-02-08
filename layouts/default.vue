<template>
  <div style="min-height: 100%; margin-bottom: -50px;">
    <nav-bar></nav-bar>
    <nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: brutal;
  src: url(~assets/fonts/brutal/brutal.woff2);
  font-weight: bold;
}

@font-face {
  font-family: brutal;
  src: url(~assets/fonts/brutal/brutal2.woff2);
  font-weight: normal;
}

@import url("https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap");

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap");

body {
  background: #f7f7f7;
  font-family: brutal;
  margin-bottom: 60px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  font-family: "brutal", sans-serif;
}

.container {
  padding-top: 20px;
  padding-bottom: 10px;
}

.section {
  margin-bottom: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dark-btn {
  border-bottom: solid 3px #232323;
}

.section > :last-child {
  margin-bottom: 0;
}

.section-highlight {
  background-color: #77aeff0d;
  padding: 25px;
  border-radius: 6px;
}
</style>
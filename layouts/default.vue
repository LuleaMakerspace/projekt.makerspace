<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
}

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

body {
  background: #f7f7f7;
  font-family: brutal;
  margin-bottom: 60px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
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

.section > :last-child { margin-bottom: 0; }

.section-highlight {
  background-color: #77aeff0d;
  padding: 25px;
}

.bold {
  font-family: brutal !important;
}

</style>
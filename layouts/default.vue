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

<style>
@font-face {
  font-family: brutal;
  src: url(~assets/fonts/brutal/brutal.woff2);
}

@font-face {
  font-family: brutal-thin;
  src: url(~assets/fonts/brutal/brutal2.woff2);
}


body {
  background: #f9f9fa;
  font-family: brutal-thin;
  margin-bottom: 30px;
}

.container {
  padding-top: 20px;
  padding-bottom: 10px;
}

.smallHeader {
  font-family: brutal !important;
}

</style>
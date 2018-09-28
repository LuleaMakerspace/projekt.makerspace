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
body {
  background: #f9f9fa;
}

.container {
  padding-top: 20px;
  padding-bottom: 10px;
}

</style>
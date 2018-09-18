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

.container {
  padding-top: 10px;
  padding-bottom: 10px;
}

.cardlist .card {
  max-width: 548px;
  margin-left: auto;
  margin-right: auto;
}

.cardlist .card-text {
 max-height: 700px;
 overflow: hidden;
}
</style>
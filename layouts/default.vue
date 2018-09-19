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
  padding-top: 10px;
  padding-bottom: 10px;
}

.cardlist .card {
  max-width: 500px;
  border: 1px solid #d6d6d6;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.13);
  margin-bottom: 20px;

}

.cardlist .card-text {
 max-height: 700px;
 overflow: hidden;
}

.cardlist .card-img {
  border-radius: 3px 3px 0px 0px;
}
</style>
<template>
  <div class="container">
    <full-view :big="'Snabbupptäck'" :small="'Visar nya projekt, varje dag (' + dateNow + ')'" :projects="projects"></full-view>
  </div>
</template>

<script>
import FullView from "~/components/FullView.vue";
import projectService from "~/assets/services/projectService";

export default {
  components: {
    FullView
  },
  data() {
    return {
      dateNow: new Date().toLocaleDateString("sv-SV")
    }
  },
  async asyncData() {
    return {projects: projectService.shuffle(await projectService.getProjects(), new Date().toLocaleDateString("sv-SV"))}
  }
};
</script>
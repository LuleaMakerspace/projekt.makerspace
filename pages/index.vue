<template>
  <div class="container">
    <full-view :big="'Utvalda'" :small="'Uppdateras dagligen'" :projects="projects.slice(0, 3)"></full-view>
    <full-view :big="'Utforska'" :projects="projects.slice(3)"></full-view>
  </div>
</template>

<script>
import FullView from "~/components/FullView.vue";
import projectService from "~/assets/services/projectService";

export default {
  components: {
    FullView
  },
  async asyncData() {
    return {projects: projectService.shuffle(await projectService.getProjects(), new Date().toLocaleDateString("sv-SV"))}
  }
};
</script>
<template>
  <div class="container">
    <full-view :big="'Utvalda'" :small="'Uppdateras dagligen'" :projects="projects.slice(0, 4)"></full-view>
    <full-view :big="'Utforska'" :projects="projects.slice(4)"></full-view>
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
      projects: []
    }
  },
  async mounted() {
    this.projects = projectService.shuffle(await projectService.getProjects(), new Date().toLocaleDateString("sv-SV"))
  }
};
</script>
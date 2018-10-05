<template>
  <div class="container">
    <h1>Snabbupptäck</h1>
    <h4>Visar nya spel, varje dag ({{dateNow}})</h4>
    <project-list :projects="projects"></project-list>
  </div>
</template>

<script>
import ProjectList from "~/components/ProjectList.vue";
import projectService from "~/assets/services/projectService";

export default {
  components: {
    ProjectList
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
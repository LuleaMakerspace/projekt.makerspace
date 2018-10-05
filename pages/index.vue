<template>
  <div class="container">
    <h1>Snabbupptäck</h1>
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
  async asyncData() {
    return {projects: projectService.shuffle(await projectService.getProjects())}
  }
};
</script>
<template>
  <div class="container">
    <h1>Snabbupptäck</h1>
    <project-list :projects="projects"></project-list>
  </div>
</template>

<script>
import ProjectList from "~/components/ProjectList.vue";
import services from "~/assets/services/";

export default {
  components: {
    ProjectList
  },
  async asyncData() {
    return {projects: services.project.shuffle(await services.project.getProjects())}
  }
};
</script>
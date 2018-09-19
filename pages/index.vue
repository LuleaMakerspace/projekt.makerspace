<template>
  <div class="container">
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
  data() {
    return {
      projects: []
    };
  },
  async beforeMount() {
    this.projects = await services.project.getProjects()
  },
};
</script>
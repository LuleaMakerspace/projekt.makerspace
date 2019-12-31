<template>
  <div class="container">
    <div v-if="project">
        <h1>{{project.title}}</h1>
        <p>{{project.description}}</p>
    </div>
  </div>
</template>

<script>
import projectService from "~/assets/services/projectService";

export default {
  components: {},
  data() {
    return {
      project: null
    };
  },
  async mounted() {
    let projects = await projectService.getProjects()
    this.project = projects[this.$route.params.id]
  }
};
</script>
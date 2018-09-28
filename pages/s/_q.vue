<template>
  <div class="container">
    <h1>Search</h1>
    <h4>Found {{searchedProjects.length}} result(s)</h4>
    <project-list :projects="searchedProjects"></project-list>
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
    this.projects = await services.project.getProjects();
  },
  computed: {
    searchedProjects() {
      if (this.projects && this.$route.params.q) {
        return services.project.searchProjects(
          this.$route.params.q,
          this.projects
        );
      } else return [];
    }
  }
};
</script>
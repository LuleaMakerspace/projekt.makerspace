<template>
  <div class="container">
    <h1>Sök</h1>
    <h4>Hittade {{searchedProjects.length}} resultat</h4>
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
  async asyncData() {
    return {projects: await services.project.getProjects()}
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
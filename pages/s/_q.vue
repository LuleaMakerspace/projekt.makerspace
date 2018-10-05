<template>
  <div class="container">
    <full-view :big="'Sök'" :small="'Hittade ' + searchedProjects.length + ' resultat'" :projects="searchedProjects"></full-view>
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
    return {projects: await projectService.getProjects()}
  },
  computed: {
    searchedProjects() {
      if (this.projects && this.$route.params.q) {
        return projectService.searchProjects(
          this.$route.params.q,
          this.projects
        );
      } else return [];
    }
  }
};
</script>
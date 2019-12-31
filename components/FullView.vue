<template>
    <div>
        <h1>{{big}}</h1>
        <h4>{{small}}</h4>
        <project-list :projects="pagedProjects"></project-list>
        <b-pagination size="md" :total-rows="projects.length" v-model="page" :per-page="perPage" v-if="projects.length > perPage">
        </b-pagination>
    </div>
</template>

<script>
import ProjectList from "~/components/ProjectList.vue";
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  props: ["big", "small", "projects"],
  components: {
      ProjectList
  },
  data() {
      return {
          page: 1,
          perPage: 9
      }
  },
  computed: {
      pagedProjects() {
          return this.projects.slice((this.page-1) * this.perPage, (this.page-1) * this.perPage + this.perPage)
      },
      projectLenght() {
          return this.projects.lenght
      }
  }
};
</script>

<style>
</style>
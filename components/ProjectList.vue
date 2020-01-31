<template>
  <div>
    <b-row>
      <b-col v-for="(project, index) in projects" :key="index" md="12" lg="6">
        <project-card :project="projects[index]"></project-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  props: ["projects"],
  components: {
    ProjectCard
  }
};
</script>


<style>
</style>
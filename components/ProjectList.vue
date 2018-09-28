<template>
    <div>
        <div v-for="(project, index) in projects" :key="index">
            <project-card :project="projects[index]"></project-card>
        </div>
    </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
import services from "~/assets/services/";

export default {
  props: ["projects"],
  components: {
    ProjectCard
  }
};
</script>
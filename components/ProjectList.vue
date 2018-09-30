<template>
    <div>
        <b-card-group deck>
            <project-card v-for="(project, index) in projects" :key="index" :project="projects[index]"></project-card>
        </b-card-group>
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
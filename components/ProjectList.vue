<template>
    <b-container>
        <!---<b-card-group deck>--->
          <b-row style="mx-2" class="projectList">
            <b-col v-for="(project, index) in projects" :key="index" cols="6" xs="4" md="4" lg="3" class="px-1 projectCol">
              <project-card :project="projects[index]"></project-card>
            </b-col>
          </b-row>
            
        <!---</b-card-group>--->
    </b-container>
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
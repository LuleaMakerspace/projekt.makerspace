<template>
  <!---<b-card-group deck>
          <b-row style="mx-2" class="projectList">
            <b-col v-for="(project, index) in projects" :key="index" cols="12" md="4" lg="3" class="px-1 projectCol">
              <project-card :project="projects[index]"></project-card>
            </b-col>
          </b-row>
            
  </b-card-group>--->
  <!---<b-card-group columns>--->
  <!---<project-card v-for="(project, index) in projects" :key="index" :project="projects[index]"></project-card>--->
  <!---</b-card-group>--->
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
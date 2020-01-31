<template>
  <div class="horizontal-scroll-view">
    <i class="fas fa-angle-right" style="margin-right: 10px;"></i>
    <project-card v-for="(project, index) in projects" :key="project" :project="projects[index]"></project-card>
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


<style lang="scss">
.horizontal-scroll-view {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  .projectcard {
    width: calc(100% - 10px);
    max-width: 400px;
    margin-right: 30px;
    display: inline-block;
  }
}
  .horizontal-scroll-view::-webkit-scrollbar {
  width: 1em;
  height: 10px;
}
 
.horizontal-scroll-view::-webkit-scrollbar-track {
  background-color: rgba(238, 238, 238, 0.76);
  border-radius: 1px;
}
 
.horizontal-scroll-view::-webkit-scrollbar-thumb {
  background-color: #8a8a8a50;
  outline: none;
  border-radius: 1px;
}
</style>
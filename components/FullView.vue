<template>
    <div>
        <h1>{{big}}</h1>
        <h4>{{small}}</h4>
        <project-list :projects="projects"></project-list>
    </div>
</template>

<script>
import ProjectList from "~/components/ProjectList.vue";
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  props: ["big", "small", "projects"],
  components: {
      ProjectList
  }
};
</script>
<template>
  <div class="container">
    <h1>Spel, i sammarbete med Luleå Makerspace</h1>
    <div class="section section-highlight" v-if="recommended">
      <p><b>Rekommenderade spel</b></p>
      <project-list-horizontal :projects="recommended"></project-list-horizontal>
    </div>
    <div class="section section-highlight" v-if="newArrivals">
      <p><b>Nya släpp</b></p>
      <project-list-horizontal :projects="newArrivals"></project-list-horizontal>
    </div>
    <div class="section">
      <p><b>Sorterat i alfabetisk ordning</b></p>
      <project-list :projects="projects"></project-list>
    </div>
  </div>
</template>

<script>
import ProjectListHorizontal from "~/components/ProjectListHorizontal.vue";
import ProjectList from "~/components/ProjectList.vue";

import { projectCollection } from "~/plugins/firebase.js";
import { getProjects } from "~/services/projectService.js";

import { mapState } from "vuex";

export default {
  components: {
    ProjectListHorizontal,
    ProjectList
  },
  async asyncData({ error }) {
    try {
      let projects = await getProjects(projectCollection.orderBy("title", "asc"));
      let recommended = await getProjects(projectCollection.where("recommended", "==", true));
      let newArrivals = await getProjects(projectCollection.orderBy("published", "desc").limit(6));
      if (!projects) {
        throw { statusCode: 404 };
      }
      return { projects, recommended, newArrivals };
    } catch (e) {
      error(e)
    }
  }
};
</script>
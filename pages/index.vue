<template>
  <div>
    <div style="background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(252,150,120,1) 0%, rgba(247,108,127,1) 100.4% ); color: white; text-align: center;">
    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <h1>Spel, Luleå Makerspace</h1>
    </div>
    </div>
    <div class="container">
      <div class="section section-highlight" v-if="recommended">
        <p>
          <b>Rekommenderade spel</b>
        </p>
        <project-list-horizontal :projects="recommended"></project-list-horizontal>
      </div>
      <div class="section section-highlight" v-if="newArrivals">
        <p>
          <b>Nya släpp</b>
        </p>
        <project-list-horizontal :projects="newArrivals"></project-list-horizontal>
      </div>
      <div class="section">
        <p>
          <b>Sorterat i alfabetisk ordning</b>
        </p>
        <project-list :projects="projects"></project-list>
      </div>
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
      let projects = await getProjects(
        projectCollection.orderBy("title", "asc")
      );
      let recommended = await getProjects(
        projectCollection.where("recommended", "==", true)
      );
      let newArrivals = await getProjects(
        projectCollection.orderBy("published", "desc").limit(6)
      );
      if (!projects) {
        throw { statusCode: 404 };
      }
      return { projects, recommended, newArrivals };
    } catch (e) {
      error(e);
    }
  }
};
</script>
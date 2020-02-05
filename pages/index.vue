<template>
  <div>
    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <b-row>
        <b-col cols="12" lg="6" style="display: flex;
  justify-content: center;
  flex-direction: column;" class="section">
          <h1 style="font-size: 3.5em;">Lokalproducerat</h1>
          <h2>Luleå Makerspace</h2>
        </b-col>
        <b-col cols="12" lg="6" class="section-highlight" v-if="recommended.length > 0">
          <project-card :project="recommended[0]"></project-card>
          <div>
            <i class="fas fa-quote-left"></i>
            <span v-if="recommended[0].comment">{{recommended[0].comment}}</span>
            <span v-else>{{recommended[0].description}}</span>
            <i class="fas fa-quote-right"></i>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="container">
      <div class="section section-highlight" v-if="recommended">
        <p>
          <b>Rekommenderade spel ({{recommended.length - 1}})</b>
        </p>
        <project-list-horizontal :projects="recommended.slice(1)"></project-list-horizontal>
      </div>
      <div class="section section-highlight" v-if="newArrivals">
        <p>
          <b>Nya släpp ({{newArrivals.length}})</b>
        </p>
        <project-list-horizontal :projects="newArrivals"></project-list-horizontal>
      </div>
      <div class="section">
        <p>
          <b>Alla spel, sorterat i alfabetisk ordning ({{projects.length}})</b>
        </p>
        <project-list :projects="projects"></project-list>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectListHorizontal from "~/components/ProjectListHorizontal.vue";
import ProjectList from "~/components/ProjectList.vue";
import ProjectCard from "~/components/ProjectCard.vue";

import { projectCollection } from "~/plugins/firebase.js";
import { getProjects } from "~/services/projectService.js";

import { mapState } from "vuex";

export default {
  components: {
    ProjectListHorizontal,
    ProjectList,
    ProjectCard
  },
  async asyncData({ error }) {
    try {
      let projects = await getProjects(
        projectCollection.orderBy("title", "asc")
      );
      let recommended = await getProjects(
        projectCollection
          .where("recommended", "==", true)
          .orderBy("published", "desc")
          .limit(6)
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
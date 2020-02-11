<template>
  <div>
    <div class="container" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="section section-highlight">
        <b>Spelkvällar på Luleå Makerspace</b>
        <br/>
        <a href="https://www.google.com/maps/place/Lule%C3%A5+Makerspace/@65.5804582,22.1367667,17z/data=!3m1!4b1!4m5!3m4!1s0x467f65586235945d:0x57d227a863637257!8m2!3d65.5804582!4d22.1389607"><i class="fas fa-map-marker-alt"></i></a> Tisdagar 18.30 <i class="fas fa-long-arrow-alt-right"></i> 21.00
      </div>
      <b-row>
        <b-col cols="12" lg="6" style="display: flex;
  justify-content: center;
  flex-direction: column;" class="section">
          <h1 style="font-size: 3.5em;">Våra spel</h1>
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
      <div class="section">
        <p>
          <b>Spela direkt här ({{projects.length}})</b>
        </p>
        <project-list :projects="projects"></project-list>
      </div>
      <div class="section">
        <p>
          <b>Alla spel ({{allProjects.length}})</b>
        </p>
        <project-list :projects="allProjects"></project-list>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectListHorizontal from "~/components/ProjectListHorizontal.vue";
import ProjectList from "~/components/ProjectList.vue";
import ProjectCard from "~/components/ProjectCard.vue";

import { projectCollection, auth } from "~/plugins/firebase.js";
import { getProjects } from "~/services/projectService.js";

import { mapState } from "vuex";

export default {
  components: {
    ProjectListHorizontal,
    ProjectList,
    ProjectCard
  },
  async asyncData({ error }) {
    let baseQuery = projectCollection.orderBy("embed").where("embed", ">", '')
    try {
      let projects = await getProjects(
        baseQuery.orderBy("title", "asc")
      );
      let allProjects = await getProjects(projectCollection.orderBy("published", "desc"))
      let recommended = await getProjects(
        baseQuery
          .where("recommended", "==", true)
          .orderBy("published", "desc")
          .limit(6)
      );
      if (!projects) {
        throw { statusCode: 404 };
      }
      return { projects, recommended, allProjects };
    } catch (e) {
      error(e);
    }
  }
};
</script>
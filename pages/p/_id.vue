<template>
  <div class="container">
    <div v-if="project">
      <h1 style="font-family: brutal;">{{project.title}}</h1>
      <div class="info">
        <b-row>
          <b-col cols="12" md="6">
            <span class="smallHeader">Skapare</span>
            <br />
            <span>
              <horizontal-list :list="project.authors"></horizontal-list>
            </span>
          </b-col>
          <b-col cols="12" md="6">
            <span class="smallHeader">Upplagd</span>
            <br />
            <span>{{new Date(project.published.seconds*1000).toLocaleDateString("sv-SV")}}</span>
          </b-col>
        </b-row>
      </div>
      <div style="background-color: #eaf3ea" v-if="project.play" class="links">
        <a :href="project.play.download" class="button">
          <b-button variant="success" :disabled="!project.play.download">Ladda ned</b-button>
        </a>
      </div>
      <div style="text-align: center;">
        <div v-if="project.play">
          <div v-if="project.play.embed" class="playArea" style="margin-left: auto; margin-right: auto;">
            <iframe
              ref="playFrame"
              style="overflow: hidden;"
              allow="fullscreen; autoplay; encrypted-media"
              :src="project.play.embed"
              frameborder="0"
              allowfullscreen="true"
              msallowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allowpaymentrequest="false"
              referrerpolicy="unsafe-url"
              sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div>
      <span class="smallHeader">Beskrivning</span>
      <br />
      <p>{{project.description}}</p>
    </div>
  </div>
</template>

<script>
import projectService from "~/assets/services/projectService";
import { projectCollection } from "~/plugins/firebase.js";
import { getProject } from "~/services/projectService.js";
import config from "~/config.json";

import HorizontalList from "~/components/HorizontalList.vue";

export default {
  components: { HorizontalList },
  data() {
    return {
      sizeTemplate: {}
    };
  },
  head() {
    return {
      title: this.project.title
    };
  },
  async asyncData({ params, error }) {
    try {
      let project = await getProject(projectCollection.doc(params.id));
      if (!project) {
        return error({ statusCode: 404 });
      }
      return { project };
    } catch (e) {
      return error(e);
    }
  }
};
</script>

<style>
.playArea {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 513px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.playArea iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.links {
  padding: 25px;
  margin-bottom: 30px;
}
.info {
  margin-bottom: 30px;
}
</style>
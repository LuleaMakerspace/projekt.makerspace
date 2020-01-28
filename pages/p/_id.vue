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
              <authors :list="project.authors" :limit="7"></authors>
            </span>
          </b-col>
          <b-col cols="12" md="6">
            <span class="smallHeader">Upplagd</span>
            <br />
            <span>{{new Date(project.published.seconds*1000).toLocaleDateString("sv-SV")}}</span>
          </b-col>
          <b-col cols="12" md="6" v-if="project.event">
            <span class="smallHeader">Game jam/event</span>
            <br />
            <span>{{project.event}}</span>
          </b-col>
        </b-row>
      </div>
      <div class="action-area" v-if="project.download || project.extern">
        <a :href="project.download" class="button" v-if="project.download">
          <b-button
            variant="success"
            style="border-bottom: solid 3px green;"
            target="_blank"
          >Ladda ned</b-button>
        </a>
        <a :href="project.extern" class="button" v-if="project.extern" target="_blank">
          <b-button variant="warning" style="border-bottom: solid 3px #bb8a00;">Spela på annan sida</b-button>
        </a>
      </div>
      <div
        v-if="project.embed"
        class="play-area"
        style="margin-left: auto; margin-right: auto; background-color: #eee;"
      >
        <iframe
          ref="playFrame"
          style="overflow: hidden;"
          allow="fullscreen; autoplay; encrypted-media"
          :src="project.embed"
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
      <div style="margin-bottom: 30px;">
        <span class="smallHeader">Beskrivning</span>
        <br />
        <p>{{project.description}}</p>
      </div>
    </div>
    <div v-if="project.links && project.links.length > 0">
      <span class="smallHeader">Länkar</span>
      <br />
      <ul>
        <li v-for="(link, index) in project.links" :key="index">
          <a :href="project.links[index]">{{project.links[index]}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { projectCollection } from "~/plugins/firebase.js";
import { getProject } from "~/services/projectService.js";
import config from "~/config.json";

import Authors from "~/components/Authors.vue";

export default {
  components: { Authors },
  data() {
    return {
      sizeTemplate: {}
    };
  },
  head() {
    return {
      title: "LMS P - " + this.project.title
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

<style lang="scss">
.info-block {
  margin-bottom: 30px;
}

.play-area {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 513px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.play-area iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.action-area {
  padding: 25px;
  margin-bottom: 30px;
  background-color: #eaf3ea;
}
.info {
  margin-bottom: 30px;
}
</style>
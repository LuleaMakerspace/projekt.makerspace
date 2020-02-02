<template>
  <div style="margin-bottom: 20px;" class="projectcard">
      <b-row>
        <b-col cols="6" md="5" class="card-half">
          <n-link :to="'/p/' + project.id">
          <img :src="project.image" />
          </n-link>
        </b-col>
        <b-col class="title-authors card-half">
          <n-link :to="'/p/' + project.id">
          <span>{{project.title}}</span>
          </n-link>
          <br />
          <authors :list="project.authors" class="authors"></authors>
          <br />
          <n-link :to="'/p/' + project.id + '#play-options'">
          <div class="play-icons" style="margin-left: 2px;">
            <span v-if="project.embed" v-b-tooltip.hover title="Spela här">
              <i class="fas fa-play"></i>
            </span>
            <span
              v-if="project.download"
              v-b-tooltip.hover
              title="Nedladdning tillgänglig"
              style="color: #64d3f7"
            >
              <i class="fas fa-folder"></i>
            </span>
            <span
              v-if="project.extern"
              v-b-tooltip.hover
              title="Kan spelas på extern hemsida"
              style="color: #fad390"
            >
              <i class="fas fa-share"></i>
            </span>
            <span
              v-if="project.recommended"
              v-b-tooltip.hover
              title="Kvalitetsstämpel"
              style="color: #e55039"
            >
              <i class="fas fa-heart"></i>
            </span>
          </div>
            </n-link>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import Authors from "./Authors.vue";

export default {
  components: {
    Authors
  },
  props: ["project"]
};
</script>

<style lang="scss">
.projectcard {
  .card-half {
    height: 100px;
  }
  .play-icons {
    color: #71ff42;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke: 2px black;
    * {
      margin-right: 5px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit;
  }

  a:hover {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit;
  }
  .title-authors {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 10px;

    font-family: brutal;
    font-weight: bold;
    .authors {
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
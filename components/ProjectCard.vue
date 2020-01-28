<template>
  <div style="margin-bottom: 20px;" class="projectcard">
    <n-link :to="'/p/' + project.id">
      <b-row>
        <b-col cols="6" md="5" class="card-half">
          <img :src="project.image" />
          <span class="play-icons">
            <span v-if="project.download" v-b-tooltip.hover title="Kan spelas genom nedladdning av spelfiler.">
              <i class="fas fa-folder"></i>
            </span>
            <span v-if="project.embed" v-b-tooltip.hover title="Kan spelas direkt på hemsidan.">
              <i class="fas fa-play"></i>
            </span>
            <span v-if="project.extern" v-b-tooltip.hover title="Kan spelas på extern hemsida.">
              <i class="fas fa-share"></i>
            </span>
          </span>
        </b-col>
        <b-col class="title-authors card-half">
          <span>{{project.title}}</span>
          <br />
          <span class="authors">
            <authors :list="project.authors"></authors>
          </span>
        </b-col>
      </b-row>
    </n-link>
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
    position: absolute;
    color: rgba(64, 255, 0, 0.815);
    bottom: 10px;
    right: 30px;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
    transition: 0.2s ease-in-out;
    transition-property: color, transform, background-color;
    transform-origin: 20 20;
    -webkit-text-stroke: 2px black;
    * {
      margin-left: 5px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    .authors {
      color: rgba(0, 0, 0, 0.7);
      white-space: normal;
    }
  }
}
.projectcard:hover {
}
</style>
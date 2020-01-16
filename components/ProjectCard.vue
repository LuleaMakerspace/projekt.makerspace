<template>
  <div style="margin-bottom: 20px;" class="projectcard">
    <n-link :to="'/p/' + project.id">
      <b-row>
        <b-col cols="6" md="5" style="height: 100px;">
          <img :src="project.image" style="width: 100%; height: 100%; object-fit: cover;" />
          <span class="play-icons">
            <span v-if="project.download">
              <i class="fas fa-file-archive"></i>
            </span>
            <span v-if="project.embed">
              <i class="fas fa-play"></i>
            </span>
            <span v-if="project.extern">
              <i class="fas fa-external-link-square-alt"></i>
            </span>
          </span>
        </b-col>
        <b-col class="title-authors">
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
  .play-icons {
    position: absolute;
    color: rgba(62, 255, 0, 0.68);
    bottom: 10px;
    right: 30px;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.65);
    transition: 0.2s ease-in-out;
    transition-property: color, transform;
    transform-origin: 20 20;
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
    font-family: brutal;
    .authors {
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
.projectcard:hover {
  .play-icons {
    color: rgba(62, 255, 0, 1);
  }
}
</style>
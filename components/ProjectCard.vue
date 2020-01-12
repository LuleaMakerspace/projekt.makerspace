<template>
  <div style="margin-bottom: 20px;" class="projectcard">
    <n-link :to="'/p/' + project.id">
      <b-row>
        <b-col cols="6" md="5" style="height: 100px;">
          <img :src="project.image" style="width: 100%; height: 100%; object-fit: cover;" />
        </b-col>
        <b-col style="font-family: brutal;">
          <span>
            <span>
              <span v-if="project.download"><i class="fas fa-file-archive"></i></span>
              <span v-if="project.embed"><i class="fas fa-play"></i></span>
              <span v-if="project.extern"><i class="fas fa-external-link-square-alt"></i></span>
            </span>
            <span>{{project.title}}</span>
          </span>
          <br />
          <span style="color: rgba(0, 0, 0, 0.7);">
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

<style>
.projectcard a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit;
}

.projectcard a:hover {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit;
}
</style>
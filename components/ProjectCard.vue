<template>
  <!---<div class="projectcard" style="display: inline-flex">
    <n-link :to="'/p/' + project.id">
    <div class="contents">
      <div class="thumbnail">
      <img :src="project.image">
      <div class="playIcons" v-if="project.play" style="font-weight: bold;position: absolute; top: 5px; left: 10px; color: #007bff; font-size: 20px;">
        <span v-if="project.play.download">⤓</span>
        <span v-if="project.play.embed">⯈</span>
      </div>
      </div>
      <div class="description">
        <span id="title">{{project.title}}</span>
        <br />
        <span id="authors"><span v-for="author in project.authors" :key="author" class="author">{{author}}<span v-if="author != project.authors[project.authors.length - 1]">,</span></span></span>
      </div>
    </div>
    </n-link>
  </div>--->
  <div style="margin-bottom: 20px;" class="projectcard">
    <n-link :to="'/p/' + project.id">
      <b-row>
        <b-col cols="6" md="5" style="height: 100px;">
          <img :src="project.image" style="width: 100%; height: 100%; object-fit: cover;" />
        </b-col>
        <b-col style="font-family: brutal;">
          <span>
            <span v-if="project.play">
              <span v-if="project.play.download">⤓</span>
              <span v-if="project.play.embed">►</span>
            </span>
            {{project.title}}
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
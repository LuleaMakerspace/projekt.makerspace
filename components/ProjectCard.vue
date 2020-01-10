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
          <div class="playIcons" v-if="project.play" style="border-radius: 5px; background-color: #222f3e; padding: 0px 7px 0 7px; font-weight: bold;position: absolute; top: 5px; left: 20px; color: white; font-size: 20px;">
            <span v-if="project.play.download">⤓</span>
            <span v-if="project.play.embed">⯈</span>
          </div>
        </b-col>
        <b-col style="font-family: brutal;">
          <span>{{project.title}}</span>
          <br />
          <span style="color: rgba(0, 0, 0, 0.7);">
            <horizontal-list :list="project.authors"></horizontal-list>
          </span>
        </b-col>
      </b-row>
    </n-link>
  </div>
</template>

<script>
import HorizontalList from "./HorizontalList.vue";

export default {
  components: {
    HorizontalList
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
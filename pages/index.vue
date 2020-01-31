<template>
  <div class="container">
    <div class="section section-highlight" v-if="recommended">
      <p><b>Rekommenderade spel</b></p>
      <project-list-horizontal :projects="recommended"></project-list-horizontal>
    </div>
    <div class="section">
    <full-view :big="'Utforska'" :projects="projects"></full-view>
    </div>
  </div>
</template>

<script>
import FullView from "~/components/FullView.vue";
import ProjectListHorizontal from "~/components/ProjectListHorizontal.vue";
import { projectCollection } from "~/plugins/firebase.js";
import { getProjects } from "~/services/projectService.js";

import { mapState } from "vuex";

export default {
  components: {
    FullView,
    ProjectListHorizontal
  },
  async asyncData({ error }) {
    try {
      let projects = await getProjects(projectCollection.orderBy("published", "desc"));
      let recommended = await getProjects(projectCollection.where("recommended", "==", true));
      if (!projects) {
        throw { statusCode: 404 };
      }
      return { projects, recommended };
    } catch (e) {
      error(e)
    }
  }
};
</script>
<template>
  <div class="container">
    <div v-if="projects">
      <full-view :big="'Utvalda'" :small="'Uppdateras dagligen'" :projects="projects.slice(0, 4)"></full-view>
      <full-view :big="'Utforska'" :projects="projects.slice(4)"></full-view>
    </div>
  </div>
</template>

<script>
import FullView from "~/components/FullView.vue";
import projectService from "~/assets/services/projectService";
import { projectCollection } from "~/plugins/firebase.js";
import { getProjects } from "~/services/projectService.js";

import { mapState } from "vuex";

export default {
  components: {
    FullView
  },
  async asyncData({ error }) {
    try {
      let projects = await getProjects(projectCollection);
      if (!projects) {
        throw { statusCode: 404 };
      }
      return { projects };
    } catch (e) {
      error(e)
    }
  }
};
</script>
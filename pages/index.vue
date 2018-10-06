<template>
  <div class="container">
    <full-view :big="'Utvalda'" :small="'Uppdateras dagligen'" :projects="projects.slice(0, 3)"></full-view>
    <full-view :big="'Utforska'" :projects="projects.slice(3)"></full-view>
    <b-form inline name="contact" method="POST" netlify>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" />
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inlineFormInputGroupUsername2" placeholder="Username" />
      </b-input-group>
      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
      <b-button variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
import FullView from "~/components/FullView.vue";
import projectService from "~/assets/services/projectService";

export default {
  components: {
    FullView
  },
  data() {
    return {
      projects: []
    }
  },
  async mounted() {
    this.projects = projectService.shuffle(await projectService.getProjects(), new Date().toLocaleDateString("sv-SV"))
  }
};
</script>
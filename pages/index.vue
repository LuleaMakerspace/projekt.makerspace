<template>
  <div class="container">
    <full-view :big="'Utvalda'" :small="'Uppdateras dagligen'" :projects="projects.slice(0, 3)"></full-view>
    <full-view :big="'Utforska'" :projects="projects.slice(3)"></full-view>

    <b-form inline name="contact" method="POST" netlify>
      <label class="mr-sm-2" for="inlineFormCustomSelectPref">Preference</label>
      <b-form-select class="mb-2 mr-sm-2 mb-sm-0"
                     :value="null"
                     :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                     id="inlineFormCustomSelectPref">
        <option slot="first" :value="null">Choose...</option>
      </b-form-select>
      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
        Remember my preference
      </b-form-checkbox>
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
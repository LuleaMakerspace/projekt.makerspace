<template>
  <div class="container">
    <div v-if="project">
      <div
        class="section-highlight section"
        v-if="!project.embed"
        id="play-options"
      >
        <b>Spela spelet på din egen dator</b>
        <br/>
        Detta är en ombyggd version av våran spelsida gjord för att fokusera på spel som går att spela direkt i webläsaren, tänkt för uppvisnings tillfällen. Om du vill spela det här spelet så gå in på <b>projekt.luleamakerspace.se</b> på en dator där du kan ladda ner det.
      </div>
              <b v-if="project.recommended">
          <i class="fas fa-certificate"></i> Redaktörernas val
        </b>
      <h1>{{project.title}}</h1>
      <div class="section">
        <b-row>
          <b-col cols="12" md="6">
            <b>Skapare</b>
            <br />
            <authors :list="project.authors" :limit="7"></authors>
          </b-col>
          <b-col cols="12" md="6">
            <b>Upplagd</b>
            <br />
            <span>{{new Date(project.published.seconds*1000).toLocaleDateString("sv-SV")}}</span>
          </b-col>
          <b-col cols="12" md="6" v-if="project.event">
            <b>Game jam/event</b>
            <br />
            <span>{{project.event}}</span>
          </b-col>
        </b-row>
      </div>
      <div
        v-if="project.embed"
        class="play-area section"
        style="margin-left: auto; margin-right: auto; background-color: #eee;"
      >
        <iframe
          ref="playFrame"
          style="overflow: hidden;"
          allow="fullscreen; autoplay; encrypted-media"
          :src="project.embed"
          frameborder="0"
          allowfullscreen="true"
          msallowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allowpaymentrequest="false"
          referrerpolicy="unsafe-url"
          SameSite="None"
          sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups"
          scrolling="no"
        ></iframe>
      </div>
      <div class="section section-highlight" v-if="project.tutorial">
        <b>Hur man spelar</b>
        <br />
        {{project.tutorial}}
      </div>
      <div class="section">
        <b-row>
          <b-col cols="12">
            <b>Beskrivning</b>
            <br />
            <p>{{project.description}}</p>
          </b-col>
        </b-row>
      </div>
      <div class="section section-highlight" v-if="related.length > 0">
        <p>
          <b>
            <i class="fas fa-link"></i>
            Relaterat ({{related.length}})
          </b>
        </p>
        <project-list :projects="related"></project-list>
      </div>
    </div>
  </div>
</template>

<script>
import { projectCollection } from "~/plugins/firebase.js";
import { getProject, getProjects } from "~/services/projectService.js";
import ProjectList from "~/components/ProjectList.vue";
import Authors from "~/components/Authors.vue";

export default {
  components: { Authors, ProjectList },
  data() {
    return {
    };
  },
  created() {
    window.replybox = {
      site: "dqQRz5lBNp"
    };
  },
  head() {
    return {
      title: this.project.title + " | Luleå Makerspace - Projekt",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.description
        }
      ]
    };
  },
  mounted() {
    var disqus_config = function () {
    this.page.url = "/p/" + project.id;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = project.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
  (function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement("script");
    s.src = "https://lulea-makerspace-projekt.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();
  },
  async asyncData({ params, error }) {
    try {
      let project = await getProject(projectCollection.doc(params.id));
      if (!project) {
        return error({ statusCode: 404, message: "Project not found" });
      }
      let related = await getProjects(
        projectCollection
          .where("authors", "array-contains-any", project.authors)
          .limit(15)
      );

      return { project, related: related.filter(x => x.id != project.id) };
    } catch (e) {
      return error(e);
    }
  }
};
</script>

<style lang="scss">
.play-area {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 513px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.play-area iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.action-area {
  padding: 25px;
  margin-bottom: 30px;
  background-color: #eaf3ea;
}
</style>
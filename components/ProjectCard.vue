<template>
  <div class="projectcard" style="display: inline-flex">
    <div class="contents">
      <img :src="project.image" />
      <div class="description">
        <span id="title">{{project.title}}</span>
        <br />
        <span id="author">{{project.author}}</span>
      </div>
    </div>
  </div>
  <!----
    <b-card :title="project.title" :img-src="project.image" class="projectcard">
        <div slot="footer">
            <div v-for="(link, index) in project.links" :key="index">
                <small class="text-muted"><b-link :href="project.links[index]" v-if="project.links[index]">{{project.links[index]}}</b-link></small>
                <br/>
            </div>
            <small class="text-muted" v-if="project.author">av {{project.author}}</small>
        </div>
  </b-card> ---->
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style>
.projectcard {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px !important;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  hyphens: auto;
}

.projectcard img {
    min-height: 270px;
    max-height: 270px;
    width: 100%;
    object-fit: cover;
  }

  .projectcard .contents {
    min-width: 200px;
    max-width: 200px;
}

@media (min-width: 750px) {
  .projectcard img {
    min-height: 300px;
    max-height: 300px;
  }

  .projectcard .contents {
    min-width: 200px;
    max-width: 200px;
  }
}

@media (min-width: 1200px) {
    .projectcard img {
    min-height: 400px;
    max-height: 400px;
    }

    .projectcard .contents {
    min-width: 250px;
    max-width: 250px;
    }
}


.projectcard .description {
  margin-top: 4px;
  font-family: brutal;
}

.projectcard .description #author {
  color: rgba(0, 0, 0, 0.7);
}

.projectcard {
  animation: fadein 0.4s ease-in-out;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
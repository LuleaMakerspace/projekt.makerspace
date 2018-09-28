<template>
    <b-card :title="project.title" :img-src="project.image" class="projectcard">
        <p class="card-text" v-if="project.description">{{project.description}}</p>
        <div slot="footer">
            <div v-for="(link, index) in project.links" :key="index">
                <small class="text-muted"><b-link :href="project.links[index]" v-if="project.links[index]">{{project.links[index]}}</b-link></small>
                <br/>
            </div>
            <small class="text-muted" v-if="project.author">av {{project.author}}</small>
        </div>
    </b-card>
</template>

<script>
    export default {
        props: ["project"]
    }
</script>

<style>
.projectcard {
  max-width: 500px;
  border: 1px solid #d6d6d6;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.13);
  margin-bottom: 20px;

}

.projectcard .card-text {
 max-height: 700px;
 overflow: hidden;
}

.projectcard .card-img {
  border-radius: 3px 3px 0px 0px;
}


.projectcard {
    animation: fadein 0.4s ease-in-out;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
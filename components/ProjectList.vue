<template>
    <div class="cardlist">
            <b-card v-for="project in projects" :key="project" :title="project.title" :img-src="project.image">
                <p class="card-text" v-if="project.description">{{project.description}}</p>
                <div slot="footer">
                    <small class="text-muted" v-if="project.author">av {{project.author}}</small>
                    <br>
                    <small class="text-muted"><b-link :href="project.link" v-if="project.link">{{project.link}}</b-link></small>
                    <br>
                    <small class="text-muted"><b-badge variant="light" v-for="tag in project.tags" :key="tag">{{tag.toLowerCase()}}</b-badge></small>
                </div>
            </b-card>
    </div>
</template>

<script>
    export default {
        props: ["projects"]
    }
</script>
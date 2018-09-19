<template>
    <div class="cardlist">
            <b-card v-for="project in projects" :key="project" :title="project.title" :img-src="project.image">
                <p class="card-text" v-if="project.description">{{project.description}}</p>
                <div slot="footer">
                    <div v-for="link in project.links" :key="link">
                        <small class="text-muted"><b-link :href="link" v-if="link">{{link}}</b-link></small>
                        <br/>
                    </div>
                    <small class="text-muted" v-if="project.author">av {{project.author}}</small>
                </div>
            </b-card>
    </div>
</template>

<script>
    export default {
        props: ["projects"]
    }
</script>
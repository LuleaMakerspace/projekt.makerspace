<template>
    <div>
        <b-card-group columns>
            <b-card v-for="game in games" :key="game" :title="game.title" :img-src="game.image">
                <p class="card-text" v-if="game.description">{{game.description}}</p>
                <div slot="footer">
                    <small class="text-muted" v-if="game.author">av {{game.author}}</small>
                    <br>
                    <small class="text-muted"><b-link :href="game.link" v-if="game.link">{{game.link}}</b-link></small>
                    <br>
                    <small class="text-muted"><b-badge variant="light" v-for="tag in game.tags" :key="tag">{{tag.toLowerCase()}}</b-badge></small>
                </div>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    export default {
        props: ["games"]
    }
</script>
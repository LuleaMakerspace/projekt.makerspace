<template>
  <div class="container">
    <game-list :games="games"></game-list>
  </div>
</template>

<script>
import GameList from "~/components/GameList.vue";
import services from "~/assets/services/";

export default {
  components: {
    GameList
  },
  data() {
    return {
      games: []
    };
  },
  async beforeMount() {
    this.games = await services.game.getGames()
  },
};
</script>
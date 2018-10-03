<template>
    <div>
        <b-navbar toggleable="md" type="light">
        <b-navbar-brand to="/">
            <img src="https://pbs.twimg.com/profile_images/442295892305932289/u6pIlt0z.png" class="d-inline-block align-top" alt="BV" style="height: 30px; width: 30px; border-radius: 100%;">
            Luleå Makerspace Projekt
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="https://github.com/LuleaMakerspace/projekt-lista">Ladda upp</b-nav-item>
                    <b-nav-form @submit="onSearch">
                        <b-form-input size="sm" class="mr-sm-2" type="text" v-model="query" placeholder="Vad letar du efter?"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Sök</b-button>
                    </b-nav-form>
                </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            query: ""
        }
    },
    methods: {
        onSearch(evt) {
            evt.preventDefault();
            this.$router.push("/s/" + this.query)
        }
    }
}

</script>

<style>
.navbar {
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
}
.navbar-toggler {
    border: none;
    outline: 0px !important;
}
</style>
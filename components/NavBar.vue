<template>
    <div>
        <b-navbar toggleable="md" type="light">
        <b-navbar-brand to="/">
            <img src="https://pbs.twimg.com/profile_images/442295892305932289/u6pIlt0z.png" class="d-inline-block align-top" alt="BV" style="height: 30px; width: 30px; border-radius: 100%;">
            Luleå Makerspace Projekt
        </b-navbar-brand>
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
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.048);
}
.navbar-toggler {
    border: none;
    outline: 0px !important;
}
</style>
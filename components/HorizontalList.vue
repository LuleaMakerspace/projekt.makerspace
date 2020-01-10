<template>
    <div>
        <span>{{listTo}}</span>
    </div>
</template>

<script>
export default {
    props: ["list"],
    computed: {
        listTo() {
            let str = "" + this.list
            return str.replace(/\,/g, ", ")
        }
    }
}
</script>

<style>

</style>
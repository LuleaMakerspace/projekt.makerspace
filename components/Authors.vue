<template>
    <div>
        <span>{{listToString()}}</span>
    </div>
</template>

<script>
export default {
    props: {list: {type: Array}, limit: {
        type: Number,
        default: 2
    }},
    methods: {
        listToString() {
            let newArr = this.list.slice(0, this.limit)
            let str = "" + newArr
            let notShown = this.list.length - newArr.length
            return str.replace(/\,/g, ", ") + ((notShown > 0) ? " (+ " + notShown + " till)" : "")
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="">
         <el-button @click="handleLandingPage"> landing-page</el-button>
    </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
    handleLandingPage () {
      this.$router.push({
        name: 'landing-page'
      })
    }
  },
  created () {},
  mounted () {},
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style lang='scss' scoped>

</style>
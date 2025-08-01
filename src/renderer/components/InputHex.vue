<template>
  <el-input v-model="inputHex" v-bind="$attrs" />
</template>
<script>
export default {
  props: ['inputs'],
  data () {
    return {
      inputHex: this.inputs
    }
  },
  methods: {

  },
  watch: {
    inputHex () {
      this.inputHex = this.inputHex.replace(/[^0-9a-fA-F]/g,'')
      this.$emit('update:inputs', this.inputHex)
    }
  }
}
</script>
<style lang="less" scoped>

</style>




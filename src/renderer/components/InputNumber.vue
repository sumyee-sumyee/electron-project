<template>
  <el-input v-model="inputNumber" v-bind="$attrs" />
</template>
<script>
export default {
  props: ['inputs'],
  data () {
    return {
      inputNumber: this.inputs
    }
  },
  methods: {

  },
  watch: {
    inputNumber (val) {
      //console.log(val)
      this.inputNumber = val.replace(/[^0-9\-]/g, '').replace(/(?!^)-/g, '')
      this.$emit('update:inputs', this.inputNumber)
    }
  }
}
</script>
<style lang="less" scoped>

</style>




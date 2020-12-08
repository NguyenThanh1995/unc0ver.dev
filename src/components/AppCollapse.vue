<template>
  <div class="collapse">
    <slot name="prepend" :status="status" :toggle="toggle" />
    <div class="collapse-body" :style="{ height, opacity: !!height }" ref="body">
      <slot name="default" />
    </div>
    <slot name="append" :status="status" :toggle="toggle" />
  </div>
</template>
<script>
  export default {
    data: () => ({
      status: false,
      height: 0
    }),
    watch: {
      status(newVal) {
        this.height = newVal ? this.$refs.body.scrollHeight + "px" : 0
      }
    },
    methods: {
      toggle() {
        this.status = !this.status
      }
    }
  }
</script>
<style lang="scss" scoped>
  .collapse {
    width: 100%;
    position: relative;

    &-body {
      width: 100%;
      overflow: hidden;
      transition: height .5s, opacity .5s;
    }
  }
</style>
<template>
  <div class="tabs">
    <div class="tabs-item">
      <div class="pill" :style="{ left: `${value * 25}%` }"></div>
      <slot name="tabs" :click="eventClick" :value="value" />
    </div>
    <div class="tabs-inner">
      <slot name="inners" :value="value" />
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      value: 0
    }),
    methods: {
      eventClick(value) {
        this.value = value
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tabs {
    .tabs-item {
      border-radius: 8px;
      border: 2px solid $color-primary;
      cursor: pointer;
      margin: 0px auto 50px auto;
      max-width: 370px;
      padding: 5px;
      position: relative;
      display: flex;
      overflow: hidden;

      span {
        width: 25%;
        flex: 0 0 25%;
        border-right: 2px solid $color-primary;
        position: relative;

        &:last-child {
          border-right: 0;
        }
      }

      .pill {

        &:after,
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 100%;
          height: 100%;
          width: 4px;
          background-color: $color-primary;
        }

        &:before {
          right: 100%;
          left: auto;
        }

        width: 25%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: left .2s;
        background-color: $color-primary;
      }
    }
  }
</style>
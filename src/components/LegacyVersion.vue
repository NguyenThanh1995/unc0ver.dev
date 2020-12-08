<template>
  <app-collapse>
    <template #prepend="{ status, toggle }">
      <slot name="default" :status="status" :toggle="toggle" />
    </template>
    <div class="legacy-version-view">
      <ul class="list">
        <li v-for="i in 10">
          <div class="item">
            <div class="header">
              <div class="name">
                <p class="$1"> v1.0.0 </p>
                <p class="$2"> 2/2/2020 </p>
              </div>
              <button class="button"> Download </button>
            </div>
            <ul>
              <li> Fix support for removing leftover files from RootLessJB </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </app-collapse>
</template>
<script>
  import AppCollapse from "./AppCollapse"
  export default {
    components: { AppCollapse }
  }
</script>
<style lang="scss" scoped>
  .legacy-version-view {
    padding-top: 30px;

    .list {
      margin: 0;
      padding: 0;
      list-style: none;

      .item {
        color: rgba(255, 255, 255, .65);
        border-bottom: 1px solid rgba(255, 255, 255, .075);
        margin: 0 auto;
        padding: 10px 0;
        position: relative;

        &:last-child {
          border-bottom: 0;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .name {
            .\$1 {
              color: #fff;
              font-weight: 600;
              font-size: 16pt;
            }

            .\$2 {}
          }

          .button {
            padding: 8px 20px;
            margin: 0;
          }
        }

        ul {
          padding: 0 0 0 40px;
          margin: 16px 0;
          list-style-type: circle;
        }
      }
    }
  }
</style>
<template>
  <app-collapse>
    <template #prepend="{ status, toggle }">
      <slot name="default" :status="status" :toggle="toggle" />
    </template>
    <div class="legacy-version-view">
      <ul class="list">
        <li v-for="item in items">
          <div class="item">
            <div class="header">
              <div class="name">
                <p class="$1"> {{ item.name }} </p>
                <p class="$2"> {{ item.date }} </p>
              </div>
              <a :href="item.url" class="button"> Download </a>
            </div>
            <ul>
              <li v-for="log in item.changelog" v-html="log"></li>
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
    components: { AppCollapse },
    data: () => ({
      items: require("@/data/LegacyVersions.json")
    })
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
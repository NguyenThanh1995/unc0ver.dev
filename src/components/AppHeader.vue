<template>
  <u-animate-container class="navbar" :class="{ active }">
    <u-animate name="animate__bounceInDown" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false" class="inner">
      <span class="logo item">u0</span>
      <a href="#" class="item"> Download </a>
      <a href="#" class="item"> Credits </a>
      <a href="#" class="item"> tvOS </a>
      <svg width="30" height="30" viewBox="0 0 48 48" class="item mx-5px" fill="currentColor">
        <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"></path>
      </svg>
    </u-animate>
  </u-animate-container>
</template>
<script>
  export default {
    data: () => ({
      active: pageYOffset > 125
    }),
    beforeCreate() {
      window.addEventListener("scroll", this.scrollEvent = () => this.active = pageYOffset > 125)
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.scrollEvent)
    }
  }
</script>
<style lang="scss" scoped>
  .navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 5px;
    z-index: 9999;
    transition: background-color .25s;

    &.active {
      background-color: rgb(30, 30, 30);
    }

    .inner {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .logo {
        text-shadow: rgba(0, 0, 0, 0.15) 10px 10px 15px, rgba(0, 0, 0, 0.25) -10px -10px 15px;
        font-family: "Chocolate";
        font-size: 34pt;
        font-weight: 100;
        line-height: 80px;
        align-self: flex-start;

        margin: {
          left: 0;
          right: auto;
        }

        ;

        &:hover {
          transform: scale(1.1);
          text-shadow: rgba(0, 0, 0, 0.5) 10px 10px 15px, rgba(0, 0, 0, 0.25) -10px -10px 15px;
        }

        ;
      }

      .mx-5px {
        margin-left: 5px;
        //margin-right: 5px;
      }

      .item {
        &:not(.logo) {
          text-shadow: rgba(0, 0, 0, 0.55) 10px 10px 15px, rgba(0, 0, 0, 0.25) -10px -10px 15px;
        }

        text-decoration: none;
        color: $color-white;

        &:not(svg) {
          padding: {
            left: 25px;
            right: 25px;
          }

          @media (max-width: $mobile) {
            padding: {
              left: 5px;
              right: 5px;
            }
          }
        }
      }
    }
  }
</style>
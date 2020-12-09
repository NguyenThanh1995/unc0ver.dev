<template>
  <u-animate-container class="container">
    <app-header>
      <router-link to="/" class="item"> iOS </router-link>
    </app-header>
    <div class="background"></div>
    <div class="background background-blur"></div>
    <u-animate name="animate__fadeInDown" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false" id="Download">
      <h1 class="logo"> unc0ver<span>TV</span> </h1>
      <h2 class="subtitle"> Now Available for tvOS </h2>
    </u-animate>
    <u-animate name="animate__lightSpeedInLeft" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <h2 class="sub-title">
        The most advanced jail-break tool.
        <p>iOS 11.0 - 13.5</p>
      </h2>
    </u-animate>
    <u-animate name="animate__fadeIn" delay="1s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <div class="comming-soon">
        <h2 class="title"> Comming Soon </h2>
        <div class="eta">
          <p> Estimated Arrival Time: </p>
          <p class="time"> 7 days </p>
        </div>
        <p class="progress-text"> Performing Final Stability Tests (97%) </p>
        <div class="progress">
          <span></span>
        </div>
      </div>
    </u-animate>
    <u-animate name="animate__expandOut" delay="0s" duration="1.6s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <button class="button"> Download v5.3.1 </button>
    </u-animate>
    <div class="alt-store">
      <u-animate name="animate__expandOut" delay="0s" duration="1.6s" :iteration="1" :offset="0" animateClass="animate__animated">
        <button class="button"> Open in Altstore </button>
      </u-animate>
      <u-animate name="animate__pulse" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated">
        <p class="note"> Note: The latest version of AltStore must be installed to </p>
      </u-animate>
    </div>
    <p class="download-alt-store"> Download </p>
    <div class="patreon-group">
      <a href="#">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="40" height="40" fill="currentColor">
          <g>
            <g>
              <path class="st1" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 
                            1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 
                            20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 
                            89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 
                            11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 
                            9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 
                            6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
            </g>
          </g>
        </svg>
      </a>
      <a href="#">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="40" height="40" fill="currentColor">
          <g>
            <g>
              <path class="st1" d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 
                            0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 
                            194.8zM0 501.5h90v-491H0v491z" />
            </g>
          </g>
        </svg>
      </a>
    </div>
    <legacy-version>
      <template #default="{ toggle, status }">
        <u-animate name="animate__fadeUp" delay="0s" duration="2s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
          <p class="legacy-version" @click="toggle"> {{ status ? "Hide" : "View" }} last version </p>
        </u-animate>
      </template>
    </legacy-version>
    <div class="detail-app">
      <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
        <div class="about">
          <h2 class="title"> About unc0ver </h2>
          <p>
            unc0ver is a jail​break, which means that you can have the freedom to do whatever you would like to do to your iOS device. Allowing you to change what you want and operate within your purview, unc0ver unlocks the true power of your iDevice.
          </p>
        </div>
      </u-animate>
    </div>
    <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <div class="what-news">
        <h2 class="title"> What's News: </h2>
        <p v-if="!changelog">
          Loading...
        </p>
        <ul class="list" v-else>
          <!--
          <li v-for="log in changelog">
            <div class="item">
              <h2 class="title">
                {{ item.tag_name }} ~ {{ item.name }}
              </h2>
              <h3 class="subtitle">
                {{ item.published_at }} 
              </h3>
              <p> {{ item.body }} </p>
            </div>
          </li>-->
          <li>
            {{ changelog[0].body }}
          </li>
        </ul>
      </div>
    </u-animate>
    <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false" id="Credits">
      <div class="credits">
        <h2 class="title">
          Credits:
        </h2>
        <ul class="list">
          <li v-for="item in $options.credits">
            <a :href="item.url" class="item">
              <img class="avatar" :src="item.avatar" />
              <div class="info">
                <span class="name"> {{ item.name }} </span>
                <span class="type"> {{ item.type }} </span>
              </div>
              <span v-if="item.isTwitter">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" class="devSocialIcon" width=20 height=20 fill="currentColor">
                  <path class="st0" d="M300,57c-11,4.9-22.9,8.2-35.3,9.7c12.7-7.6,22.5-19.7,27.1-34.1c-11.9,7.1-25.1,12.2-39.1,14.9
                            c-11.2-12-27.2-19.4-44.9-19.4c-34,0-61.5,27.6-61.5,61.5c0,4.8,0.5,9.5,1.6,14c-51.2-2.6-96.5-27.1-126.9-64.3
                            c-5.3,9.1-8.3,19.7-8.3,30.9c0,21.4,10.9,40.2,27.4,51.2c-10.1-0.3-19.6-3.1-27.9-7.7c0,0.3,0,0.5,0,0.8c0,29.8,21.2,54.7,49.4,60.4
                            c-5.2,1.4-10.6,2.2-16.2,2.2c-4,0-7.8-0.4-11.6-1.1c7.8,24.5,30.6,42.2,57.5,42.7c-21.1,16.5-47.6,26.3-76.4,26.3
                            c-5,0-9.9-0.3-14.7-0.9c27.2,17.5,59.6,27.7,94.3,27.7c113.2,0,175.1-93.8,175.1-175.1c0-2.7-0.1-5.3-0.2-8
                            C281.3,80.1,291.7,69.3,300,57L300,57z" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
        <div class="footer">
          Site developted with <img width="1em" height="1em" :src="require('@/assets/heart.svg')" /> by <a href="#"> PINPAL </a>
          <p>
            <a href="#"> Privacy Policy </a>
            |
            <a href="#"> Contact Us </a>
          </p>
          <small> {{ iOSVersion }} </small>
        </div>
      </div>
    </u-animate>
  </u-animate-container>
</template>
<style lang="scss" scoped>
  %title-large {
    margin-bottom: 20px;
    font-size: 20pt;
    text-align: center;
    margin: 100px auto 50px 0;
  }

  .container {
    .background {
      background: {
        image: url(~@/assets/bg.png);
        position: center;
        size: cover;
      }

      filter: brightness($brightness-lighter);
      min-height: 90vh;
      min-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      &.background-blur {
        filter: blur(10px) brightness($brightness);
        height: 100%;
        z-index: -2;
      }
    }

    padding: {
      top: 30vh;
      left: (20rem / 16);
      right: (20rem / 16);
    }

    position: relative;
    width: 100%;
    color: $color-white;

    .logo {
      font-family: "Chocolate";
      font-size: 90pt;
      color: $color-white;
      text-align: center;
      word-wrap: nowrap;

      span {
        font-size: 30pt;
        font-family: "Chocolate";
      }

      @media (max-width: $mobile) {
        font-size: 80px;
        span {
          font-size: 24px;
        }
      }

      font-weight: 100;
    }

    .subtitle {
      font-size: 16pt;
      font-weight: 400;
      background-color: $color-white-15;
      border-radius: 100px;
      font-size: 15pt;
      font-weight: 600;
      max-width: 500px;
      padding: 5px 0;
      margin: -5px 10px 60px 10px;
      color: $color-white;
      text-align: center
    }

    .sub-title {
      font-size: 1rem;
      color: $color-white;
      text-align: center;

      p {
        margin: 0;
        padding: 0;
      }
    }

    .comming-soon {
      margin-bottom: (30rem / 16);
      text-align: center;

      .title {
        font-size: 16px;
        font-weight: 700;
      }


      p:not(.time) {
        margin-top: 5px;
        opacity: .65;
      }

      .eta {
        margin: 10px;

        .time {
          font-size: 24pt;
          font-weight: 700;
        }
      }

      .progress {
        background-color: $color-white-15;
        border-radius: 100px;
        margin-bottom: 60px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        overflow-y: hidden;
        width: 100%;
        height: 15.6667px;
        position: relative;

        span {
          position: absolute;
          display: block;
          left: 0;
          top: 0;
          height: 100%;
          width: 50%;
          background-color: $bg-primary;
          transition: width 1.15s ease;
          transition-delay: .5s;
        }

      }
    }

    &>>>.button {
      background-color: $bg-primary;
      border-radius: 100px;
      margin: 15px auto 60px auto;
      display: block;
      border: 0;
      outline: none;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      padding: 20px;
      transition: padding .15s ease;

      &:hover {
        padding: {
          left: 35px;
          right: 35px;
        }

        ;
      }
    }

    .alt-store {
      .button {
        background-color: $color-secpndary;
        margin: 8px auto;
        max-width: 350px;
        padding: 8px 20px;
      }

      .note {
        opacity: .65;
      }

      margin: 40px auto;
    }

    .download-alt-store {
      margin-bottom: 40px;
      color: $color-white;
      text-align: center;
    }

    .patreon-group {
      padding-bottom: 20px;
      text-align: center;

      a {
        color: $color-white;
        padding-right: 30px;

        &:last-child {
          padding-right: 0;
        }
      }
    }

    .legacy-version {
      color: $color-white-65;
      transition: opacity .15s ease;
      text-align: center;

      &:hover {
        opacity: .65;
      }
    }

    .detail-app {
      position: relative;
      margin: 100px auto 0 auto;


      .about {
        padding-bottom: 80px;
        text-align: center;

        .title {
          margin-bottom: 20px;
          font-size: 20pt;
        }

        p {
          opacity: .65;
        }
      }
    }

    .what-news {
      .title {
        @extend %title-large;
      }

      .list {
        margin: 0 15px;
        padding: 0;
        text-align: center;
      }
    }

    .credits {
      .title {
        @extend %title-large;
      }

      .list {
        margin: 0;
        padding: 0 15px;
        list-style: none;

        .item {
          color: $color-white;
          padding: 10px 0;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid $color-white-075;

          &:hover .avatar {

            filter: brightness(.3);
          }

          .avatar {
            border-radius: 50%;
            width: 70px;
            height: 70px;
            transition: filter .15s;
          }

          .info {
            vertical-align: baseline;
            padding: 10px 15px;

            .name {
              display: block;
              font-size: 14pt;
            }

            .type {
              color: $color-white-65;
              font-size: 15pt;
              display: block;
            }

            width: calc(100% - 40px)
          }
        }
      }

      .footer {
        margin: 100px 0 30px 0;
        text-align: center;
        color: $color-white-65;

        a {
          color: $color-primary;
          text-decoration: none;
        }

        p {
          margin-top: (1.2rem + 2/16);
          margin-bottom: .2rem;
        }
      }
    }
  }
</style>
<script>
  import LegacyVersion from "@/components/LegacyVersion"
  import AppCollapse from "@/components/AppCollapse"
  import AppHeader from "@/components/AppHeader"

  export default {
    credits: require("@/data/credits.json"),

    components: {
      LegacyVersion,
      AppCollapse,
      AppHeader
    },
    data: () => ({
      installation: [
        require("@/data/Installation/iOS.md"),
        require("@/data/Installation/macOS.md"),
        require("@/data/Installation/Windows.md"),
        require("@/data/Installation/Linux.md")
      ],
      changelog: null
    }),
    async beforeCreate() {
      this.changelog = await fetch("https://cors-anywhere.herokuapp.com/https://unc0ver.dev/releases.json").then(e => e.json())
    }
  }
</script>
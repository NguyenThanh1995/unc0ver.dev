<template>
  <u-animate-container class="container">
    <div class="background"></div>
    <div class="background background-blur"></div>
    <u-animate name="animate__fadeInDown" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <h1 class="logo"> unc0ver </h1>
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
      <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
        <div class="installtion">
          <h2 class="title"> Installation Guide </h2>
          <app-tabs>
            <template #tabs="{ click, value }">
              <span @click="click(0)"> iOS </span>
              <span @click="click(1)"> MacOS </span>
              <span @click="click(2)"> Window </span>
              <span @click="click(3)"> Linux </span>
            </template>
            <template #inners="{ value }">
              <div class="tab-inner" v-show="value == i - 1" v-for="item in installation" v-html="item"></div>
            </template>
          </app-tabs>
        </div>
      </u-animate>
      <div class="sections">
        <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
          <div class="item">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width=80 height=80 fill="currentColor">
              <path class="st1" d="M312.3,364c-0.4-7.2-3.6-14-8.8-19.3l-38-38c6.1-1.9,11.7-5.3,16.2-9.8l1-1c16.7-16.7,15.4-45.3-3-63.7
                        c-8.8-8.7-20.1-14-31.9-14.7c-12.3-0.7-23.6,3.4-31.8,11.7l-1,1c-4.5,4.5-7.9,10.1-9.8,16.2l-38-38c-11.2-11.2-28.7-11.9-39.1-1.5
                        l-34.4,34.4c-4.2,4.2-6,10.3-4.7,16.4c1.4,6.6,6,11.9,12.3,14.4c4,1.5,7.6,3.9,10.7,7l1.1,1.1c5.3,5.3,8.4,12,8.9,18.9
                        c0.4,6.5-1.7,12.3-5.9,16.5s-10,6.3-16.5,5.9c-6.9-0.4-13.6-3.6-18.9-8.9l-1.1-1.1c-3.1-3.1-5.5-6.7-7-10.7
                        c-2.4-6.3-7.8-10.9-14.4-12.3c-6-1.3-12.2,0.5-16.4,4.7L7.4,327.7c-10.4,10.4-9.7,27.9,1.5,39.1l38,38c-6.1,1.9-11.7,5.3-16.2,9.8
                        l-1,1c-16.7,16.7-15.4,45.3,3,63.7c9.8,9.8,22.4,14.7,34.6,14.7c10.8,0,21.3-3.9,29.1-11.7l1-1c4.5-4.5,7.9-10,9.8-16.2l38,38
                        c5.3,5.3,12.1,8.4,19.3,8.8c0.5,0,1.1,0,1.6,0c6.9,0,13.5-2.6,18.2-7.4l32.7-32.7c2.5,6.2,6.3,11.8,11.1,16.6l1.1,1.1
                        c18.4,18.4,47,19.7,63.7,3c16.7-16.7,15.4-45.3-3-63.7l-1.1-1.1c-4.9-4.9-10.4-8.6-16.6-11.1l32.8-32.8
                        C310.1,378.8,312.8,371.5,312.3,364z" />
              <g>
                <g>
                  <path class="st1" d="M490.1,229.8c-5.4-5.4-12-9.6-19.1-12.1l33.5-33.5c5.1-5.1,7.8-12.3,7.3-19.8c-0.4-7.2-3.6-14-8.8-19.3
                                l-37.2-37.2c5.3-2,10-5.1,14-9l1-1c16.7-16.7,15.4-45.3-3-63.7c-18.4-18.4-47-19.7-63.7-3l-1,1c-3.9,3.9-7,8.7-9,14L366.8,8.9
                                C355.6-2.3,338.1-3,327.7,7.4l-33.5,33.5c-2.5-7.1-6.6-13.6-12.1-19.1l-1.1-1.1c-18.4-18.4-47-19.7-63.7-3
                                c-16.7,16.7-15.4,45.3,3,63.7l1.1,1.1c5.4,5.4,12,9.6,19.1,12.1L207,128.1c-10.4,10.4-9.7,27.9,1.5,39.1l39.8,39.7
                                c5.1,5.1,12.4,7,19,5.1c6.1-1.8,10.6-6.7,12-12.9c0.8-3.9,2.7-7.3,5.4-10.1l1-1c4.2-4.2,10-6.3,16.5-5.9
                                c6.9,0.4,13.6,3.6,18.9,8.9c5.3,5.3,8.4,12,8.9,18.9c0.4,6.5-1.7,12.3-5.9,16.5l-1,1c-2.7,2.7-6.1,4.6-10.1,5.4
                                c-6.3,1.3-11.1,5.8-12.9,12c-2,6.6,0,13.9,5.1,19l39.7,39.7c5.9,5.9,13.5,8.9,20.9,8.9c6.7,0,13.2-2.4,18.2-7.4l33.5-33.5
                                c2.5,7.1,6.6,13.6,12.1,19.1l1.1,1.1c18.4,18.4,47,19.7,63.7,3c16.7-16.7,15.4-45.3-3-63.7L490.1,229.8z M480.1,280.5
                                c-8.9,8.9-24.8,7.6-35.4-3l-1.1-1.1c-3.5-3.5-6.1-7.7-7.5-12.2c-2.1-6.5-7.6-11.6-14.2-13.2c-6.2-1.5-12.5,0.2-16.9,4.6
                                l-35.2,35.2c-1.4,1.4-3.2,1.6-4.5,1.5c-2.2-0.1-4.5-1.2-6.3-3l-38-38c6.1-1.9,11.7-5.3,16.2-9.8l1-1c8.3-8.3,12.4-19.6,11.7-31.8
                                c-0.7-11.8-5.9-23.1-14.7-31.9s-20.1-14-31.9-14.7c-12.3-0.7-23.6,3.4-31.8,11.7l-1,1c-4.5,4.5-7.9,10.1-9.8,16.2l-38-38
                                c-1.8-1.8-2.9-4.1-3-6.3c-0.1-1.3,0.1-3.1,1.5-4.5l35.2-35.2c4.4-4.4,6.1-10.7,4.6-16.9c-1.6-6.7-6.6-12.1-13.2-14.2
                                c-4.5-1.5-8.7-4.1-12.2-7.5l-1.1-1.1c-10.6-10.6-11.9-26.5-3-35.4c8.9-8.9,24.8-7.6,35.4,3l1.1,1.1c3.5,3.5,6.1,7.7,7.6,12.2
                                c2.1,6.5,7.6,11.6,14.2,13.2c6.2,1.5,12.5-0.2,16.9-4.6l35.2-35.2c2.5-2.5,7.5-1.8,10.8,1.5l38.9,38.9c4.9,4.9,12,6.9,18.4,5.2
                                c6-1.6,10.6-6.1,12.2-12c0.9-3.4,2.7-6.3,5.1-8.8l1-1c8.9-8.9,24.8-7.6,35.4,3c10.6,10.6,11.9,26.5,3,35.4l-1,1
                                c-2.4,2.4-5.4,4.1-8.8,5.1c-6,1.7-10.4,6.2-12,12.2c-1.7,6.5,0.3,13.5,5.2,18.4l38.8,38.8c1.8,1.8,2.9,4.1,3,6.3
                                c0.1,1.3-0.1,3.1-1.5,4.5l-16,16l-14.1,14.1l-5,5c-4.4,4.4-6.1,10.7-4.6,16.9c1.6,6.7,6.6,12.1,13.1,14.2
                                c4.5,1.5,8.7,4.1,12.2,7.6l1.1,1.1C487.7,255.7,489,271.5,480.1,280.5z" />
                </g>
              </g>
            </svg>
            <h2>Compatible</h2>
            <p>
              unc0ver supports iOS 11.0 through to iOS 13.5.5 Beta 1 (Excluding 13.5.1)
            </p>
          </div>
        </u-animate>
        <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
          <div class="item">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width=80 height=80 fill="currentColor">
              <path class="st1" d="M473.5,138.9l0-0.4c-0.2-4.9-0.4-10.1-0.5-15.9c-0.4-28.2-22.9-51.6-51.1-53.2C363.1,66.2,317.5,47,278.6,9
                        l-0.3-0.3c-12.7-11.6-31.8-11.6-44.5,0L233.4,9C194.5,47,149,66.2,90.1,69.5C61.9,71,39.4,94.4,39,122.6c-0.1,5.8-0.2,11-0.5,15.9
                        l0,0.9c-1.1,60-2.6,134.7,22.4,202.5c13.7,37.3,34.6,69.7,61.9,96.3c31.1,30.3,71.8,54.4,121,71.6c1.6,0.6,3.3,1,5,1.4
                        c2.4,0.5,4.8,0.7,7.2,0.7c2.4,0,4.8-0.2,7.2-0.7c1.7-0.3,3.4-0.8,5-1.4c49.2-17.2,89.9-41.3,120.9-71.6
                        c27.3-26.7,48.1-59.1,61.9-96.4C476,273.9,474.6,199.1,473.5,138.9z M422.8,331.5c-26.4,71.5-80.2,120.6-164.5,150
                        c-0.3,0.1-0.6,0.2-1,0.3c-0.9,0.2-1.8,0.2-2.6,0c-0.3-0.1-0.6-0.2-0.9-0.3c-84.4-29.4-138.3-78.5-164.6-150
                        c-23-62.5-21.7-131.1-20.6-191.6l0-0.3c0.2-5.2,0.4-10.6,0.5-16.6c0.2-12.5,10.2-22.9,22.7-23.6c33.3-1.9,62.6-8.3,89.5-19.7
                        c26.9-11.4,50.7-27.4,72.9-49c1.1-1,2.6-1,3.7,0c22.2,21.6,46.1,37.6,72.9,49c26.9,11.4,56.2,17.8,89.5,19.7
                        c12.6,0.7,22.5,11.1,22.7,23.6c0.1,6,0.2,11.5,0.5,16.6C444.6,200.3,445.9,268.9,422.8,331.5z" />
              <path class="st1" d="M256,128.4c-70.4,0-127.6,57.2-127.6,127.6c0,70.4,57.2,127.6,127.6,127.6c70.4,0,127.6-57.2,127.6-127.6
                        C383.6,185.7,326.4,128.4,256,128.4z M313.9,237.6L244,307.5c-2.9,2.9-6.8,4.4-10.6,4.4s-7.7-1.5-10.6-4.4l-26.7-26.7
                        c-5.9-5.9-5.9-15.4,0-21.2c5.9-5.9,15.4-5.9,21.2,0l16.1,16.1l59.3-59.3c5.9-5.9,15.4-5.9,21.2,0
                        C319.8,222.3,319.8,231.8,313.9,237.6z" />
            </svg>
            <h2>Stable</h2>
            <p>
              Utilizing proper and deterministic techniques, jail&#8203break stability is guaranteed.
            </p>
          </div>
        </u-animate>
        <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
          <div class="item">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width=80 height=80>
              <g>
                <path d="M391.1,484.7H120.9c-19.8,0-36-16.2-36-36V263.4c0-19.8,16.2-36,36-36h270.2c19.8,0,36,16.2,36,36v185.3
                            C427.1,468.5,410.9,484.7,391.1,484.7z" />
                <path d="M148.1,227.4v-92.3c0-59.6,48.3-107.9,107.9-107.9s107.9,48.3,107.9,107.9v92.3" />
              </g>
              <g stroke="#fff">
                <circle class="lockInner" cx="256" cy="322.1" r="32.2" fill="#fff" />
                <path class="lockInner" d="M256,422.3L256,422.3c-4,0-7.3-3.3-7.3-7.3v-53.4c0-4,3.3-7.3,7.3-7.3l0,0c4,0,7.3,3.3,7.3,7.3V415
                            C263.3,419,260,422.3,256,422.3z" />
              </g>
            </svg>
            <h2>Secure</h2>
            <p>
              Utilizing native system sandbox exceptions, security remains intact while enabling access to jailbreak files.
            </p>
          </div>
        </u-animate>
      </div>
    </div>
    <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <div class="tested">
        <h2 class="title"> Extensively Tested </h2>
        <p> Unc0ver has been extensively tested to ensure it's a seamless experience on all devices. Unc0ver works on all devices on iOS versions between 11.0 and 13.5.5 Beta 1. Below you can find a list of all devices that have been specifically tested. </p>
        <app-collapse>
          <template #prepend="{ status, toggle }">
            <p class="btn-view-tested" @click="toggle"> {{ status ? "Hide" : "View" }} Devices Tested </p>
          </template>
          <ul class="list-viewer">
            <li v-for="item in $options.devicesTested">
              <div class="item">
                <span> {{ item.deviceName }} </span>
                <span> {{ item.iOSVersion }} </span>
              </div>
            </li>
          </ul>
        </app-collapse>
      </div>
    </u-animate>
    <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <div class="what-news">
        <h2 class="title"> What's News: </h2>
        <ul class="list">
          <li> Fix support for removing leftover files from RootLessJB </li>
        </ul>
      </div>
    </u-animate>
    <div class="important">
      <h2 class="title"> Important Information </h2>
      <p> unc0ver is designed to be stable and enable freedom from the moment you jail​break your device. Built-in runtime policy softener allows running code without Apple's notarization and pervasive restrictions. Proper runtime modifications to iOS kernel modify security features as necessary and result in: </p>
      <ul class="list">
        <li class="" v-for="i in 5">
          <div class="item">
            <h2 class="title">
              No Extra Security Vulnerabilities
            </h2>
            <p>
              unc0ver preserves security layers designed to protect your personal information and your iOS device by adjusting them as necessary instead of removing them. With this security adjusted on your iOS device, you can run your favorite jail​break apps and tweaks while still being protected from attackers.
            </p>
          </div>
        </li>
      </ul>
    </div>
    <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <div class="redeb">
        <h2 class="title"> Sponsored by PhoneRebel </h2>
        <img src="https://unc0ver.dev/img/phonerebel.png" />
        <h3 class="subtitle"> Phone Rebel Cases </h3>
        <p> Extreme durability, magnet utility, naked feel - The most over engineered iPhone Case. </p>
        <app-collapse>
          <ul class="list">
            <li v-for="i in 5">
              Real Armaid Fiber Weave
            </li>
          </ul>
          <button class="button"> See Redeb Case </button>
          <template #append="{ status, toggle }">
            <p class="btn-viewer-redeb" @click="toggle"> {{ status ? "Hide" : "View" }} Case Details </p>
          </template>
        </app-collapse>
      </div>
    </u-animate>
    <u-animate name="animate__fadeIn" delay="0s" duration="0.8s" :iteration="1" :offset="0" animateClass="animate__animated" :begin="false">
      <div class="credits">
        <h2 class="title">
          Credits:
        </h2>
        <ul class="list">
          <li v-for="i in 5">
            <div class="item">
              <img class="avatar" src="https://unc0ver.dev/img/twitter/pwn20wnd.jpg" />
              <div class="info">
                <span class="name"> Pwd </span>
                <span class="type"> Developer </span>
              </div>
              <span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" class="devSocialIcon" width=20 height=20 fill="currentColor">
                  <path class="st0" d="M300,57c-11,4.9-22.9,8.2-35.3,9.7c12.7-7.6,22.5-19.7,27.1-34.1c-11.9,7.1-25.1,12.2-39.1,14.9
                            c-11.2-12-27.2-19.4-44.9-19.4c-34,0-61.5,27.6-61.5,61.5c0,4.8,0.5,9.5,1.6,14c-51.2-2.6-96.5-27.1-126.9-64.3
                            c-5.3,9.1-8.3,19.7-8.3,30.9c0,21.4,10.9,40.2,27.4,51.2c-10.1-0.3-19.6-3.1-27.9-7.7c0,0.3,0,0.5,0,0.8c0,29.8,21.2,54.7,49.4,60.4
                            c-5.2,1.4-10.6,2.2-16.2,2.2c-4,0-7.8-0.4-11.6-1.1c7.8,24.5,30.6,42.2,57.5,42.7c-21.1,16.5-47.6,26.3-76.4,26.3
                            c-5,0-9.9-0.3-14.7-0.9c27.2,17.5,59.6,27.7,94.3,27.7c113.2,0,175.1-93.8,175.1-175.1c0-2.7-0.1-5.3-0.2-8
                            C281.3,80.1,291.7,69.3,300,57L300,57z" />
                </svg>
              </span>
            </div>
          </li>
        </ul>
        <div class="footer">
          Site developted with <img width="1em" height="1em" src="https://unc0ver.dev/img/heart.svg" /> by <a href="#"> PINPAL </a>
          <p>
            <a href="#"> Privacy Policy </a>
            |
            <a href="#"> Contact Us </a>
          </p>
          iOS 13.3.2
        </div>
      </div>
    </u-animate>
  </u-animate-container>
</template>
<style lang="scss" scoped>
  %title-large {
    margin-bottom: 20px;
    font-size: 32px;
    text-align: center;
    margin: 100px auto 50px 0;
  }

  .container {
    .credits {
      .title {
        @extend %title-large;
      }

      .list {
        margin: 0;
        padding: 0 15px;
        list-style: none;

        .item {
          color: rgb(255, 255, 255);
          padding: 10px 0;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, .075);

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
              color: rgba(255, 255, 255, .65);
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
        color: rgba(255, 255, 255, .65);

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
        image: url(https://unc0ver.dev/img/bg.png);
        position: center;
        size: cover;
      }

      filter: brightness(.4);
      min-height: 90vh;
      min-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      &.background-blur {
        filter: blur(10px) brightness(0.25);
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
    color: #fff;

    .logo {
      font-family: "Chocolate";
      font-size: 90pt;
      color: #fff;
      text-align: center;

      @media (max-width: $mobile) {
        font-size: 80px;
      }

      font-weight: 100;
    }

    .sub-title {
      font-size: 1rem;
      color: #fff;
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
        background-color: rgba(255, 255, 255, .15);
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
          background-color: rgb(1, 122, 255);
          transition: width 1.15s ease;
          transition-delay: .5s;
        }

      }
    }

    &>>>.button {
      background-color: rgb(1, 112, 255);
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
      color: #fff;
      text-align: center;
    }

    .patreon-group {
      padding-bottom: 20px;
      text-align: center;

      a {
        color: #fff;
        padding-right: 30px;

        &:last-child {
          padding-right: 0;
        }
      }
    }

    .legacy-version {
      color: rgba(255, 255, 255, .65);
      transition: opacity .15s ease;
      text-align: center;

      &:hover {
        opacity: .65;
      }
    }


    .redeb {
      text-align: center;

      .title {
        @extend %title-large;
      }

      img {
        height: 200px;
        display: block;
        margin: 0 auto;
      }

      .subtitle {
        font-size: 16pt;
        font-weight: 400;
        margin: 20px 0;
      }

      .btn-viewer-redeb {
        color: rgba(255, 255, 255, .65);
        padding-top: 20px;
        transition: transform .15s;

        &:hover {
          transform: scale(1.1);
        }
      }

      .list {
        margin: 20px auto;
        color: rgba(255, 255, 255, .65);
        font-size: 12pt;
        padding: 0;
        text-align: center;
        list-style: none;

        li {
          padding-left: 1em;
          padding-top: .5rem;
        }
      }

      .button {
        margin: 30px auto;
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

      .installtion {
        padding-bottom: 80px;
        text-align: center;

        .title {
          margin-bottom: 20px;
          font-size: 20pt;
        }

        .tab-inner {
          h2 {
            margin-bottom: 20px;
            margin-top: 20px;
            font-size: 16pt;
          }

          ol {
            padding-left: 40px;
            text-align: left;
          }
        }


      }

      .sections {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        box-sizing: border-box;

        .item {
          display: inline-block;
          min-width: 300px;
          padding: 30px 10px;
          text-align: center;
          padding: 30px 10px;
          width: 100%;
          position: relative;

          svg {
            margin-bottom: 20px;
          }

          h2 {
            margin-bottom: 20px;
            font-size: 20pt;
          }

          p {
            opacity: .65;
          }
        }
      }
    }

    .tested {
      .title {
        @extend %title-large;
      }

      p {
        text-align: center;
      }

      .btn-view-tested {
        color: rgba(255, 255, 255, .65);
        transition: opacity .15s;
        text-align: center;
        margin-top: 16px;

        &:hover {
          opacity: .65;
        }
      }

      .list-viewer {
        font-weight: 400;
        margin: 10px auto;
        padding: 0;
        list-style: none;

        .item {
          padding: 8px;
          border-bottom: 2px solid rgba(255, 255, 255, .15);
          display: flex;
          align-items: center;
          justify-content: space-between;

          span {
            font-weight: 700;
          }
        }

        li:last-child .item {
          border-bottom: 0;
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

    .important {
      .title {
        @extend %title-large;
      }

      p {
        opacity: .65;
        text-align: center;
      }

      .list {
        margin: 0;
        padding: 0;
        list-style: none;

        .item {
          margin-top: 2rem;

          .title {
            font-size: 16pt;
            font-weight: 400;
            margin: 5px 0;
          }
        }
      }
    }
  }
</style>
<script>
  import LegacyVersion from "@/components/LegacyVersion"
  import AppCollapse from "@/components/AppCollapse"
  import AppTabs from "@/components/AppTabs"
  import mdToHtml from "markdown-to-html-converter"
  
  export default {
    devicesTested: require("@/data/devicesTested.json"),
    components: {
      LegacyVersion,
      AppCollapse,
      AppTabs
    },
    data: () => ({
      installation: [
        mdToHtml(require("@/data/Installation/iOS.md")),
        mdToHtml(require("@/data/Installation/macOS.md")),
        mdToHtml(require("@/data/Installation/Windows.md")),
        mdToHtml(require("@/data/Installation/Linux.md"))
      ]
    })
  }
</script>
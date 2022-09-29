<script setup>
import {ref} from 'vue'

const reduce = ref(false)
</script>

<template>
  <div class="w-full pt-[40px]">

    <div class="mb-[40px]">
      <div class="container">

        <h1 class="text-[20px] md:text-[28px] mb-[20px]">Vision & Mission</h1>
        <div class="grid grid-cols-1 md:grid-cols-[500px_1fr] gap-[20px]">
          <div class="w-full md:w-[500px] h-[400px] bg-gray-300"></div>
          <div>
            <p>
              The Airport Authority Hong Kong (AA) is a statutory body wholly owned by the Hong Kong SAR Government.
              Established in 1995, the AA is responsible for the operation and development of Hong Kong International
              Airport (HKIA). The AA is governed by the Airport Authority Ordinance (Chapter 483, The Laws of Hong Kong).
            </p>
            <br>
            <ul class="list-disc ml-[20px]">
              <li>Our board comprises a Chairman, CEO and between eight to 15 other members</li>
              <li>The management team is comprised of experts from different sectors</li>
              <li>AA employs 2,900 staff in total</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-[40px] bg-[#F6F1EF] h-auto">
      <h1 class="text-[20px] md:text-[28px] text-center">Vision, Mission & Values</h1>
      <div class="container">
        <div class="flex flex-col lg:grid lg:grid-cols-3 mt-[40px] lg:mt-[150px] mb-[40px] grid__grid gap-[40px] lg:gap-0">

          <div class="w-full h-auto lg:h-[400px] flex big-box relative group cursor-pointer" @mouseover="reduce=true" @mouseleave="reduce=false">
            <div class="orbit"></div>
            <div class="relative w-[150px] h-[150px] bg-gray-300 rounded-full ball-vision m-auto">
              <span class="text-lg font-normal group-hover:hidden absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">Vision</span>
              <div class="hide w-full h-full flex flex-col justify-center items-center">
                <span class="text-lg mb-0 group-hover:mb-[10px] font-normal group-hover:font-semibold text-center">Vision</span>
                <p class="hidden-text text-center w-[90%]">
                  To strengthen HKIA as the leading international aviation hub and a key engine for the economic growth of Hong Kong.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full h-auto lg:h-[400px] flex big-box big-box-second relative cursor-pointer">
            <div class="orbit"></div>
            <div class="w-[150px] h-[150px] bg-gray-300 rounded-full ball-mission m-auto" :class="reduce?'reduce':'expand'">
              <span class="text-lg font-normal group-hover:hidden absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">Mission</span>
              <div class="group-hover:hidden w-full h-full flex flex-col justify-center items-center hide__hide">
                <span class="text-lg mb-[10px] font-normal font-semibold text-center">Mission</span>
                <p class="text-center w-[90%]">
                  To excel in the operation and development of HKIA in collaboration with our partners by
                </p>
              </div>
            </div>
          </div>

          <div class="w-full h-auto lg:h-[400px] relative flex big-box relative big-box-three cursor-pointer" @mouseover="reduce=true" @mouseleave="reduce=false">

            <div class="orbit"></div>

            <div class="relative lg:absolute w-full h-full hide__stupid">
              <div class="w-[100px] h-[100px] bg-gray-300 absolute left-[50%] top-[-50px] translate-x-[-50%]"></div>
              <div class="w-[100px] h-[100px] bg-gray-300 absolute top-[50%] translate-y-[-50%] left-[-50px]"></div>
              <div class="w-[100px] h-[100px] bg-gray-300 absolute top-[50%] translate-y-[-50%] right-[-50px]"></div>
              <div class="w-[100px] h-[100px] bg-gray-300 absolute left-[50%] bottom-[-50px] translate-x-[-50%]"></div>
            </div>

            <div class="relative w-[150px] h-[150px] bg-gray-300 rounded-full ball-vision m-auto big-box-three">
              <span class="text-lg font-normal group-hover:hidden absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">Values</span>
              <div class="hide w-full h-full flex flex-col justify-center items-center">
                <span class="text-lg mb-0 group-hover:mb-[10px] font-normal group-hover:font-semibold text-center">Values</span>
              </div>
            </div>

          </div>

          <div class="grid grid-cols-2 lg:hidden gap-4 relative top-full mobile-values">
            <div class="w-full h-[100px] bg-gray-300"></div>
            <div class="w-full h-[100px] bg-gray-300"></div>
            <div class="w-full h-[100px] bg-gray-300"></div>
            <div class="w-full h-[100px] bg-gray-300"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ball-vision,
.ball-values {
  width: 150px;
  height: 150px;
  transition: all .3s ease;
}
.big-box:hover .ball-vision {
  width: 280px;
  height: 280px;
  background: #f69f09;
}
.big-box:hover .hidden-text {
  display: block;
  opacity: 1;
}
.ball-mission {
  width: 280px;
  height: 280px;
  background: #f69f09;
  transition: all .5s ease;
}
.ball-mission > span {
  display: none;
}
.big-box:hover .ball-mission {
  width: 280px;
  height: 280px;
}
.big-box:hover .ball-values {
  width: 280px;
  height: 280px;
}
.reduce {
  width: 150px;
  height: 150px;
  background: #D1D5DB;
}
.reduce .hide__hide {
  opacity: 0;
}
.expand {
  width: 280px;
  height: 280px;
  background: #f69f09;
  z-index: 10;
}
.expand .hide__hide {
  opacity: 1;
  transition: opacity .3s ease .4s;
}
.reduce .hide__hide {
  opacity: 0;
  /*transition: opacity .3s ease .4s;*/
}

.reduce > span {
  display: block;
}
.hidden-text {
  display: none;
  opacity: 0;
}
.big-box:hover .hide {
  opacity: 1;
}
.hide {
  opacity: 0;
  transition: opacity .2s ease .4s;
}
.orbit {
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #F6E0CA;
  /*display: none;*/
  z-index: 0;
  opacity: 0;
  transition: all .3s ease;
}
.big-box:hover .orbit {
  opacity: 1;
  width: 320px;
  height: 320px;
}
.hide__stupid {
  display: none;
}
.big-box-three:hover .hide__stupid {
  display: flex;
}
.mobile-values {
  /*display: none;*/
}
.big-box-three:hover .mobile-values {
  display: grid;
}

@media screen and (max-width: 1020px) {
  .ball-vision,
  .ball-mission {
    width: 250px;
    height: 250px;
    background: #f69f09;
  }
  .hide__stupid {
    display: none !important;
  }
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
const count = ref(0)
const step = ref(1)

onMounted(() => {
  setInterval(() => {
    if (count.value < 1) {
      count.value += 1
    } else {
      count.value = 0
    }
  }, 5000)
})
</script>

<template>
  <div class="w-full relative top-[148px]">
<!--    Passengers Hero-->
    <section class="w-full h-[calc(100vh_-_88px)] 2xl:h-[calc(80vh_-_88px)] relative">
      <img src="../../assets/images/slide-1.jpg" v-if="count===0" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
      <img src="../../assets/images/slide-2.jpg" v-if="count===1" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
      <div
          class="absolute top-0 left-0 bg-primary-color opacity-70 z-10 w-full h-full"
      ></div>
      <div
          class="container h-full flex flex-col justify-start gap-2 md:gap-4 relative z-20 top-0 pt-[50px]"
      >
        <h1 class="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] font-normal text-white leading-[1]">
          Welcome to <br class="hidden md:block"> Asaba Airport
        </h1>
        <p class="text-white">Gateway to one of Nigeria’s most commercially vibrant region.</p>
        <a href="" class="flex items-center gap-2 text-[14px] text-white">
          <span>Find out more</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </a>
      </div>

      <div class="absolute left-[50%] bottom-[-20px] translate-x-[-50%] bg-secondary-color p-[10px] md:p-[20px] w-[90%] lg:w-[800px] z-20">
        <nav class="flex items-center gap-[10px] md:gap-[20px] mb-[10px] md:mb-[20px] text-[14px] font-medium">
          <span class="cursor-pointer" @click="step = 1" :class="step===1?'router-link-active':null">Arrivals</span>
          <span class="cursor-pointer" @click="step = 2" :class="step===2?'router-link-active':null">Departures</span>
          <span class="cursor-pointer" @click="step = 3" :class="step===3?'router-link-active':null">All Flights</span>
        </nav>
        <div v-if="step===1" class="grid grid-cols-1 md:grid-cols-3 gap-[5px] md:gap-[10px] items-center">
          <div class="bg-white p-[5px] h-[54px]">
            <span class="block text-[12px]">Pick a date</span>
            <input type="date" class="w-full">
          </div>
          <div class="bg-white p-[5px] flex items-center gap-2 h-[54px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" class="w-full outline-none placeholder:text-[12px]" placeholder="Search airline, flight number, or city">
          </div>
          <a href="" class="flex items-center gap-[5px] h-[54px]">
            <span>View All Arrivals</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>

        <div v-if="step===2" class="grid grid-cols-1 md:grid-cols-3 gap-[5px] md:gap-[10px] items-center">
          <div class="bg-white p-[5px] h-[54px]">
            <span class="block text-[12px]">Pick a date</span>
            <input type="date" class="w-full">
          </div>
          <div class="bg-white p-[5px] flex items-center gap-2 h-[54px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" class="w-full outline-none placeholder:text-[12px]" placeholder="Search airline, flight number, or city">
          </div>
          <a href="" class="flex items-center gap-[5px] h-[54px]">
            <span>View All Departures</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>

        <div v-if="step===3" class="grid grid-cols-1 md:grid-cols-3 gap-[5px] md:gap-[10px] items-center">
          <div class="bg-white p-[5px] h-[54px]">
            <span class="block text-[12px]">Pick a date</span>
            <input type="date" class="w-full">
          </div>
          <div class="bg-white p-[5px] flex items-center gap-2 h-[54px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" class="w-full outline-none placeholder:text-[12px]" placeholder="Search airline, flight number, or city">
          </div>
          <a href="" class="flex items-center gap-[5px] h-[54px]">
            <span>View All Flights</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </section>

<!--    A better experience-->
    <section class="w-full py-[80px]">
      <div class="container">
        <h1 class="text-primary-color text-[26px] md:text-[36px] font-medium mb-[20px] leading-[1]">A better travel experience</h1>
        <div class="w-full h-[528px] flex flex-col gap-4 justify-center px-[40px] better-experience">
          <p class="w-full md:w-[400px]">A happy journey begins with a great airport experience! Let’s make yours memorable.</p>
          <a href="" class="py-[5px] px-[20px] bg-white w-[200px] text-center text-[14px]">Find out more</a>
        </div>
        <div class="flex gap-4 h-[528px] overflow-x-auto">

          <div class="min-w-[389px] w-[389px] flex items-end relative">
            <img src="../../assets/images/covid-advisory.jpg" alt="aia" class="">
            <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
              <div class="">
                <h3 class="text-[20px] font-medium text-primary-color mb-[10px] leading-[1]">Covid-19 Travel Advisory</h3>
                <p class="text-[14px]">
                  Our aviation activities include the
                  management and development of airside
                  and landside airport infrastructure.
                  <br><br>
                </p>
              </div>
              <a href="" class="text-[14px] py-[5px] px-[20px] border border-primary-color">Find out more ></a>
            </div>
          </div>

          <div class="min-w-[389px] w-[389px] flex items-end relative">
            <img src="../../assets/images/free-wifi.jpg" alt="aia" class="">
            <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
              <div class="">
                <h3 class="text-[20px] font-medium text-primary-color mb-[10px] leading-[1]">Enjoy free Wi-Fi at the airport</h3>
                <p class="text-[14px]">
                  You can now enjoy unlimited, free, high-speed
                  Wi-Fi, across all areas of the Asaba airport.
                  <br><br>
                </p>
              </div>
              <a href="" class="text-[14px] py-[5px] px-[20px] border border-primary-color">Find out more ></a>
            </div>
          </div>

          <div class="min-w-[389px] w-[389px] flex items-end relative">
            <img src="../../assets/images/chill-out.jpg" alt="aia" class="">
            <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
              <div class="">
                <h3 class="text-[20px] font-medium text-primary-color mb-[10px] leading-[1]">Chill out before you fly</h3>
                <p class="text-[14px]">
                  Do you want to make the most of your time at
                  the airport while you wait to fly? Then opt for
                  the space and quiet of our VIP and Protocol*
                  Lounges.
                </p>
              </div>
              <a href="" class="text-[14px] py-[5px] px-[20px] border border-primary-color">Find out more ></a>
            </div>
          </div>
        </div>
      </div>
    </section>

<!--    Experience Asaba-->
    <section class="w-full">
      <div class="container">
        <h2 class="text-primary-color text-[22px] md:text-[32px] font-medium mb-[20px] leading-[1]">Experience Asaba</h2>
        <div class="w-full h-[528px] py-[50px] lg:py-[100px] px-[20px] gateway">
          <h1 class="text-[30px] md:text-[40px] text-white font-medium text-primary-color leading-[1] mb-[40px]">The gateway to the <br> South-east region</h1>
          <p class="text-white mb-[40px] w-full lg:w-1/2">
            You have arrived at the gateway to the vibrant and commercial South-East hub of
            Nigeria – Asaba, Delta State. Your experience of its culture, people and food starts
            here, within our airport lounge and interacting with our staff, before heading into
            the lively city.
          </p>
          <a href="" class="bg-secondary-color px-[20px] py-[5px]">Find out more ></a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.router-link-active {
  position: relative;
  width: min-content;
  white-space: nowrap;
}
.router-link-active:before {
  content: '';
  width: 40px;
  height: 2px;
  background: #004151;
  position: absolute;
  top: 102%;
}
.better-experience {
  background-image: url("../../assets/images/better-travel-experience21.jpg");
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
}
.gateway {
  background-image: url("../../assets/images/experience-asaba-image.jpg");
  background-position: center;
  background-size: cover;
  margin-bottom: 80px;
}
</style>
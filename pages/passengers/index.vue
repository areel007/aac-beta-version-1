<script setup>
import { ref, onMounted } from 'vue';

const count = ref(0)
const step = ref(1)

// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
// const date = ref(new Date().toLocaleDateString())
//
// onMounted(() => {
//   console.log(date.value)
//   setInterval(() => {
//     if (count.value < 1) {
//       count.value += 1
//     } else {
//       count.value = 0
//     }
//   }, 5000)
// })

useHead({
  title: 'Passengers',
  titleTemplate: (title) => `AIA - ${title}`,
  script: [
    { hid: 'js', src: '../../composable/getLocation.js', defer: true }
  ]
})
</script>

<template>
  <div class="w-full relative top-[148px] font-[300]">

<!--    Passengers Hero-->
    <section class="w-full h-[calc(80vh-120px)] md:h-[calc(100vh_-_88px)] relative">
      <img src="../../assets/images/slide-1.jpg" v-if="count===0" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
      <img src="../../assets/images/slide-2.jpg" v-if="count===1" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
      <div
          class="absolute top-0 left-0 bg-primary-color opacity-70 z-10 w-full h-full"
      ></div>
      <div
          class="container h-full flex flex-col justify-center md:justify-center gap-2 md:gap-4 relative z-20 top-0"
      >
        <h1 class="text-[40px] lg:text-[50px] xl:text-[70px] font-normal text-white leading-[1]">
          Welcome to <br class="hidden md:block"> Asaba Airport
        </h1>
        <p class="text-white text-[14px] md:text-base">Gateway to one of Nigeria’s most commercially vibrant region.</p>
        <a href="" class="flex items-center gap-1 md:gap-2 text-[12px] text-white">
          <span>Find out more</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </a>
      </div>

<!--      <div class="absolute left-[50%] bottom-[-20px] translate-x-[-50%] bg-secondary-color p-[10px] md:p-[20px] w-[90%] lg:w-[800px] z-20">-->
<!--        <nav class="flex items-center gap-[10px] md:gap-[20px] mb-[10px] md:mb-[20px] text-[14px] font-medium">-->
<!--          <span class="cursor-pointer" @click="step = 1" :class="step===1?'router-link-active':null">Arrivals</span>-->
<!--          <span class="cursor-pointer" @click="step = 2" :class="step===2?'router-link-active':null">Departures</span>-->
<!--          <span class="cursor-pointer" @click="step = 3" :class="step===3?'router-link-active':null">All Flights</span>-->
<!--        </nav>-->
<!--        <div v-if="step===1" class="grid grid-cols-1 md:grid-cols-3 gap-[5px] md:gap-[10px] items-center">-->
<!--          <div class="bg-white p-[5px] h-[54px]">-->
<!--            <span class="block text-[12px]">Pick a date</span>-->
<!--            <input type="date" class="w-full text-[14px]" :value="date" pattern="\d{4}-\d{2}-\d{2}">-->
<!--          </div>-->
<!--          <div class="bg-white p-[5px] flex items-center gap-2 h-[54px]">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />-->
<!--            </svg>-->
<!--            <input type="text" class="w-full outline-none placeholder:text-[12px]" placeholder="Search airline, flight number, or city">-->
<!--          </div>-->
<!--          <a href="" class="flex items-center gap-[5px] h-[54px]">-->
<!--            <span>View All Arrivals</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />-->
<!--            </svg>-->
<!--          </a>-->
<!--        </div>-->

<!--        <div v-if="step===2" class="grid grid-cols-1 md:grid-cols-3 gap-[5px] md:gap-[10px] items-center">-->
<!--          <div class="bg-white p-[5px] h-[54px]">-->
<!--            <span class="block text-[12px]">Pick a date</span>-->
<!--            <input type="date" class="w-full">-->
<!--          </div>-->
<!--          <div class="bg-white p-[5px] flex items-center gap-2 h-[54px]">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />-->
<!--            </svg>-->
<!--            <input type="text" class="w-full outline-none placeholder:text-[12px]" placeholder="Search airline, flight number, or city">-->
<!--          </div>-->
<!--          <a href="" class="flex items-center gap-[5px] h-[54px]">-->
<!--            <span>View All Departures</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />-->
<!--            </svg>-->
<!--          </a>-->
<!--        </div>-->

<!--        <div v-if="step===3" class="grid grid-cols-1 md:grid-cols-3 gap-[5px] md:gap-[10px] items-center">-->
<!--          <div class="bg-white p-[5px] h-[54px]">-->
<!--            <span class="block text-[12px]">Pick a date</span>-->
<!--            <input type="date" class="w-full">-->
<!--          </div>-->
<!--          <div class="bg-white p-[5px] flex items-center gap-2 h-[54px]">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />-->
<!--            </svg>-->
<!--            <input type="text" class="w-full outline-none placeholder:text-[12px]" placeholder="Search airline, flight number, or city">-->
<!--          </div>-->
<!--          <a href="" class="flex items-center gap-[5px] h-[54px]">-->
<!--            <span>View All Flights</span>-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />-->
<!--            </svg>-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->

    </section>

<!--    A better experience-->
    <section class="w-full pt-[40px] md:pt-[80px] mb-[20px]">

      <div class="container">
        <h1 class="text-primary-color text-[26px] md:text-[36px] font-normal mb-[20px] leading-[1]">A better travel experience</h1>
        <div class="w-full relative better-experience h-[528px] flex items-end md:items-center">
          <div class="bg-black opacity-60 absolute w-full h-full"></div>
<!--          <img src="../../assets/images/better-travel-experience21.jpg" alt="aia" class="w-full h-full object-cover">-->
          <div class="h-auto w-full px-[20px] md:px-[40px] py-[20px] md:py-0 change-bg relative z-10">
            <p class="w-full md:w-[400px] mb-[20px] text-primary-color md:text-white font-[300] text-base md:text-[18px]">A happy journey begins with a great airport experience! Let’s make yours memorable.</p>
            <a href="" class="font-medium py-[5px] px-[10px] bg-white border md:border-none border-primary-color text-center text-[12px] flex items-center" style="width: min-content; white-space: nowrap">
              <span class="text-primary-color">Find out more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary-color">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>

            </a>
          </div>
        </div>

      </div>
    </section>

    <Carousel />


    <section class="w-full mt-[40px] md:mt-[80px]  relative">
      <div class="parallax">
        <div class="container h-full flex items-center">
          <div class="w-full">
            <h1 class="text-[24px] md:text-[40px] text-white font-[300] text-primary-color leading-[1] mb-[8px] md:mb-5">Experience Asaba</h1>
            <p class="text-white mb-2 md:mb-5 w-full lg:w-[700px] font-[200] text-[14px] md:text-base">
              You have arrived at the gateway to the vibrant and commercial South-East hub of
              Nigeria – Asaba, Delta State. Your experience of its culture, people and food starts
              here, within our airport lounge and interacting with our staff, before heading into
              the lively city.
            </p>
            <a href="/passengers/experience-asaba" class="bg-secondary-color px-[10px] py-[5px] text-[12px] font-semibold flex items-center gap-[5px]" style="width: min-content; white-space: nowrap">
              <span>Find out more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>
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
.change-bg {
  background-color: transparent;
  margin: 0 5px 5px 5px;
}
.parallax {
  width: 100%;
  height: 60vh;
  /*min-height: 40vh;*/
  background-position: center;
  background-size: cover;
  background-image: url("../../assets/images/experience-asaba-image.jpg");
  background-attachment: fixed;
}

@media screen and (max-width: 768px) {
  .change-bg {
    background-color: white;
  }
}
</style>
<script setup>
import {ref} from 'vue'

const counter = ref(1)


</script>

<template>

  <div class="container overflow-hidden relative">


<!--    Navigation Buttons Start-->
    <div class="absolute top-[50%] translate-y-[-50%] right-0 btn-right z-10 w-[30px] h-[30px] bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-color">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </div>

    <div class="absolute top-[50%] translate-y-[-50%] btn-left z-10 w-[30px] h-[30px] bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-primary-color">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
      </svg>
    </div>

<!--    Navigation Buttons End-->

    <section class="w-full flex gap-[7.5px] h-[528px] carousel-slide">

<!--      Last card-->
      <div class="min-w-[395px] w-[395px] flex items-end relative card" id="lastClone">
        <img src="../assets/images/chill-out.jpg" alt="aia" class="w-full">
        <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
          <div class="">
            <h3 class="text-[20px] font-normal text-primary-color mb-[10px] leading-[1]">Chill out before you fly</h3>
            <p class="text-[14px]">
              Do you want to make the most of your time at
              the airport while you wait to fly? Then opt for
              the space and quiet of our VIP and Protocol*
              Lounges.
            </p>
          </div>
          <a href="" class="text-[12px] py-[5px] px-[10px] border border-primary-color font-medium">Find out more ></a>
        </div>
      </div>

      <div class="min-w-[395px] w-[395px] flex items-end relative card">

        <img src="../assets/images/covid-advisory.jpg" alt="aia" class="w-full">
        <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
          <div class="">
            <h3 class="text-[20px] font-normal text-primary-color mb-[10px] leading-[1]">Covid-19 Travel Advisory</h3>
            <p class="text-[14px]">
              Our aviation activities include the
              management and development of airside
              and landside airport infrastructure.
              <br><br>
            </p>
          </div>
          <a href="" class="text-[12px] py-[5px] px-[10px] border border-primary-color font-medium">Find out more ></a>
        </div>
      </div>

      <div class="min-w-[395px] w-[395px] flex items-end relative card">
        <img src="../assets/images/free-wifi.jpg" alt="aia" class="w-full">
        <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
          <div class="">
            <h3 class="text-[20px] font-normal text-primary-color mb-[10px] leading-[1]">Enjoy free Wi-Fi at the airport</h3>
            <p class="text-[14px]">
              You can now enjoy unlimited, free, high-speed
              Wi-Fi, across all areas of the Asaba airport.
              <br><br>
            </p>
          </div>
          <a href="" class="text-[12px] py-[5px] px-[10px] border border-primary-color font-medium">Find out more ></a>
        </div>
      </div>

      <div class="min-w-[395px] w-[395px] flex items-end relative card">
        <img src="../assets/images/chill-out.jpg" alt="aia" class="w-full">
        <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
          <div class="">
            <h3 class="text-[20px] font-normal text-primary-color mb-[10px] leading-[1]">Chill out before you fly</h3>
            <p class="text-[14px]">
              Do you want to make the most of your time at
              the airport while you wait to fly? Then opt for
              the space and quiet of our VIP and Protocol*
              Lounges.
            </p>
          </div>
          <a href="" class="text-[12px] py-[5px] px-[10px] border border-primary-color font-medium">Find out more ></a>
        </div>
      </div>

<!--      First card-->
      <div class="min-w-[395px] w-[395px] flex items-end relative card" id="firstClone">

        <img src="../assets/images/covid-advisory.jpg" alt="aia" class="w-full">
        <div class="bg-white p-[20px] absolute bottom-[4px] left-[4px] z-10 w-[90%] h-auto flex flex-col gap-[20px] items-start">
          <div class="">
            <h3 class="text-[20px] font-normal text-primary-color mb-[10px] leading-[1]">Covid-19 Travel Advisory</h3>
            <p class="text-[14px]">
              Our aviation activities include the
              management and development of airside
              and landside airport infrastructure.
              <br><br>
            </p>
          </div>
          <a href="" class="text-[12px] py-[5px] px-[10px] border border-primary-color font-medium">Find out more ></a>
        </div>
      </div>

    </section>
  </div>

</template>

<style scoped>
.btn-right,
.btn-left {
  display: none;
}

@media screen and (max-width: 1000px){
  .btn-right,
  .btn-left {
    display: flex;
  }
}
</style>
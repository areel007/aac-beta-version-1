<script setup>
const route = useRoute()
</script>

<template>
  <div class="relative top-[148px] w-full">
    <div>
      <section class="w-full relative our-business">
        <img src="../../assets/images/our-buniess-inner-banner.jpg" alt="aia" class="w-full object-cover">
      </section>

      <div class="bg-[#f5f5f5]">
        <div class="container mx-auto py-[15px] md:py-[30px] text-primary-color font-medium uppercase md:uppercase text-[10px] md:text-[12px] font-semibold">
          <div class="ml-0 lg:ml-[150px] flex items-center gap-2 md:gap-4">
            <a href="/passengers/flights/arrivals" class="cursor-pointer" :class="route.fullPath==='/passengers/flights/arrivals'?'router-link-active': null">Arrivals</a>
            <a href="/passengers/flights/departures" class="cursor-pointer" :class="route.fullPath==='/passengers/flights/departures'?'router-link-active': null">Departures</a>
            <a href="/passengers/flights/passengers-guide" class="cursor-pointer" :class="route.fullPath==='/passengers/flights/passengers-guide'?'router-link-active': null">Passengers Guide</a>
          </div>
        </div>
      </div>

    </div>
    <NuxtPage />
  </div>
</template>

<style>
.router-link-active {
  position: relative;
  width: min-content;
}
.router-link-active:before {
  position: absolute;
  left: 0;
  top: 105%;
  width: 30px;
  height: 2px;
  background: #f69f09;
}
</style>
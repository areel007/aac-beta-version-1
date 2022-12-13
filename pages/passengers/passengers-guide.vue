<template>
  <div class="relative top-[148px] w-full">
    <div>
      <section class="w-full relative our-business">
        <img src="../../assets/images/our-buniess-inner-banner.jpg" alt="aia" class="w-full object-cover">
      </section>

      <div class="bg-[#f5f5f5]">
        <div class="container mx-auto py-[15px] md:py-[30px] text-primary-color font-medium uppercase md:uppercase text-[10px] md:text-[12px] font-semibold">
          <div class="text-[10px] ml-0 lg:ml-[150px] flex items-center gap-2 md:gap-4">
            <a href="/passengers/passengers-guide" class="cursor-pointer" :class="$route.path==='/passengers/passengers-guide'?'router-link-active': null">Airport Security</a>
            <a href="/passengers/passengers-guide" class="cursor-pointer" :class="$route.path==='/passengers/passengers-guide/covid-19'?'router-link-active': null">Covid 19 Travel Advisory</a>
          </div>
        </div>
      </div>

    </div>
    <NuxtPage />
  </div>
</template>
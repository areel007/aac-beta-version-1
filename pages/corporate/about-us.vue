<script setup>

useHead({
  title: 'About Us',
  titleTemplate: (title) => `AIA - ${title}`,
})

const route = useRoute()
console.log(route.fullPath)

</script>

<template>
  <div class="w-full top-[148px] relative" id="#top">
    <section class="w-full">
      <img src="../../assets/images/our-passenger-inner-banner.jpg" alt="aia" class="w-full h-full object-cover">
    </section>
    <div class="w-full py-[15px] md:py-[30px] bg-[#f5f5f5]">
      <div class="container">
        <nav class="flex justify-between md:justify-start gap-0 md:gap-[30px] leading-[1] text-primary-color font-semibold text-[10px] md:text-[12px] uppercase ml-0 lg:ml-[150px]">
          <a href="/corporate/about-us/history" :class="route.fullPath==='/corporate/about-us/history'?'router-link-active':null">History</a>
          <a href="/corporate/about-us/vision-mission" :class="route.fullPath==='/corporate/about-us/vision-mission'?'router-link-active':null">Vision & Mission</a>
          <a href="/corporate/about-us/about-aac" :class="route.fullPath==='/corporate/about-us/about-aac'?'router-link-active':null">About AAC</a>
          <a href="/corporate/about-us/management-team" :class="route.fullPath==='/corporate/about-us/management-team'?'router-link-active':null">Leadership Team</a>
        </nav>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
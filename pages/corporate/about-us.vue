<script setup>

const route = useRoute()
console.log(route.fullPath)

</script>

<template>
  <div class="w-full top-[148px] relative">
    <section class="w-full h-[50vh] bg-primary-color"></section>
    <div class="w-full py-[20px] bg-[#f5f5f5]">
      <div class="container">
        <nav class="flex gap-4 text-primary-color font-semibold text-[12px] uppercase">
          <a href="/corporate/about-us/history" :class="route.fullPath==='/corporate/about-us/history'?'router-link-active':null">History</a>
          <a href="/corporate/about-us/about-aac" :class="route.fullPath==='/corporate/about-us/about-aac'?'router-link-active':null">About AAC</a>
          <a href="/corporate/about-us/management-team" :class="route.fullPath==='/corporate/about-us/management-team'?'router-link-active':null">Management Team</a>
        </nav>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
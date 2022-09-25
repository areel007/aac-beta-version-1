<script setup>
  import { ref, onMounted } from 'vue';
  const count = ref(0)

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
  <section
    class="py-10 lg:py-0 w-full  h-[calc(80vh-120px)] md:h-[calc(100vh_-_88px)] relative"
  >
  <img src="../assets/images/slide-1.jpg" v-if="count===0" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
  <img src="../assets/images/slide-2.jpg" v-if="count===1" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
    <div
      class="absolute top-0 left-0 bg-primary-color opacity-70 z-10 w-full h-full"
    ></div>
    <div
      class="container h-full flex flex-col justify-center items-center gap-2 md:gap-4 relative z-20"
    >
      <h1 class="text-center text-[40px] md:text-[50px] xl:text-[100px] font-normal text-white leading-[1.1]">
        Pioneer Private Airport <br class="hidden md:block"> Operator in Nigeria
      </h1>
    </div>
  </section>
</template>

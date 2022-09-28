<script setup>
import {ref} from 'vue'

defineProps({
  category: {
    type: String
  },
  question: {
    type: String
  },
  answer: {
    type: String
  },
  showAnswer: {
    type: Boolean
  }
})

// const showAnswer = ref(false)

const toggleAnswer = () => {
  $emit('show', showAnswer)
}
</script>

<template>
  <section class="py-[15px] md:py-[30px]">
    <div class="container">
      <div class="ml-0 lg:ml-[150px]">
        <div class="transition-all">
          <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">{{ category }}</span>
          <div @click="$emit('open-answer')">
            <div class="flex justify-between">
              <p class="text-gray-400 font-medium text-[16px] cursor-pointer">{{ 'question' }}</p>

              <button
                  class="w-[30px] h-[30px] bg-primary-color rounded-full flex"
              >
                <!--                  Plus-->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                <!--                  Minus-->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                </svg>


              </button>
            </div>
            <Transition name="slide-fade">
              <p v-show="showAnswer" class="text-[16px] max-w-[700px] py-[10px]">{{ answer }}</p>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
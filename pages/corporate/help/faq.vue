<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";

const showAnswer = ref(false);

const selectedCategory = ref("category");

const searchInputValue = ref('')

let faqs = ref([]);

const selectCategory = async (e) => {
  const response = await axios.get("/db/faqs-DB.json");
  if (e !== "category") {
    faqs.value = response.data.filter((_res) =>
      _res.category.toLowerCase().includes(e.toLowerCase())
    );
  } else {
    faqs.value = response.data;
  }
};

const searchFaqs = async (e) => {
  const response = await axios.get("/db/faqs-DB.json");
  if (e.trim().length >0) {
    faqs.value = response.data.filter(_res => _res.category.toLowerCase().includes(e.toLowerCase()))
  } else {
    faqs.value = response.data
  }
}

onMounted(async () => {
  const response = await axios.get("/db/faqs-DB.json");
  faqs.value = response.data;
});

useHead({
  title: "Frequently Asked Questions",
  titleTemplate: (title) => `AIA - ${title}`,
});
</script>

<template>
  <div class="relative top-[148px] font-[300]">
    <section class="w-full h-[50vh] bg-primary-color">
      <img src="" alt="aia" class="w-full h-full object-cover" />
    </section>

    <section class="w-full py-[10px] md:py-[20px] bg-[#f5f5f5]">
      <div class="container">
        <div class="ml-0 lg:ml-[150px]">
          <a
            href="/passengers"
            class="flex gap-1 items-center"
            style="width: min-content; white-space: nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-primary-color"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-primary-color"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>

            <span class="text-primary-color font-normal text-[14px]">FAQ</span>
          </a>
        </div>
      </div>
    </section>

    <section class="py-[15px] md:py-[30px]">
      <div class="container">
        <div
          class="ml-0 lg:ml-[150px] grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-[20px] w-full lg:w-[800px]"
        >

        <!-- Search FAQS -->
          <input
            type="text"
            class="w-full p-2 border border-gray-300 outline-none placeholder:text-[14px]"
            placeholder="Enter your question here to search..."
            v-model="searchInputValue"
            @keyup="searchFaqs($event.target.value)"
          />

          <!--          Select categories-->
          <select
            class="w-full p-2 border border-gray-300 outline-none placeholder:text-[14px] text-[14px]"
            v-model="selectedCategory"
            @change="selectCategory($event.target.value)"
          >
            <option value="category">Category</option>
            <option value="booking and check-in">Booking & Check-in</option>
            <option value="general enquiry">General Enquiry</option>
            <option value="parking or drop-off">Parking/Drop-off</option>
            <option value="wifi">Wi-Fi</option>
            <option value="accessibility or mobility">
              Accessibility/Mobility
            </option>
            <option value="delays or cancellation">Delays/Cancellation</option>
            <option value="bags or lost baggage">Bags/Lost Baggage</option>
          </select>

<!--          <button-->
<!--            class="w-full p-2 bg-primary-color outline-none placeholder:text-[14px] text-[14px] text-white"-->
<!--          >-->
<!--            Search-->
<!--          </button>-->
        </div>
      </div>
    </section>

    <section class="py-[15px] md:py-[30px]">
      <div class="container">
        <div class="ml-0 lg:ml-[150px]">
          <!--          Booking -->
          <div class="mb-[20px]" v-for="(_faq, index) in faqs" :key="index">
            <span
              class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block"
              >{{ _faq.category }}</span
            >

            <!--            -->
            <div
              class="mb-[10px] cursor-pointer"
              @click="_question.showAnswer = !_question.showAnswer"
              v-for="(_question, index) in _faq.questions"
              :key="index"
            >
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">
                  {{ _question.question }}
                </p>

                <button
                  class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-white m-auto"
                    v-if="!_question.showAnswer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>

                  <!--                  Minus-->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-white m-auto"
                    v-else
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                </button>
              </div>

              <Transition name="slide-fade">
                <p
                  v-show="_question.showAnswer"
                  class="text-[16px] max-w-[700px] py-[10px]"
                >
                  {{ _question.answer }}
                </p>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>

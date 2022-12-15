<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
// import { routeLocationKey } from "vue-router";

const props = defineProps({
  menu: {
    type: [Object],
  },
  passengersMenu: [Object],
  isMobileMenuOut: {
    type: Boolean,
  },
  searchResult: {
    type: Array
  },
  isSearch: {
    type: Boolean
  },
  modelValue: {
    type: String,
    default: ''
  },
  searchInputValue: {
    type: String,
  },
  showMobileSearch: {
    type: Boolean,
  }
});

const scrollPosition = ref(null);

const updateScroll = () => {
  const header = document.querySelector("header");
  if (scrollPosition.value < window.scrollY) {
    header.classList.add("going-up");
  } else {
    header.classList.remove("going-up");
  }
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

// Geolocation

const weather = ref(null);
const weatherIcon = ref(null);
const searchValue = ref(null)

const getWeatherToCelcius = computed(() => {
  if (weather.value===null) {
    return 0
  }
  return weather.value - 273.5;
});

const getImageUrl = (name) => {
  return new URL(`../assets/icons/${name}`, import.meta.url).href;
};

const getWeather = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?lat=6.204167&lon=6.665278&appid=a084881c3144d8d8bb06580901c4902e'
      )
      .then((res) => {
        weather.value = res.data.main.temp;
        weatherIcon.value = res.data.weather[0].icon;
      });
  });
};
onMounted(() => getWeather());
</script>

<template>
  <header class="w-full bg-white fixed z-[100] top-0 left-0 h-[148px]" v-if="true">
    <div
      class="h-[60px] w-full bg-gradient-to-t from-primary-color to-[#1e1e1e] relative"
    >
<!--      Search dropdown-->
      <div v-if="searchInputValue.trim().length>0" class="absolute top-[120px] md:top-full left-0 py-[20px] bg-white shadow z-[2000] w-full">
        <div class="container">
          <div class="flex justify-between items-center">

            <p v-if="searchResult.length>=5" class="text-[12px] mb-[20px]">Top 5 results for '<span class="text-secondary-color">{{ searchInputValue }}</span>'</p>
            <p v-else class="text-[12px] mb-[20px]">Search results for '<span class="text-secondary-color">{{ searchInputValue }}</span>'</p>

          </div>

<!--          Search result list -->
          <div>
            <p v-if="searchResult.length===0">No result for '{{ searchInputValue }}'</p>
            <ul v-else class="w-[90%] md:w-[600px]">
              <li class="text-[12px] md:text-[14px] mb-[20px] text-primary-color hover:text-secondary-color" v-for="(_result, index) in searchResult.slice(0, 5)" :key="index">
                <a :href="_result.path">
                  {{ _result.name }}
                </a>
              </li>
            </ul>
          </div>


        </div>
      </div>

      <div
        class="container h-full flex justify-end items-center gap-3 md:gap-8"
      >
        <!-- Search component -->
        <div>
<!--          Mobile search dropdown-->
          <div class="w-full p-[21px] h-auto bg-white fixed left-0 top-[60px] z-[1000] shadow-lg"  v-if="showMobileSearch">

            <div class="flex gap-2 items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-gray-400"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <input
                  type="text"
                  placeholder="Search & Explore"
                  :value="modelValue"
                  @input="$emit('update:modelValue', $event.target.value)"
                  @keyup="$emit('search-action', modelValue)"
                  class="bg-transparent w-full text-primary-color text-[12px] placeholder:text-[12px] placeholder:text-gray-400 outline-none"
              />

<!--              Mobile close search button -->
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 cursor-pointer"
                  @click="$emit('close-mobile-search')"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </div>

          </div>

          <div
              class="sm:flex items-center gap-2 border-b border-gray-400 pb-[2px] hidden w-auto md:w-[300px]"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-gray-400"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
                type="text"
                placeholder="Search & Explore"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                @keyup="$emit('search-action', modelValue)"
                class="bg-transparent w-full text-white text-[12px] placeholder:text-[12px] placeholder:text-gray-400 outline-none"
            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 cursor-pointer text-white"
                @click="$emit('close-search')"
                v-if="searchInputValue.trim().length>0"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </div>

          <!--          Mobile search button -->
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 block sm:hidden text-white cursor-pointer"
              @click="$emit('open-mobile-search')"
              v-if="!showMobileSearch"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>

        <!-- Weather Component -->
        <div class="weather">
          <span class="text-white text-[14px] font-semibold flex items-center gap-2"
            >{{ Math.round(getWeatherToCelcius) }}&#176;C
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-[20px] h-[20px] fill-secondary-color">
              <path
                d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
              />
            </svg>
          </span>
        </div>

        <!-- Nav -->
        <div class="h-full flex text-white text-[12px]">
          <a
            href="/"
            class="h-full flex items-center px-[8px]"
            :class="{
              'sharp-link-corporate':
                $route.fullPath[1] === 'c' || $route.fullPath === '/',
            }"
            >Corporate</a
          >
          <a
            href="/passengers"
            class="h-full flex items-center px-[8px]"
            :class="{ 'sharp-link-passengers': $route.fullPath[1] === 'p' }"
            >Passengers</a
          >
        </div>
      </div>

    </div>

    <div class="container flex justify-between h-[80px] items-center relative">
      <img
        src="../assets/images/aia-logo.svg"
        alt="aac"
        class="w-100 lg:w-150"
        @click="$router.push('/')"
      />

<!--      Nav menu-->
      <nav v-if="$route.fullPath[1] === 'c' || $route.fullPath === '/'" class="h-full hidden md:flex items-center">
        <div
            v-for="(_menu, index) in menu"
            :key="index"
            class="uppercase text-[12px] px-[20px] h-full flex items-center text-primary-color font-medium group cursor-pointer"
        >

<!--          About us-->
          <div
              v-if="_menu.menuName==='About us'"
              class="h-full h-full flex items-center"
          >
            <span class="hover:text-secondary-color">{{ _menu.menuName }}</span>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          Flights-->
          <div
              v-if="_menu.menuName==='Flights'"
              class="h-full h-full flex items-center group"
          >
            <span class="hover:text-secondary-color">{{ _menu.menuName }}</span>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          Our business-->
          <div
              v-if="_menu.menuName==='Our business'"
              class="h-full h-full flex items-center group"
          >
            <a href="/corporate/our-business" class="cursor-pointer hover:text-secondary-color">{{ _menu.menuName }}</a>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          Help -->
          <div
              v-if="_menu.menuName==='Help'"
              class="h-full h-full flex items-center group"
          >
            <a href="/corporate/our-business" class="cursor-pointer hover:text-secondary-color">{{ _menu.menuName }}</a>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          No dropdown-->
          <a
              :href="_menu.menuUrl" v-if="_menu.menuName!== 'About us' && _menu.menuName !== 'Our business' && _menu.menuName !== 'Flights' && _menu.menuName !== 'Help'"
              class="hover:text-secondary-color"
          >
            {{ _menu.menuName }}
          </a>

        </div>
      </nav>

<!--      Passenger nav-->
      <nav v-else class="h-full hidden md:flex items-center">

        <div
            class="uppercase text-[8px] sm:text-[10px] lg:text-[12px] px-[20px] h-full flex items-center text-primary-color font-medium group cursor-pointer"
            v-for="(_menu, index) in passengersMenu"
            :key="index"
        >

<!--          Flights -->
          <div
              v-if="_menu.menuName==='Flights'"
              class="h-full h-full flex items-center group"
          >
            <span class="hover:text-secondary-color">{{ _menu.menuName }}</span>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          Help -->
          <div
              v-if="_menu.menuName==='Help'"
              class="h-full h-full flex items-center group"
          >
            <span class="hover:text-secondary-color">{{ _menu.menuName }}</span>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          At the airport -->
          <div
              v-if="_menu.menuName==='At the airport'"
              class="h-full h-full flex items-center group"
          >
            <span class="hover:text-secondary-color">{{ _menu.menuName }}</span>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          Services-->
          <div
              v-if="_menu.menuName==='Services'"
              class="h-full h-full flex items-center group"
          >
            <span class="hover:text-secondary-color">{{ _menu.menuName }}</span>
            <div class="absolute top-full z-10 bg-white w-full left-0 p-[40px] font-[400] hidden group-hover:block">
              <a
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  :href="_submenu.url"
                  class="block h-[50px] hover:underline"
              >
                {{ _submenu.submenuName }}
              </a>
            </div>
          </div>

<!--          Home & Experience Asaba-->
          <a
              :href="_menu.menuUrl" v-if="_menu.menuName!== 'Flights' && _menu.menuName !== 'Help' && _menu.menuName !== 'Services' && _menu.menuName !== 'At the airport'"
              class="hover:text-secondary-color"
          >
            {{ _menu.menuName }}
          </a>

        </div>
      </nav>

<!--      Hamburger-->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 block md:hidden"
        v-if="!isMobileMenuOut"
        @click="$emit('open-mobile-menu')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>

<!--    Yellow lines-->
    <div
      class="relative h-2 w-full bg-gradient-to-r from-yellow-300 to-[#f69f09]"
    ></div>
  </header>
</template>

<style scoped>
header {
  transition: top 0.5s ease;
}
.sharp-link-corporate {
  background: #faa831;
  color: #004151;
}
.sharp-link-passengers {
  background: #faa831;
  color: #004151;
}
/*.going-up {*/
/*  top: -148px;*/
/*}*/
</style>

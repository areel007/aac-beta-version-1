<script setup>
const props = defineProps({
  menu: {
    type: [Object],
  },
  passengersMenu: {
    type: [Object],
  },
  isMobileMenuOut: {
    type: Boolean,
  },
  showSubmenuAboutUs: {
    type: Boolean,
  },
  showSubmenuOurBusiness: {
    type: Boolean,
  },
  showSubmenuFlights: {
    type: Boolean,
  },
  showSubmenuHelp: {
    type: Boolean,
  },
  showSubmenuServices: {
    type: Boolean,
  },
  showSubmenuAtTheAirport: {
    type: Boolean,
  },
  mobileSearchInputValue: {
    type: String,
  }
});
</script>

<template>
  <div
    class="w-full h-full fixed z-[100] -translate-x-full transition-transform mobile-menu-bg"
    :class="{ '-translate-x-0': isMobileMenuOut }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 absolute right-5 top-5 z-30 text-white"
      v-if="isMobileMenuOut"
      @click="$emit('close-mobile-menu')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>

<!--    Overlay -->
    <div class="absolute w-full h-full bg-primary-color opacity-80 z-20"></div>

    <div class="bg-primary-color w-10/12">

<!--      Mobile search -->
<!--      <div class="mx-4 relative z-[100]">-->

<!--        <div class="flex gap-2 items-center bg-white rounded-full p-1 mb-[5px]">-->
<!--          <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              fill="none"-->
<!--              viewBox="0 0 24 24"-->
<!--              stroke-width="1.5"-->
<!--              stroke="currentColor"-->
<!--              class="w-4 h-4"-->
<!--          >-->
<!--            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />-->
<!--          </svg>-->

<!--          <input-->
<!--              type="text"-->
<!--              class="outline-none text-[14px]"-->
<!--              placeholder="Search & Explore"-->
<!--              :value="modelValue"-->
<!--              @input="$emit('update:modelValue', $event.target.value)"-->
<!--              @keyup="$emit('search-action', modelValue)"-->
<!--          >-->
<!--        </div>-->

<!--        Mobile Search dropdown -->
<!--        <div v-if="true" class="py-[20px] bg-white">{{ mobileSearchInputValue }}</div>-->

<!--      </div>-->

      <!--    Corporate mobile menu -->
      <nav
          v-if="$route.fullPath[1] === 'c' || $route.fullPath === '/'"
          class="w-10/12 h-auto relative z-20 bg-primary-color p-4 flex flex-col gap-4 text-white"
      >
        <div v-for="(_menu, index) in menu" :key="index">
          <div v-if="_menu.menuName === 'About us'" class="">
          <span class="block relative" @click="$emit('open-about-us-submenu')"
          >{{ _menu.menuName }} ></span
          >
            <div class="flex flex-col gap-2" v-if="showSubmenuAboutUs">
              <NuxtLink
                  :to="_submenu.url"
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  @click="$emit('close-mobile-menu')"
                  class="text-sm"
              >
                {{ _submenu.submenuName }}
              </NuxtLink>
            </div>
          </div>

          <div v-if="_menu.menuName === 'Our business'" class="">
          <span
              class="block relative"
              @click="$emit('open-our-business-submenu')"
          >{{ _menu.menuName }} ></span
          >
            <div class="flex flex-col gap-2" v-if="showSubmenuOurBusiness">
              <NuxtLink
                  :to="_submenu.url"
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  @click="$emit('close-mobile-menu')"
                  class="text-sm"
              >
                {{ _submenu.submenuName }}
              </NuxtLink>
            </div>
          </div>

          <div v-if="_menu.menuName === 'Flights'" class="">
          <span
              class="block relative"
              @click="$emit('open-our-business-submenu')"
          >{{ _menu.menuName }} ></span
          >
            <div class="flex flex-col gap-2" v-if="showSubmenuOurBusiness">
              <NuxtLink
                  :to="_submenu.url"
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  @click="$emit('close-mobile-menu')"
                  class="text-sm"
              >
                {{ _submenu.submenuName }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
              :to="_menu.menuUrl"
              v-if="
            _menu.menuName !== 'About us' && _menu.menuName !== 'Our business' && _menu.menuName !== 'Flights'
          "
              @click="$emit('close-mobile-menu')"
          >{{ _menu.menuName }}</NuxtLink
          >
        </div>
      </nav>

      <!--    Passengers mobile menu -->
      <nav
          v-else
          class="w-10/12 h-auto relative z-20 bg-primary-color p-4 flex flex-col gap-4 text-white"
      >
        <div v-for="(_menu, index) in passengersMenu" :key="index">

          <!--        Flight-->
          <div v-if="_menu.menuName === 'Flights'" class="">
          <span class="block relative" @click="$emit('open-flights-submenu')"
          >{{ _menu.menuName }} ></span
          >
            <div class="flex flex-col gap-2" v-if="showSubmenuFlights">
              <NuxtLink
                  :to="_submenu.url"
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  @click="$emit('close-mobile-menu')"
                  class="text-sm"
              >
                {{ _submenu.submenuName }}
              </NuxtLink>
            </div>
          </div>

          <!--        Help -->
          <div v-if="_menu.menuName === 'Help'" class="">
          <span class="block relative" @click="$emit('open-help-submenu')"
          >{{ _menu.menuName }} ></span
          >
            <div class="flex flex-col gap-2" v-if="showSubmenuHelp">
              <NuxtLink
                  :to="_submenu.url"
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  @click="$emit('close-mobile-menu')"
                  class="text-sm"
              >
                {{ _submenu.submenuName }}
              </NuxtLink>
            </div>
          </div>

          <!--        Services -->
          <div v-if="_menu.menuName === 'Services'" class="">
          <span
              class="block relative"
              @click="$emit('open-services-submenu')"
          >{{ _menu.menuName }} ></span
          >
            <div class="flex flex-col gap-2" v-if="showSubmenuServices">
              <NuxtLink
                  :to="_submenu.url"
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  @click="$emit('close-mobile-menu')"
                  class="text-sm"
              >
                {{ _submenu.submenuName }}
              </NuxtLink>
            </div>
          </div>

          <!--        At the airport-->
          <div v-if="_menu.menuName === 'At the airport'" class="">
          <span
              class="block relative"
              @click="$emit('open-at-the-airport-submenu')"
          >{{ _menu.menuName }} ></span
          >
            <div class="flex flex-col gap-2" v-if="showSubmenuAtTheAirport">
              <NuxtLink
                  :to="_submenu.url"
                  v-for="(_submenu, index) in _menu.submenu"
                  :key="index"
                  @click="$emit('close-mobile-menu')"
                  class="text-sm"
              >
                {{ _submenu.submenuName }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
              :to="_menu.menuUrl"
              v-if="
            _menu.menuName !== 'Flights' && _menu.menuName !== 'Help' && _menu.menuName !== 'Services' && _menu.menuName !== 'At the airport'
          "
              @click="$emit('close-mobile-menu')"
          >{{ _menu.menuName }}</NuxtLink
          >
        </div>
      </nav>
    </div>

  </div>
</template>

<style scoped>
.router-link-active:before {
  width: 0;
  height: 0;
  background: none;
}

.mobile-menu-bg {
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>

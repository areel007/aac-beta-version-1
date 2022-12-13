<script setup>
import axios from "axios";
import { reactive, ref } from "vue";

const showSubmenuAboutUs = ref(false)

const showSubmenuOurBusiness = ref(false)

const showSubmenuFlights = ref(false)
const showSubmenuHelp = ref(false)
const showSubmenuServices = ref(false)
const showSubmenuAtTheAirport = ref(false)
const isSearch = ref(true)
const searchInputValue = ref('')
const mobileSearchInputValue = ref('')
let searchResult = ref([])
const showMobileSearch = ref(false)

const menu = reactive([
  {
    menuName: "Home",
    menuUrl: "/",
  },
  // {
  //   menuName: "Flights",
  //   menuUrl: "#",
  //   submenu: [
  //     {
  //       submenuName: 'Arrivals',
  //       url:'/passengers/flights/arrivals'
  //     },
  //     {
  //       submenuName: 'Departures',
  //       url:'/passengers/flights/departures'
  //     },
  //     {
  //       submenuName: 'Passengers Guide',
  //       url:'/passengers/flights/passengers-guide'
  //     },
  //   ]
  // },
  {
    menuName: "About us",
    menuUrl: "#",
    submenu: [
      {
        submenuName: 'History',
        url: '/corporate/about-us/history'
      },
      {
        submenuName: 'Vision & Mission',
        url: '/corporate/about-us/vision-mission'
      },
      {
        submenuName: 'About AAC',
        url: '/corporate/about-us/about-aac'
      },
      {
        submenuName: 'Leadership Team',
        url: '/corporate/about-us/management-team'
      },
    ]
  },
  {
    menuName: "Our business",
    menuUrl: "/corporate/our-business",
    submenu: [
      {
        submenuName: 'Aviation',
        url: '/corporate/our-business/#aviation',
      },
      {
        submenuName: 'Non-Aviation',
        url: '/corporate/our-business/#non-aviation',
      },
      {
        submenuName: 'Dedicated Services',
        url: '/corporate/our-business/#dedicated-services',
      },
      {
        submenuName: 'Advertising',
        url: '/corporate/our-business/#advertising',
      }
    ]
  },
  {
    menuName: "Help",
    menuUrl: "#",
    submenu: [
      {
        submenuName: 'Contacts',
        url:'/contacts'
      },
      {
        submenuName: 'Faq',
        url:'/faq'
      },
    ]
  },
]);

const passengersMenu = reactive([
  {
    menuName: "Home",
    menuUrl: "/passengers"
  },
  {
    menuName: "Flights",
    menuUrl: "#",
    submenu: [
      {
        submenuName: 'Arrivals',
        url:'/passengers/flights/arrivals'
      },
      {
        submenuName: 'Departures',
        url:'/passengers/flights/departures'
      },
    ]
  },
  {
    menuName: "At the airport",
    menuUrl: "#",
    submenu: [
      {
        submenuName: 'Passengers Guide',
        url:'/passengers/passengers-guide'
      },
    ]
  },
  {
    menuName: "Services",
    menuUrl: "#",
    submenu: [
      {
        submenuName: 'VIP Lounge',
        url:'/passengers/services/vip-lounge'
      },
      {
        submenuName: 'Free wifi',
        url:'/passengers/services/free-wifi'
      },
    ]
  },
  {
    menuName: "Experience Asaba",
    menuUrl: "/passengers/experience-asaba",
  },
  {
    menuName: "Help",
    menuUrl: "#",
    submenu: [
      {
        submenuName: 'Contacts',
        url:'/passengers/help/contacts'
      },
      {
        submenuName: 'Faq',
        url:'/passengers/help/faq'
      },
    ]
  },
])

const isMobileMenuOut = ref(false);

const openMobileMenu = () => (isMobileMenuOut.value = true);
const closeMobileMenu = () => {
  isMobileMenuOut.value = false
  showSubmenuAboutUs.value = false
  showSubmenuOurBusiness.value = false
}
const openAboutUsSubmenu = () => {
  showSubmenuAboutUs.value = true
  showSubmenuOurBusiness.value = false
}
const openOurBusinessSubmenu = () => {
  showSubmenuOurBusiness.value = true
  showSubmenuAboutUs.value = false
}

const openFlightsSubmenu = () => {
  showSubmenuFlights.value = true
  showSubmenuHelp.value = false
  showSubmenuServices.value = false
  showSubmenuAtTheAirport.value = false
}

const openHelpSubmenu = () => {
  showSubmenuFlights.value = false
  showSubmenuHelp.value = true
  showSubmenuServices.value = false
  showSubmenuAtTheAirport.value = false
}

const openServicesSubmenu = () => {
  showSubmenuFlights.value = false
  showSubmenuHelp.value = false
  showSubmenuServices.value = true
  showSubmenuAtTheAirport.value = false
}

const openAtTheAirportSubmenu = () => {
  showSubmenuFlights.value = false
  showSubmenuHelp.value = false
  showSubmenuServices.value = false
  showSubmenuAtTheAirport.value = true
}

//Search
const searchAction = async (e) => {
  if (e.trim().length > 0) {
    const response = await axios.get('/db/search-DB.json')
    searchResult.value = response.data.filter(_res => _res.name.toLowerCase().includes(e.toLowerCase()))
  } else {
    searchResult.value = []
  }
}

const closeSearch = () => {
  searchInputValue.value = ''
  showMobileSearch.value = false
}

const closeMobileSearch = () => {
  searchInputValue.value = ''
  showMobileSearch.value = false
}

const openMobileSearch = () => {
  showMobileSearch.value = true
}

</script>

<template>
  <div>
    <AppHeader
      :menu="menu"
      :passengers-menu="passengersMenu"
      :isMobileMenuOut="isMobileMenuOut"
      @open-mobile-menu="openMobileMenu"
      :is-search="isSearch"
      @search-action="searchAction($event)"
      v-model="searchInputValue"
      :search-input-value="searchInputValue"
      @close-search="closeSearch"
      :search-result="searchResult"
      @open-mobile-search="openMobileSearch"
      :show-mobile-search="showMobileSearch"
      @close-mobile-search="closeMobileSearch"
    />
    <MobileMenu
      :menu="menu"
      :passengers-menu="passengersMenu"
      :isMobileMenuOut="isMobileMenuOut"
      @close-mobile-menu="closeMobileMenu"
      :show-submenu-about-us="showSubmenuAboutUs"
      :show-submenu-our-business="showSubmenuOurBusiness"
      :show-submenu-flights="showSubmenuFlights"
      :show-submenu-help="showSubmenuHelp"
      :show-submenu-services="showSubmenuServices"
      :show-submenu-at-the-airport="showSubmenuAtTheAirport"
      @open-about-us-submenu="openAboutUsSubmenu"
      @open-our-business-submenu="openOurBusinessSubmenu"
      @open-flights-submenu="openFlightsSubmenu"
      @open-help-submenu="openHelpSubmenu"
      @open-services-submenu="openServicesSubmenu"
      @open-at-the-airport-submenu="openAtTheAirportSubmenu"
      v-model="mobileSearchInputValue"
      :mobile-search-input-value="mobileSearchInputValue"
    />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

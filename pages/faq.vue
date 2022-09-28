<script setup>
import {ref, reactive} from 'vue'

const showAnswer = ref(false)


const showAnswerTicket = ref(false)
const showAnswerID = ref(false)
const showAnswerGenOne = ref(false)
const showAnswerGenTwo = ref(false)
const showAnswerGenThree = ref(false)
const showAnswerGenFour = ref(false)
const showAnswerParkingOne = ref(false)
const showAnswerParkingTwo = ref(false)
const showAnswerParkingThree = ref(false)
const showAnswerWifi = ref(false)
const showAnswerMobility = ref(false)
const showAnswerDelays = ref(false)
const showAnswerLostOne = ref(false)
const showAnswerLostTwo = ref(false)

const toggleAnswerTicket = () => {
  showAnswerID.value = false
  if (showAnswerTicket.value) {
    showAnswerTicket.value = false
  } else {
    showAnswerTicket.value = true
  }
}

const toggleAnswerID = () => {
  showAnswerTicket.value = false
  if (showAnswerID.value) {
    showAnswerID.value = false
  } else {
    showAnswerID.value = true
  }
}

const toggleAnswerGenOne = () => {
  // showAnswerGenOne.value = false
  if (showAnswerGenOne.value) {
    showAnswerGenOne.value = false
  } else {
    showAnswerGenOne.value = true
  }
}

const toggleAnswerGenTwo = () => {
  // showAnswerGenTwo.value = false
  if (showAnswerGenTwo.value) {
    showAnswerGenTwo.value = false
  } else {
    showAnswerGenTwo.value = true
  }
}

const toggleAnswerGenThree = () => {
  // showAnswerGenTwo.value = false
  if (showAnswerGenThree.value) {
    showAnswerGenThree.value = false
  } else {
    showAnswerGenThree.value = true
  }
}

const toggleAnswerGenFour = () => {
  // showAnswerGenTwo.value = false
  if (showAnswerGenFour.value) {
    showAnswerGenFour.value = false
  } else {
    showAnswerGenFour.value = true
  }
}

const toggleAnswerParkingOne = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerParkingOne.value) {
    showAnswerParkingOne.value = false
  } else {
    showAnswerParkingOne.value = true
  }
}

const toggleAnswerParkingTwo = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerParkingTwo.value) {
    showAnswerParkingTwo.value = false
  } else {
    showAnswerParkingTwo.value = true
  }
}

const toggleAnswerParkingThree = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerParkingThree.value) {
    showAnswerParkingThree.value = false
  } else {
    showAnswerParkingThree.value = true
  }
}

const toggleAnswerWifi = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerWifi.value) {
    showAnswerWifi.value = false
  } else {
    showAnswerWifi.value = true
  }
}

const toggleAnswerMobility = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerMobility.value) {
    showAnswerMobility.value = false
  } else {
    showAnswerMobility.value = true
  }
}

const toggleAnswerDelays = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerDelays.value) {
    showAnswerDelays.value = false
  } else {
    showAnswerDelays.value = true
  }
}

const toggleAnswerLostOne = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerLostOne.value) {
    showAnswerLostOne.value = false
  } else {
    showAnswerLostOne.value = true
  }
}

const toggleAnswerLostTwo = () => {
  // showAnswerParkingOne.value = false
  if (showAnswerLostTwo.value) {
    showAnswerLostTwo.value = false
  } else {
    showAnswerLostTwo.value = true
  }
}

const openAnswer = () => {
  showAnswer.value = !showAnswer.value
}

useHead({
  title: 'Frequently Asked Questions',
  titleTemplate: (title) => `AIA - ${title}`,
})
</script>

<template>
  <div class="relative top-[148px] font-[300]">

    <section class="w-full h-[50vh] bg-primary-color">
      <img src="" alt="aia" class="w-full h-full object-cover">
    </section>

    <section class="w-full py-[10px] md:py-[20px] bg-[#f5f5f5]">
      <div class="container">
        <div class="ml-0 lg:ml-[150px]">
          <a href="/" class="flex gap-1 items-center" style="width: min-content; white-space: nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary-color">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-primary-color">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            <span class="text-primary-color font-normal text-[14px]">FAQ</span>
          </a>
        </div>
      </div>
    </section>

    <section class="py-[15px] md:py-[30px]">
      <div class="container">
        <div class="ml-0 lg:ml-[150px] grid grid-cols-1 md:grid-cols-[4fr_2fr_1fr] gap-[20px] w-full lg:w-[800px]">

          <input type="text" class="w-full p-2 border border-gray-300 outline-none placeholder:text-[14px]" placeholder="Enter your question here to search...">

          <select class="w-full p-2 border border-gray-300 outline-none placeholder:text-[14px] text-[14px]">
            <option value="Category">Category</option>
            <option value="Category">Booking & Check-in</option>
            <option value="Category">General Enquiry</option>
            <option value="Category">Parking/Drop-off</option>
            <option value="Category">Wi-Fi</option>
            <option value="Category">Accessibility/Mobility</option>
            <option value="Category">Delays/Cancellation</option>
            <option value="Category">Bags/Lost Baggage</option>
          </select>

          <button class="w-full p-2 bg-primary-color outline-none placeholder:text-[14px] text-[14px] text-white">Search</button>
        </div>
      </div>
    </section>

    <section class="py-[15px] md:py-[30px]">

      <div class="container">

        <div class="ml-0 lg:ml-[150px]">


<!--          Booking-->
          <div class="mb-[20px]">
            <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">Booking & Check-in </span>

<!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerTicket">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">How do I book my ticket online?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerTicket">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <p v-show="showAnswerTicket" class="text-[16px] max-w-[700px] py-[10px]">You can book your ticket by visiting the website of the airline you are flying with.</p>
              </Transition>
            </div>

<!--            Required ID-->
            <div class="cursor-pointer" @click="toggleAnswerID">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">What ID is required for check in?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerID">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>
              <Transition name="slide-fade">
                <p v-show="showAnswerID" class="text-[16px] max-w-[700px] py-[10px]">A valid photo-based identity card issued by the government, such as National Identity Card (NIN), Voters Card, and Passport, is required for domestic flights, while you’ll need your Passport and Visa for international flights. .</p>
              </Transition>
            </div>

          </div>

<!--          General Enquiries-->
          <div class="mb-[20px]">
            <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">General Enquiries </span>

<!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerGenOne">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">What states in Nigeria can I travel to from Asaba Airport?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerGenOne">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <p v-show="showAnswerGenOne" class="text-[16px] max-w-[700px] py-[10px]">Lagos, Abuja, and Kano.</p>
              </Transition>
            </div>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerGenTwo">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">What is the operating time of Asaba International Airport?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerGenTwo">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>
              <Transition name="slide-fade">
                <p v-show="showAnswerGenTwo" class="text-[16px] max-w-[700px] py-[10px]">Sunset to Sunrise with extended hours on demand.</p>
              </Transition>
            </div>

<!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerGenThree">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">What are the airlines operating at Asaba International Airport?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerGenThree">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>
              <Transition name="slide-fade">
                <p v-show="showAnswerGenThree" class="text-[16px] max-w-[700px] py-[10px]">Dana Air, Aero Contractors, Value Jet, Arik, United Nigeria, Air Peace, Overland Airways, and Max Air. </p>
              </Transition>
            </div>

<!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerGenFour">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">Are there hotels in Asaba International Airport?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerGenFour">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>
              <Transition name="slide-fade">
                <p v-show="showAnswerGenFour" class="text-[16px] max-w-[700px] py-[10px]">Yes, a resort garden is available, and planned five-star hotel as a part of the new masterplan.</p>
              </Transition>
            </div>

          </div>

<!--          Parking/Drop-off-->
          <div class="mb-[20px]">
            <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">Parking/Drop-off </span>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerParkingOne">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">What are my options for parking at Asaba International Airport?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerParkingOne">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <p v-show="showAnswerParkingOne" class="text-[16px] max-w-[700px] py-[10px]">
                  Our car parking options are long, mid, and short stay. A drop-off zone is also available for passengers and VIPs. The drop-off VIP zone area is located at the departure and arrival hall entrance of the terminal building.
                </p>
              </Transition>
            </div>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerParkingTwo">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">Can I drop someone off at Asaba Airport?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerParkingTwo">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>
              <Transition name="slide-fade">
                <p v-show="showAnswerParkingTwo" class="text-[16px] max-w-[700px] py-[10px]">Yes, with applicable Terms & Conditions of usage of our drop-off areas and parking zones.</p>
              </Transition>
            </div>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerParkingThree">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">Is there a charge for dropping passengers off?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerParkingThree">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>
              <Transition name="slide-fade">
                <p v-show="showAnswerParkingThree" class="text-[16px] max-w-[700px] py-[10px]">Yes, charges are however dependent on the size of vehicle.</p>
              </Transition>
            </div>


          </div>

<!--          Wi-Fi-->
          <div class="mb-[20px]">
            <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">Wi-Fi </span>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerWifi">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">How do I access Wi-Fi? </p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerWifi">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <div v-show="showAnswerWifi" class="text-[16px] max-w-[700px] py-[10px]">
                  <p>
                    Free Asaba International Airport’ cannot be accessed until you arrive at the airport. When you arrive, please follow the steps below to connect:
                  </p>
                  <ul>
                    <li>-	Choose 'Free Asaba International Airport Wi-Fi' from the available wireless networks.</li>
                    <li>-	A pop-up screen will appear with a sign-up form. Follow the instructions.</li>
                    <li>-	Click the button to get online.</li>
                  </ul>
                </div>
              </Transition>
            </div>


          </div>

<!--          Accessibility/Mobility-->
          <div class="mb-[20px]">
            <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">Accessibility/Mobility</span>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerMobility">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">Can I travel with my own mobility aid?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerMobility">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <p v-show="showAnswerMobility" class="text-[16px] max-w-[700px] py-[10px]">
                  You are welcome to travel with your own mobility equipment, such as wheelchairs. However, we advise you inform your airline in advance.
                </p>
              </Transition>
            </div>


          </div>

<!--          Delays/Cancellation-->
          <div class="mb-[20px]">
            <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">Delays/Cancellation</span>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerDelays">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">What happens if my flight is delayed or cancelled? </p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerDelays">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <p v-show="showAnswerDelays" class="text-[16px] max-w-[700px] py-[10px]">
                  In the event of severe delays or flight cancellations, please contact your airline directly.
                </p>
              </Transition>
            </div>


          </div>

<!--          Bags/Lost Baggage -->
          <div class="mb-[20px]">
            <span class="text-primary-color font-medium uppercase text-[14px] mb-[20px] block">Bags/Lost Baggage </span>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerLostOne">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">I’ve lost something at the airport, how do I get it back?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerLostOne">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <p v-show="showAnswerLostOne" class="text-[16px] max-w-[700px] py-[10px]">
                  If you have lost your baggage, or items while on an aircraft or airline bus, contact your airline directly.
                </p>
              </Transition>
            </div>

            <!--            -->
            <div class="mb-[10px] cursor-pointer" @click="toggleAnswerLostTwo">
              <div class="grid grid-cols-[1fr_40px]">
                <p class="text-gray-400 font-medium text-[16px]">How many bags am I allowed?</p>

                <button
                    class="w-[30px] h-[30px] bg-primary-color rounded-full flex justify-self-end"
                >
                  <!--                  Plus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-if="!showAnswerLostTwo">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                  <!--                  Minus-->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white m-auto" v-else>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                  </svg>

                </button>
              </div>

              <Transition name="slide-fade">
                <p v-show="showAnswerLostTwo" class="text-[16px] max-w-[700px] py-[10px]">
                  Please check with your airline or on your ticket for their on-board baggage rules.
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
<script setup>
useHead({
  title: 'Our Business',
  titleTemplate: (title) => `AIA - ${title}`,
})
</script>

<template>
  <div class="w-full relative top-[148px] bg-[#f5f5f5] font-[300]">

    <section class="w-full relative our-business">
      <img src="../../../assets/images/our-buniess-inner-banner.jpg" alt="aia" class="w-full object-cover">
    </section>

    <div class="bg-white">
      <div class="container mx-auto py-[15px] md:py-[30px] px-0 lg:px-[40px] flex items-center gap-2 md:gap-4 text-primary-color font-medium capitalize md:uppercase text-[10px] md:text-[14px]">
        <a href="/corporate/our-business/#aviation" class="cursor-pointer router-link-active">Aviation</a>
        <a href="/corporate/our-business/#non-aviation" class="cursor-pointer">Non-Aviation</a>
        <a href="/corporate/our-business/#dedicated-services" class="cursor-pointer">Dedicated Services</a>
        <a href="/corporate/our-business/#advertising" class="cursor-pointer">Advertising</a>
      </div>
    </div>

<!--    -->
    <section class="w-full bg-[#f5f5f5] py-[40px] md:py-[80px]">
      <div class="container px-0 lg:px-[40px]">

        <h1 class="text-primary-color mb-[20px] text-[24px] md:text-[36px] font-normal leading-[1]">Creating A Better Travel Experience</h1>

        <p class="text-[18px] md:text-[22px] text-[300] leading-[1.5] w-full lg:w-[900px] mb-[20px]">
          AAC's core business is the management, operation, maintenance,
          and development of the Asaba International Airport.
        </p>

        <p class="text-[14px] md:text-base w-full lg:w-[900px]">
          We have developed a business model that focuses not only on the airport business but also on optimising
          the commercial and growth opportunities presented by the travel and aviation industry. As we move
          forward, our vision is to make Asaba International Airport a central hub for connectivity and sustainability
          by delighting people and businesses with world-standard services, while delivering sustainable value to all
          our stakeholders.
        </p>

      </div>
    </section>

<!--    -->
    <section class="w-full pb-[80px] grid grid-cols-1 gap-5">

      <div class="container relative" id="aviation">
        <div class="bg-white w-full lg:w-[90%] h-full absolute left-0 top-0 hidden lg:block"></div>
        <div class="w-full h-full px-[20px] lg:px-[40px] py-[40px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] bg-white lg:bg-transparent">
          <div>
            <LeftYellowBorderTitle title="Aviation" />
            <p class="mb-[20px] text-[14px] md:text-base">
              Our aviation activities include the management and development of
              airside and landside airport infrastructure (terminals, flight
              infrastructure, aircraft aprons), common infrastructure and security
              services.
            </p>

            <p class="mb-[20px] text-[14px] md:text-base">
              Our commercial aviation policy is anchored on improving
              connectivity to drive air traffic growth. This allows us to grow the
              airport capacity via a constant increase in traffic and airport links
              through specially designed, innovative programmes and initiatives.
            </p>

            <p class="text-[14px] md:text-base">
              We also focus on the high-potential business market to facilitate
              movement of goods and passengers by providing convenience and
              ensuring integration with other modes of transport. Our continuous
              improvement philosophy and persistent analysis of global best
              practices serves as a drive towards implementing high impact
              initiatives.
            </p>
          </div>
          <img src="../../../assets/images/aviation-inner.jpg" alt="aia" class="w-full">
        </div>
      </div>

      <div class="container relative" id="non-aviation">
        <div class="bg-white w-full lg:w-[90%] h-full absolute top-0 hidden lg:block right-0 mr-0 md:mr-[40px]"></div>
        <div class="w-full h-full pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[80px] py-[40px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] bg-white lg:bg-transparent">
          <img src="../../../assets/images/non-aviation-business.jpg" alt="aia" class="w-full">
          <div class="reverse">
            <LeftYellowBorderTitle title="Non-Aviation" />
            <p class="mb-[20px] text-[14px] md:text-base">
              This is focused on the commercial services that bring uniqueness and competitiveness
              to areas of airports such as shopping and parking. Innovative development strategies
              are implemented, such as the transformation of the airport’s commercial space into a
              business park to serve travelling passengers, businesses and the immediate city.
            </p>

            <p class="text-[14px] md:text-base">
              The objective is to create an aerotropolis centered around the airport and fostering the
              economic growth of the immediate region.
            </p>

          </div>
        </div>
      </div>

      <div class="container relative" id="dedicated-services">
        <div class="bg-white w-full lg:w-[90%] h-full absolute left-0 top-0 hidden lg:block"></div>
        <div class="w-full h-full px-[20px] lg:px-[40px] py-[40px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] bg-white lg:bg-transparent">
          <div>
            <LeftYellowBorderTitle title="Dedicated Services" />
            <p class="mb-[20px] text-[14px] md:text-base">
              Asaba International Airport offers premium services capable of guaranteeing arriving
              and departing passengers’ comfort and exclusivity:
            </p>

            <p class="mb-[20px] text-[14px] md:text-base">
              <span class="font-semibold">Protocol Lounge</span> - the VIP lounges which AAC provides for its passengers at Asaba
              International Airport. A complete and prestigious service offering a more relaxing airport
              use for the decerning passengers.
            </p>

            <p class="mb-[20px] text-[14px] md:text-base">
              <span class="font-semibold">VIP Service</span> - an exclusive range of top-class services at Asaba International Airport.
              Personalised assistance dedicated to the most discerning passengers.
            </p>

            <p class="text-[14px] md:text-base">
              <span class="font-semibold">Private Jet services</span> - the service that allows you to head to the security and
              departures areas in double-quick time thanks to a special route.
            </p>

          </div>
          <img src="../../../assets/images/dedicated-services-inner.jpg" alt="aia" class="w-full">
        </div>
      </div>

      <div class="container relative" id="advertising">
        <div class="bg-white w-full lg:w-[90%] h-full absolute top-0 hidden lg:block right-0 mr-0 md:mr-[40px]"></div>
        <div class="w-full h-full pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[80px] py-[40px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[40px] bg-white lg:bg-transparent">
          <img src="../../../assets/images/advertising.jpg" alt="aia" class="w-full">
          <div class="reverse">
            <LeftYellowBorderTitle title="The perfect location for your campaign" />
            <p class="mb-[20px] text-[14px] md:text-base">
              Situated in one of the most commercially vibrant areas in Nigeria, the Asaba
              International Airport provides you the perfect opportunity to expose your brand to
              thousands of passengers passing through every day. And they’re growing, with new
              facilities and sites being added.
            </p>

            <p class="mb-[20px] text-[14px] md:text-base">
              Using a range of traditional and digital media, we offer tailored solutions that deliver
              your message directly to your target audience.
            </p>

            <p class="text-[14px] md:text-base">
              To know more about our sites and rates, please contact Blessing <span class="font-semibold">Okafor:
              blessing.okafor@aac.ng</span>
            </p>

          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<style>
.router-link-active {
  position: relative;
  width: min-content;
}
.router-link-active:before {
  position: absolute;
  left: 0;
  top: 105%;
  width: 50%;
  height: 2px;
  background: #f69f09;
}

@media screen and (max-width: 1000px) {
  .reverse {
    grid-row: 1/2;
  }
}
</style>
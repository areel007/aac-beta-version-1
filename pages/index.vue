<script setup>
useHead({
  title: 'Corporate',
  titleTemplate: (title) => `AIA - ${title}`,
})
</script>

<template>
  <div class="relative top-[148px] font-[300]" id="top">
<!--    Hero-->
    <AppHero />

<!--    Our Story-->
    <section class="w-full py-[40px] md:py-[80px] bg-white">
      <span class="section-title text-[16px] md:text-[18px] font-semibold text-primary-color">Our story</span>
      <p class="text-center mb-[40px] w-[90%] max-w-[700px] mx-auto leading-[28px]">
        Asaba Airport Company (AAC) is the concessionaire responsible for managing Asaba International
        Airport.
        AAC was established as a special purpose vehicle for concession to drive the turn-around
        management, operations, and maintenance of Asaba International Airport. The major objective of
        the concession is to foster the remodelling and deployment of requisite airport infrastructure with
        the singular goal of elevating air travel experience in the South-East and South-South corridor as
        well as serving as a regional hub for air traffic movement connecting West and Central Africa.
      </p>
      <a href="/corporate/about-us/history" class="font-normal text-primary-color py-[5px] px-[10px] border border-primary-color mx-auto block text-center text-[12px]" style="width: min-content; white-space: nowrap">Find out more</a>
    </section>

<!--    Video-->
    <section class="w-full h-[500px] bg-black">
      <video
          src="../assets/videos/aia.mp4"
          muted
          loop
          autoplay
          controls
          class="w-full h-full object-cover">
      </video>
    </section>

<!--    What we do-->
    <section class="w-full py-[40px] md:py-[80px] bg-[#f5f5f5]">
      <span class="section-title text-[16px] md:text-[18px] font-semibold text-primary-color">What we do</span>
      <h1 class="text-center text-primary-color mb-[20px] font-medium text-[24px] md:text-[40px] leading-[1.1] font-[300]">Creating a better travel experience</h1>
      <p class="w-[90%] max-w-[700px] mx-auto text-center mb-[40px] leading-[28px]">
        AAC's core business is the management, operation, maintenance, and development of the Asaba
        International Airport. Our business model focuses not only on the airport business but also on
        optimising the commercial and growth opportunities presented by the travel and aviation
        industry. As we move forward, our vision is to make Asaba International Airport a central hub for
        connectivity and sustainability by delighting people and businesses with world-standard services,
        while delivering sustainable value to all our stakeholders.
      </p>

      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">

        <div class="card__card">
          <div class="card-front relative flex">
            <img src="../assets/images/aviation.jpg" alt="" class="absolute w-full h-full left-0 top-0 object-cover">
            <div class="m-auto w-[200px] h-[200px] relative flex">
              <div class="w-full h-full bg-primary-color opacity-90 absolute top-0 left-0"></div>
              <span class="relative z-10 m-auto text-white uppercase">Aviation</span>
            </div>
          </div>
          <div class="card-back relative z-20 bg-white flex flex-col justify-center items-center gap-[30px] p-[30px]">
            <h3 class="text-primary-color text-center text-[18px] font-semibold uppercase">Aviation</h3>
            <p class="text-center text-black">
              This include the management
              and development of airside
              and landside airport
              infrastructure, common
              infrastructure and security
              services.
            </p>
            <a href="/corporate/our-business/#aviation" class="text-[12px] font-semibold">Find out more ></a>
          </div>
        </div>

        <div class="card__card">
          <div class="card-front relative bg-black flex">
            <img src="../assets/images/non-aviation.jpg" alt="aia" class="absolute w-full h-full left-0 top-0 object-cover">
            <div class="m-auto w-[200px] h-[200px] relative flex">
              <div class="w-full h-full bg-primary-color opacity-90 absolute top-0 left-0"></div>
              <span class="relative z-10 m-auto text-white uppercase">Non-Aviation</span>
            </div>
          </div>
          <div class="card-back relative z-20 bg-white flex flex-col justify-center items-center gap-[30px] p-[30px]">
            <h3 class="text-primary-color text-center text-[18px] font-semibold uppercase">Non-Aviation</h3>
            <p class="text-center text-black">
              This is focused on the
              commercial services that
              bring uniqueness and
              competitiveness to areas of
              the airport such as shopping
              and parking.
            </p>
            <a href="/corporate/our-business/#non-aviation" class="text-[12px] font-semibold">Find out more ></a>
          </div>
        </div>

        <div class="card__card">
          <div class="card-front relative bg-black flex">
            <img src="../assets/images/dedicated-services-1.jpg" alt="aia" class="absolute w-full h-full left-0 top-0 object-cover">
            <div class="m-auto w-[200px] h-[200px] relative flex">
              <div class="w-full h-full bg-primary-color opacity-90 absolute top-0 left-0"></div>
              <span class="relative z-10 m-auto text-white uppercase">Dedicated Services</span>
            </div>
          </div>
          <div class="card-back relative z-20 bg-white flex flex-col justify-center items-center gap-[30px] p-[30px]">
            <h3 class="text-primary-color text-center text-[18px] font-semibold uppercase">Dedicated Services</h3>
            <p class="text-center text-black">
              Asaba International Airport
              offers premium services
              capable of guaranteeing
              arriving and departing
              passengers' comfort and
              exclusivity.
            </p>
            <a href="/corporate/our-business/#dedicated-services" class="text-[12px] font-semibold">Find out more ></a>
          </div>
        </div>

      </div>
    </section>

    <section class="w-full relative parallax">
<!--      <img src="../assets/images/gateway.jpg" alt="aia" class="w-full h-full absolute left-0 top-0">-->
      <div class="w-full h-full bg-black opacity-70 absolute top-0 left-0"></div>
      <div class="w-full h-full flex flex-col relative z-10 justify-center items-center gap-2 md:gap-5">
        <h1 class="text-center text-white font-[300] text-[24px] md:text-[40px] leading-[1.1] w-[90%]">The Gateway to the South-east region</h1>
        <p class="w-[90%] lg:w-[700px] mx-auto text-center text-white text-[14px] md:text-base font-[300]">
          Situated in one of the most commercially vibrant region in Nigeria, the
          Asaba International Airport is Nigeria???s fifth largest airport in terms of the
          number of passengers handled and goods transported.
        </p>
        <a href="/corporate/gateway" class="py-[5px] px-[10px] bg-secondary-color mx-auto block text-center text-[12px] font-semibold" style="width: min-content; white-space: nowrap">Find out more</a>
      </div>
    </section>
  </div>
</template>

<style scoped>

.section-title {
  display: block;
  width: min-content;
  white-space: nowrap;
  margin: 0 auto 40px auto;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
}
.section-title:before {
  content: '';
  position: absolute;
  top: 105%;
  width: 50%;
  height: 2px;
  background: #f69f09;
  left: 50%;
  transform: translateX(-50%);
}

/* Card*/
.card__card {
  width: 100%;
  height: 389px;
  display: flex;
  overflow: hidden;
  position: relative;
}
.card__card:hover .card-back {
  left: 0;
}
.card-front {
  width: 100%;
  height: 100%;
}
.card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 100%;
  transition: all .5s ease;
}
.parallax {
  width: 100%;
  height: 60vh;
  /*min-height: 40vh;*/
  background-position: center;
  background-size: cover;
  background-image: url("../assets/images/gateway.jpg");
  background-attachment: fixed;
}
</style>
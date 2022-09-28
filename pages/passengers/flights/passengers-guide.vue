<script setup>
useHead({
  title: 'Passengers Guide',
  titleTemplate: (title) => `AIA - ${title}`,
})
</script>

<template>
  <div class="w-full py-[40px]">

    <div class="container">

      <div class="w-full lg:w-[800px] mb-[40px]">
        <h1 class="text-[22px] md:text-[28px] mb-[20px] text-primary-color">Airport Security</h1>
        <p class="text-[14px] md:text-[16px]">
          We want to ensure a safe flying experience for all travellers and have implemented strict security regulations that are in line with the International Civil Aviation Organization (ICAO).
          Read our tips below so that you will have more time to enjoy at Hong Kong International Airport before boarding your flight.
        </p>
      </div>

      <div class="mb-[40px]">
        <h1 class="text-[18px] md:text-[22px] mb-[20px] font-[300]">Preparation at Check-in Counter</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
          <div class="w-full">
            <div class="w-full h-[292px] bg-gray-300 mb-[10px]"></div>
            <div class="w-full">
              <p>
                Do not pack restricted articles in your checked or hand baggage, or carry it on person.
              </p>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full h-[292px] bg-gray-300 mb-[10px]"></div>
            <div class="w-full">
              <p>
                Do not pack any dangerous goods such as flammable liquids, corrosive substances and gas cylinders in
                either your checked or hand baggage as they pose a risk to the safety of the aircraft.
              </p>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full h-[292px] bg-gray-300 mb-[10px]"></div>
            <div class="w-full">
              <p>
                Spare Lithium batteries and portable power banks must NOT be placed in checked baggage.
              </p>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full h-[292px] bg-gray-300 mb-[10px]"></div>
            <div class="w-full">
              <p>
                All liquids, aerosols and gels (LAGs) in hand baggage should be placed in containers no larger than
                100ml and packed in a transparent re-sealable plastic bag with a capacity of 1 litre or less.
                Only one transparent plastic bag per passenger is permitted. Exemptions may be made for medications,
                baby milk/ food and special dietary requirement, subject to verification. Any LAGs that do not meet
                the above requirements must be disposed of before security screening1. Click here for FAQs.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="mb-[40px]">
        <h1 class="text-[18px] md:text-[22px] mb-[20px] font-[300]">Security Screening</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">

          <div class="w-full">
            <div class="w-full h-[292px] bg-gray-300 mb-[10px]"></div>
            <div class="w-full">
              <p class="">
                Have your boarding pass and travel document ready before entering the Departures Immigration Hall.
                <br>
                <br>
                Passengers aged 11 or above holding electronic travel document can use the e-Security Gates.
                For those who need staff assistance, please procced to the Assisted Channels.
                <br>
                <br>
                Please read our Personal Information Collection Statement and Privacy Policy Statement for more details.
              </p>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full h-[292px] bg-gray-300 mb-[10px]"></div>
            <div class="w-full">
              <p class="">
                Electronic and metallic items in your hand baggage or on person should be placed in a separate tray for security check.
                <br>
                <br>
                Starting from 13 August 2018, all transfer passengers at HKIA travelling with LAGs contained in
                tamper-evident sealed plastic bags are required to go through enhanced security screening by a
                specialised LAGs screening equipment at the transfer passenger security screening points.
                <br>
                <br>
                In some cases, the LAGs in the sealed plastic bags will have to be removed from the bags for screening.
                When cleared, the LAGs will be repacked in a new tamper-evident sealed plastic bag provided by HKIA.
                <br>
                <br>
                Passengers are advised to allow extra time for the screening. Should you have any queries,
                please contact your airlines for more information.
              </p>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full h-[292px] bg-gray-300 mb-[10px]"></div>
            <div class="w-full">
              <p class="">
                Please walk through the archway metal detector.
                You may also be subjected to hand search.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div>
        <p>
          <span class="font-semibold">Note:</span>
          <br>
          1. Individual destinations or airlines may have different requirements on the carriage of LAGs. Please check with your airlines or travel agent in advance.
        </p>
      </div>

    </div>

  </div>
</template>
import React from "react";
import CountUp from 'react-countup';

const Stats = () => {

  

  return (
    <section class="text-gray-600 body-font z-[-20]">
      <div class="container px-5 pb-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Des chiffres et des lettres
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Si c'est grâce aux lettres et à notre créativité que nous vous accompagnons, <br/> nous pensons tout de même aux plus pragmatiques d'entre vous. <br/> Quelques chiffres utiles pour apprécier nos réalisations :
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]" data-aos="zoom-in"
              data-aos-delay="50">
            <div class="border-2 border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-purple-s w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                +
              <CountUp duration={2} end={500} scrollSpyDelay={8} scrollSpyOnce={true}/>
                K
              </h2>
              <p class="leading-relaxed">Mots rédigés</p>
            </div>
          </div>
          <div
            class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div class="border-2 border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-blue-s w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp duration={2} delay={1} end={50} /></h2>
              <p class="leading-relaxed">Collaborations</p>
            </div>
          </div>
          <div
            class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div class="border-2 border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-orange-s w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp duration={2} delay={1} end={15} /></h2>
              <p class="leading-relaxed">Domaines d'expertise couverts</p>
            </div>
          </div>
          <div
            class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div class="border-2 border-gray-100  h-52 px-4 py-6 rounded-lg shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="text-purple-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp duration={2} delay={1} end={3} /></h2>
              <p class="leading-relaxed">Langues maîtrisées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

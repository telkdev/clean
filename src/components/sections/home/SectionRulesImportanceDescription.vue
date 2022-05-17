<script lang="ts">
import { defineComponent } from "vue";

import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

import BaseTitle from "@/components/base/BaseTitle.vue";

import SliderCarousel from "@/components/slider/SliderCarousel.vue";
import SliderItem from "@/components/slider/SliderItem.vue";

export default defineComponent({
  components: {
    "base-title": BaseTitle,
    "slider-carousel": SliderCarousel,
    "slider-item": SliderItem,
  },

  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);

    const lgAndLarger = breakpoints.greater("lg");

    const carouselSlidesArray = [
      {
        title: "San Bernardino County, CA ",
        description:
          "“Fines for violating the short-term rental rules are now 10 times as high. Rather than $100 for the first offense, $200 for the second offense and $500 for the third offense within 12 months, those fines are now $1,000, $2,000 and $5,000.”",
        link: "https://www.sbsun.com/2021/07/02/short-term-rentals-face-10-times-higher-fines-in-san-bernardino-county/",
      },
      {
        title: "New York City",
        description:
          "“New York City law makes it illegal to advertise a short-term rental that is prohibited by the New York State Multiple Dwelling Law. This includes listing such rentals on Airbnb and other online short-term rental platforms. Fines for violations range from $1,000 for the first violation, to $5,000 for the second, to $7,500 for three or more violations. (N.Y.C. Admin. Code Sec. 27.287.1)”",
      },
      {
        title: "New Orleans",
        description:
          "“Short-term rental fines reach nearly $1 million over 2 years in New Orleans, official says”",
        link: "https://www.wdsu.com/article/short-term-rental-fines-reach-nearly-dollar1-million-over-2-years-in-new-orleans-official-says/35730303",
      },
      {
        title:
          "Thousands of online listings are violating L.A.’s new short-term rental law",
        description:
          "“The city. . .  estimated that on Airbnb, more than 6,000 listings are out of compliance — a number equal to roughly 42% of active listings on all platforms in Los Angeles . . . .  To combat the problem, L.A. has sent out two rounds of warning letters and issued more than 650 citations to rental hosts, imposing one-time fines of $500 each.”",
        link: "https://www.latimes.com/california/story/2020-08-09/los-angeles-short-term-rental-violations",
      },
    ];
    return { carouselSlidesArray, lgAndLarger };
  },
});
</script>

<template>
  <section>
    <div class="container mx-auto px-4">
      <base-title
        :text="'Why it’s Important to Know the Rules and Regulations'"
        class="mb-4 md:mb-6"
      />

      <slider-carousel
        v-slot="{ currentSlide }"
        :is-navigation-enabled="lgAndLarger"
        :is-pagination-enabled="true"
        :is-auto-play-enabled="false"
        :timeout="5000"
        :slides-length="carouselSlidesArray.length"
        class="relative min-h-[360px]"
      >
        <slider-item
          v-for="(slideItem, index) in carouselSlidesArray"
          :key="index"
        >
          <div
            v-show="currentSlide === index + 1"
            class="bg-gradient-blue-300 rounded-t-3xl md:rounded-t-5xl rounded-bl-3xl md:rounded-bl-5xl py-4 px-1 md:py-6 md:px-20 lg:py-11 lg:px-52 xl:px-60 absolute top-0 left-0 h-full w-full text-center flex flex-col justify-center"
          >
            <h3
              class="text-darkblue-900 text-base md:text-2xl lg:text-3xl mb-1 md:mb-6 lg:mb-4 font-medium"
            >
              {{ slideItem.title }}
            </h3>
            <p class="font-comfortaa text-sm lg:text-base text-black">
              {{ slideItem.description }}
            </p>

            <a
              v-if="slideItem.link"
              :href="slideItem.link"
              target="_blank"
              rel="nofollow noopener"
              class="mt-1 lg:mt-4 text-xs lg:text-base text-lightblue-500 underline hover:text-darkblue-900 active:text-lightblue-600/60 focus:text-darkblue-600/70 outline-none inline-block"
              >Read more...</a
            >
          </div>
        </slider-item>
      </slider-carousel>
    </div>
  </section>
</template>

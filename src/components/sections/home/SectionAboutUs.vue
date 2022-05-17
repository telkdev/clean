<script lang="ts">
import { defineComponent } from "vue";

import BaseTitle from "@/components/base/BaseTitle.vue";
import AboutUsItem from "@/components/about-us/AboutUsItem.vue";

export default defineComponent({
  components: {
    "base-title": BaseTitle,
    "about-us-item": AboutUsItem,
  },
  setup() {
    const aboutUsArray = [
      {
        image: "who-we-are",
        imageDescription: "Who we are image",
        title: "Who we are",
        description: `
          <p>Short Rule is comprised of lawyers, realtors, and short-term rental owner/operators.</p>
          <p>In addition, the owners of Short Rules are investors in short term rental properties themselves.  As investors, the Short Rule owners continuously look at different locations throughout the U.S. to evaluate the short-term rental investment opportunity in that area.</p>
          <p>When scouting a location, the first thing that the Short Rule owners would do is determine whether or not short-term rentals are allowed in that specific location, and if there were restrictions or regulations.</p>
          <p>Determining what the rules, regulations, and restrictions pertaining to short-term rentals in a specific town, city, or county could become extremely frustrating.  It would often be very hard to figure out what the regulations were for a specific area, and the amount of misinformation on the internet was staggering. For some areas, it would take Short Rule owners hours of researching to finally find the appropriate ordinance, or finally get ahold of someone in a planning department in order to get answers and make an educated evaluation of the regulations for a specific town, city or county.</p>
          <p>The Short Rule owners saw a need for a streamlined system, where people could simply plug in a city, town or county and quickly obtain a summary of the regulations or restrictions related to short term rentals in that city, town or county. And with that, we got to work on reviewing ordinances, calling city planning departments, and compiling our information in order to provide you the “Short Rule.”</p>
        `,
      },
      {
        image: "what-we-provide",
        imageDescription: "What we provide image",
        title: "What we provide",
        description:
          "<p>We provide you a summary of the rules and regulations relating to short term rentals for specific cities, towns, and counties.</p> <p>We will tell you whether we think short term rentals are allowed in that specific location, if there are any restrictions on short term rentals i.e. a minimum number of days you have to rent the property out for, or a limited number of nights you are allowed to rent the property on a short term basis, and we let you know if you are required to apply for and obtain a specific license, permit, certificate, etc., and provide you the links to relevant websites, or directly to the application.</p>",
      },
      {
        image: "what-we-done",
        imageDescription: "What we have done image",
        title: "What we’ve done",
        description:
          "<p>We have reviewed city websites, called planning and zoning departments and scoured municipal codes and ordinances to gather the most accurate short term rental regulations for a given city, town, or county.</p>",
      },
    ];

    return {
      aboutUsArray,
    };
  },
});
</script>

<template>
  <section>
    <div class="container mx-auto px-4">
      <base-title :text="'About Us'" class="mb-4 md:mb-6" />

      <ul class="space-y-4">
        <about-us-item
          v-for="(aboutUsItem, index) of aboutUsArray"
          :key="index"
          :title="aboutUsItem.title"
          :description="aboutUsItem.description"
          :image="aboutUsItem.image"
          :image-description="aboutUsItem.imageDescription"
          :is-odd="index % 2 === 0"
        ></about-us-item>
      </ul>
    </div>
  </section>
</template>

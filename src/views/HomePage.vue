<script lang="ts">
import { defineComponent } from "vue";

import SectionHero from "@/components/sections/home/SectionHero.vue";
import HowItWorks from "@/components/sections/home/HowItWorks.vue";
import SectionSearch from "@/components/sections/home/SectionSearch.vue";
import SectionMap from "@/components/sections/home/SectionMap.vue";
import SectionAboutUs from "@/components/sections/home/SectionAboutUs.vue";
import SectionRulesImportanceDescription from "@/components/sections/home/SectionRulesImportanceDescription.vue";

export default defineComponent({
  components: {
    "section-hero": SectionHero,
    "how-it-works": HowItWorks,
    "section-search": SectionSearch,
    "section-map": SectionMap,
    "section-about-us": SectionAboutUs,
    "section-rules-importance-description": SectionRulesImportanceDescription,
  },
  setup() {},
});
</script>

<template>
  <main class="pt-4 pb-8 md:pt-8 md:pb-28 bg-background-main bg-contain bg-no-repeat bg-right">
    <section-hero class="mb-8 lg:mb-16 xl:mb-28" />
    <how-it-works class="mb-8 lg:mb-16 xl:mb-28" />
    <section-search class="mb-8 md:mb-40 lg:mb-52" />
    <section-map class="mb-8 lg:mb-16 xl:mb-28" />
    <section-about-us id="about" class="mb-8 md:mb-28" />
    <section-rules-importance-description />
  </main>
</template>

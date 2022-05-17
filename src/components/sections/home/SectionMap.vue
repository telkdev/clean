<script lang="ts">
import { defineComponent } from "vue";

import BaseTitle from "@/components/base/BaseTitle.vue";
import MapStates from "@/components/map/MapStates.vue";

export default defineComponent({
  components: {
    "base-title": BaseTitle,
    "map-states": MapStates,
  },
  setup() {},
});
</script>

<template>
  <section>
    <div class="container mx-auto px-4">
      <base-title
        :text="'Short Rule Currently has Information for the Following States'"
        class="mb-4 md:mb-6"
      />

      <map-states />
    </div>
  </section>
</template>

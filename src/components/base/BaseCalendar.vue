<script>
// https://vue3datepicker.com/
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import {
  endOfMonth,
  endOfYear,
  startOfMonth,
  startOfYear,
  subMonths,
} from "date-fns";

import { ref, onMounted } from "vue";
export default {
  components: { "date-picker": Datepicker },

  setup() {
    const date = ref();

    const presetRanges = ref([
      { label: "Today", range: [new Date(), new Date()] },
      {
        label: "This month",
        range: [startOfMonth(new Date()), endOfMonth(new Date())],
      },
      {
        label: "Last month",
        range: [
          startOfMonth(subMonths(new Date(), 1)),
          endOfMonth(subMonths(new Date(), 1)),
        ],
      },
      {
        label: "This year",
        range: [startOfYear(new Date()), endOfYear(new Date())],
      },
    ]);

    // For demo purposes assign range from the current date
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
    });

    return {
      date,
      presetRanges,
    };
  },
};
</script>

<template>
  <div class="flex items-baseline gap-1">
    <date-picker
      v-model="date"
      range
      :preset-ranges="presetRanges"
      :month-change-on-scroll="false"
      :enable-time-picker="false"
      :clearable="false"
    />

    <!-- <span class="text-sm font-comfortaa text-grey-400">
      {{ date }}
    </span> -->
  </div>
</template>

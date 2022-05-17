<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    isAutoPlayEnabled: { type: Boolean, required: true },
    isNavigationEnabled: { type: Boolean, required: true },
    isPaginationEnabled: { type: Boolean, required: true },
    slidesLength: { type: Number, required: true },
    timeout: { type: Number, default: () => 5000 },
  },
  setup(props) {
    const currentSlide = ref(1);

    // next slide
    const nextSlide = () => {
      if (currentSlide.value === props.slidesLength) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };
    // prev slide
    const previousSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = props.slidesLength;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index: number) => {
      currentSlide.value = index + 1;
    };

    // autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, props.timeout);
    };

    if (props.isAutoPlayEnabled) {
      autoPlay();
    }

    return {
      currentSlide,
      nextSlide,
      previousSlide,
      goToSlide,
    };
  },
});
</script>

<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>

    <!-- Navigation -->
    <div v-if="isNavigationEnabled" class="navigate">
      <button
        class="absolute top-1/2 left-6 transform -translate-y-1/2 text-darkblue-900 hover:text-lightblue-100"
        aria-label="Previous slide"
        @click="previousSlide"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 44 44"
          class="fill-current w-11 h-11"
        >
          <path
            d="M22 0a22 22 0 1 0 0 44 22 22 0 0 0 0-44Zm9.625 20.625a1.375 1.375 0 0 1 0 2.75h-15.93l5.904 5.901a1.376 1.376 0 1 1-1.948 1.948l-8.25-8.25a1.376 1.376 0 0 1 0-1.948l8.25-8.25a1.376 1.376 0 1 1 1.948 1.947l-5.905 5.902h15.931Z"
          />
        </svg>
      </button>
      <button
        class="absolute top-1/2 right-6 transform -translate-y-1/2 text-darkblue-900 hover:text-lightblue-100"
        aria-label="Next slide"
        @click="nextSlide"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 44 44"
          class="fill-current w-11 h-11 transform rotate-180"
        >
          <path
            d="M22 0a22 22 0 1 0 0 44 22 22 0 0 0 0-44Zm9.625 20.625a1.375 1.375 0 0 1 0 2.75h-15.93l5.904 5.901a1.376 1.376 0 1 1-1.948 1.948l-8.25-8.25a1.376 1.376 0 0 1 0-1.948l8.25-8.25a1.376 1.376 0 1 1 1.948 1.947l-5.905 5.902h15.931Z"
          />
        </svg>
      </button>
    </div>

    <!-- Pagination -->
    <div
      v-if="isPaginationEnabled"
      class="absolute bottom-2 left-1/2 transform -translate-x-1/2 md:bottom-11 flex gap-4 md:gap-6 items-center w-1/2 justify-center flex-wrap"
    >
      <button
        v-for="(slide, index) in slidesLength"
        :key="index"
        class="w-5 h-5 border-2 border-darkblue-900 rounded-full hover:bg-lightblue-100"
        :class="{ 'bg-darkblue-900': index + 1 === currentSlide }"
        aria-label="Pagination select button"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

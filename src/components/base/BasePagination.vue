<script setup lang="ts">
const pages = [1, 2, 3, 4, 5];

const currentPage = 1;

</script>

<template>
  <div class="flex items-center gap-4">
    <button
      class="text-darkblue-900 p-2 hover:text-grey-900"
      :class="{ 'text-grey-300': true }"
    >
      <svg
        class="w-2 h-3 fill-current"
        viewBox="0 0 8 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.979.822a1.1 1.1 0 0 1 0 1.555L3.356 6 6.98 9.622a1.1 1.1 0 0 1-1.556 1.556l-4.4-4.4a1.1 1.1 0 0 1 0-1.556l4.4-4.4a1.1 1.1 0 0 1 1.556 0Z"
        />
      </svg>
    </button>
    <ul class="flex items-center gap-4">
      <li v-for="page of pages" :key="page" class="text-black">
        <button
          class="w-8 h-8 flex rounded-full justify-center items-center hover:bg-lightblue-100 hover:text-white"
          :class="{
            'bg-lightblue-500 text-white': page === currentPage,
          }"
        >
          {{ page }}
        </button>
      </li>
    </ul>

    <button
      class="text-darkblue-900 p-2 hover:text-grey-900"
      :class="{ 'text-grey-300': false }"
    >
      <svg
        class="w-2 h-3 fill-current rotate-180"
        viewBox="0 0 8 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.979.822a1.1 1.1 0 0 1 0 1.555L3.356 6 6.98 9.622a1.1 1.1 0 0 1-1.556 1.556l-4.4-4.4a1.1 1.1 0 0 1 0-1.556l4.4-4.4a1.1 1.1 0 0 1 1.556 0Z"
        />
      </svg>
    </button>
  </div>
</template>

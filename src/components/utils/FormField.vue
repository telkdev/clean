<script lang="ts">
import { defineComponent } from "vue";

// import { useField } from "vee-validate";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      required: true,
    },
    isTextarea: {
      type: Boolean,
      default: () => false,
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["update:modelValue"],
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <label
      :for="name"
      class="text-sm md:text-base text-grey-800 font-comfortaa flex items-center gap-1"
      >
      {{ label }}
      <svg
        v-if="isRequired"
        width="9"
        height="10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 5 1.389 6.8M4.5 5l3.111-1.8L4.5 5Zm0 0v3.6V5Zm0 0L1.389 3.2 4.5 5Zm0 0 3.111 1.8L4.5 5Zm0-3.6V5 1.4Z"
          stroke="#DD3B5E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>

    <field
      v-if="!isTextarea"
      :id="name"
      :value="modelValue"
      :type="inputType"
      :placeholder="label"
      :name="name"
      :rules="rules"
      class="border border-grey-900/20 rounded-lg px-2 py-1 md:py-3 text-sm md:text-base font-comfortaa bg-grey-100"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value, name)"
    />

    <textarea
      v-else
      :id="name"
      :name="name"
      :placeholder="label"
      :value="modelValue"
      class="border border-grey-900/20 rounded-lg px-2 py-1 md:py-3 text-sm md:text-base font-comfortaa bg-grey-100 resize-none h-24"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value, name)"
    ></textarea>

    <error-message
      :name="name"
      class="text-xs text-red-400 font-comfortaa"
    ></error-message>
  </div>
</template>

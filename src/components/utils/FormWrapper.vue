<!-- We will add api calls to this component -->
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

import { useForm } from "vee-validate";

import { buttonTypesEnum } from "@/enums/buttonTypes";

import { useApi } from "../../services/apiAdapterVue";

import ActionButton from "@/components/utils/ActionButton.vue";

export default defineComponent({
  components: { "action-button": ActionButton },
  props: {
    submitButtonText: { type: String, required: true },
  },
  emits: ["handle-form-submit"],
  setup(props, { emit }) {
    const { handleSubmit, meta } = useForm();

    function onInvalidSubmit({ values, errors, results }: any) {
      // for test purposes
      // emit("handle-form-submit");
      // Add notification
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    }

    const isValid = ref();

    const onSubmit = handleSubmit(() => {
      emit("handle-form-submit");
    }, onInvalidSubmit);

    // meta and yup module in combination sets CPU to 100%, so here is workaround;
    watch(
      () => meta.value.valid,
      () => {
        isValid.value = meta.value.valid;
      }
    );

    onMounted(() => {
      isValid.value = meta.value.valid;
    });

    // Set button to loading if api call fired;
    const { isLoading } = useApi();

    return {
      onSubmit,
      buttonTypesEnum,
      isValid,
      isLoading,
    };
  },
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>

    <action-button
      :is-disabled="!isValid"
      :text="submitButtonText"
      :type="buttonTypesEnum.Primary"
      :is-loading="isLoading"
    />
  </form>
</template>

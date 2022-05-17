<script lang="ts">
import { defineComponent, reactive } from "vue";
// TODO: add only used fields;
import * as yup from "yup";

import FormField from "@/components/utils/FormField.vue";
import FormWrapper from "@/components/utils/FormWrapper.vue";

// TODO: add functionality
export default defineComponent({
  components: {
    "form-wrapper": FormWrapper,
    "form-field": FormField,
  },
  setup() {
    const userData = reactive({
      username: "",
      updatedUsername: "",
      password: "",
      updatedPassword: "",
      updatedEmail: "",
      email: "",
    });
    return { userData, yup };
  },
});
</script>

<template>
  <div class="bg-white rounded-md py-3 px-8 space-y-4 h-full">
    <div>
      <h2 class="capitalize mb-3 text-black text-base lg:text-3xl font-medium">
        Change name
      </h2>
      <form-wrapper :submit-button-text="'Save'">
        <form-field
          :name="'first-name'"
          :label="'Previous First Name'"
          :input-type="'text'"
          :model-value="userData.username"
          :is-required="false"
          class="w-full mb-4"
          :rules="yup.string().required()"
          @update:model-value="(newValue) => (userData.username = newValue)"
        />
        <form-field
          :name="'updated-first-name'"
          :label="'Updated First Name'"
          :input-type="'text'"
          :model-value="userData.updatedUsername"
          :is-required="false"
          class="w-full mb-4"
          :rules="yup.string().required()"
          @update:model-value="(newValue) => (userData.updatedUsername = newValue)"
        />
      </form-wrapper>
    </div>
    <div>
      <h2 class="capitalize mb-3 text-black text-base lg:text-3xl font-medium">
        Change email
      </h2>
      <form-wrapper :submit-button-text="'Save'">
        <form-field
          :name="'email'"
          :label="'Previous Email Address'"
          :input-type="'text'"
          :model-value="userData.email"
          :is-required="false"
          class="w-full mb-4"
          :rules="yup.string().email().required()"
          @update:model-value="(newValue) => (userData.email = newValue)"
        />
        <form-field
          :name="'updated-email'"
          :label="'Updated Email Address'"
          :input-type="'text'"
          :model-value="userData.updatedEmail"
          :is-required="false"
          class="w-full mb-4"
          :rules="yup.string().email().required()"
          @update:model-value="(newValue) => (userData.updatedEmail = newValue)"
        />
      </form-wrapper>
    </div>
    <div>
      <h2 class="capitalize mb-3 text-black text-base lg:text-3xl font-medium">
        Change Password
      </h2>
      <form-wrapper :submit-button-text="'Save'">
        <form-field
          :name="'password'"
          :label="'Previous Password'"
          :input-type="'text'"
          :model-value="userData.password"
          :is-required="false"
          class="w-full mb-4"
          :rules="
            yup
              .string()
              .required()
              .min(8)
              .matches(/[a-z]+/, 'Add at least one lowercase character')
              .matches(/[A-Z]+/, 'Add at least one uppercase character')
              .matches(/[@$!%*#?&]+/, 'Add at least one special character')
              .matches(/\d+/, 'Add at least one number')
          "
          @update:model-value="(newValue) => (userData.password = newValue)"
        />
        <form-field
          :name="'updated-password'"
          :label="'Updated Password'"
          :input-type="'text'"
          :model-value="userData.updatedPassword"
          :is-required="false"
          class="w-full mb-4"
          :rules="
            yup
              .string()
              .required()
              .oneOf(
                [userData.password, null],
                'Password and Confirm password fields should be the same'
              )
              .min(8)
              .matches(/[a-z]+/, 'Add at least one lowercase character')
              .matches(/[A-Z]+/, 'Add at least one uppercase character')
              .matches(/[@$!%*#?&]+/, 'Add at least one special character')
              .matches(/\d+/, 'Add at least one number')
          "
          @update:model-value="
            (newValue) => (userData.updatedPassword = newValue)
          "
        />
      </form-wrapper>
    </div>
  </div>
</template>

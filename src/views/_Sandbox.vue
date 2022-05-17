<!-- Budget sandbox -->
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { buttonTypesEnum } from "@/enums/buttonTypes";

import { notificationTypesEnum } from "@/enums/notificationTypes";

import { useNotifier } from "../services/notificationAdapterVue";
import { useJwtToken } from "../services/jwtTokenAdapter";
import { useApi } from "@/services/apiAdapterVue";

import { useUserStore } from "../store/useUserStore";

import { NotificationService } from "@/application/ports/notificationVue";
import ActionButton from "@/components/utils/ActionButton.vue";

export default defineComponent({
  components: { ActionButton },
  setup() {
    const { post, get } = useApi();

    const { handleAddNotification }: NotificationService = useNotifier();

    function add() {
      handleAddNotification({
        text: "please provide user Success",
        type: notificationTypesEnum.Success,
      });
      handleAddNotification({
        text: "please provide user Warning",
        type: notificationTypesEnum.Warning,
      });
      handleAddNotification({
        text: "please provide user Error",
        type: notificationTypesEnum.Error,
      });
      handleAddNotification({
        text: "please provide user Info",
        type: notificationTypesEnum.Info,
      });
    }

    const { isAuthenticated } = useUserStore();

    const states = ref([]);

    // States api test, jwt test
    onMounted(async () => {
      const res = await get("/api/States/GetStates");

      states.value = res.data;
    });

    return {
      notificationTypesEnum,
      add,
      buttonTypesEnum,
      states,
      isAuthenticated,
    };
  },
});
</script>

<template>
  <main class="container p-4 mx-auto">
    <h1 class="text-5xl text-center mb-10 text-black font-bold">Sandbox</h1>
    <div>
      <h2 class="text-4xl mb-2">States</h2>

      {{ states }}
    </div>

    <div>
      user store
      <br />
      user authenticated {{ isAuthenticated }}
    </div>

    <div class="container mx-auto p-10 flex gap-2">
      <ActionButton
        :text="'Add notification message example'"
        :type="buttonTypesEnum.Primary"
        @handle-submit="add"
      />
    </div>
  </main>
</template>

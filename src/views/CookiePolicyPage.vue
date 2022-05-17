<script lang="ts">
import { defineComponent } from "vue";

import { PopupService } from "@/application/ports/popupVue";

import { StaticData } from "@/types/staticPagesTypes";

import { popupVariantsEnum } from "@/enums/popupEnum";
import { buttonTypesEnum } from "@/enums/buttonTypes";

import { usePopup } from "@/services/popupAdapterVue";

import ActionLink from "@/components/utils/ActionLink.vue";
import AccordionItem from "@/components/utils/AccordionItem.vue";

export default defineComponent({
  components: {
    "action-link": ActionLink,
    "accordion-item": AccordionItem,
  },
  setup() {
    const { openPopup }: PopupService = usePopup();

    const policyData: StaticData[] = [
      {
        title: "What are cookies?",
        description: `
              <p>Cookies are simple text files that are stored on your computer or mobile device by a website’s server. Each cookie is unique to your web browser. It will contain some anonymous information such as a unique identifier, website’s domain name, and some digits and numbers.
              </p>
            `,
      },
      {
        title: "Necessary cookies",
        description: `
               <p>Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our website and using its features. For example, these cookies let us recognize that you have created an account and have logged into that account to access the content.</p>
            `,
      },
      {
        title: "Functionality cookies",
        description: `
               <p>Functionality cookies let us operate the site in accordance with the choices you make. For example, we will recognize your username and remember how you customized the site during future visits.</p>
            `,
      },
      {
        title: " Analytical cookies",
        description: `
               <p>These cookies enable us and third-party services to collect aggregated data for statistical purposes on how our visitors use the website. These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience of the website.</p>
            `,
      },
      {
        title: "How to delete cookies?",
        description: `
               <p>If you want to restrict or block the cookies that are set by our website, you can do so through your browser setting. Alternatively, you can visit www.internetcookies.org, which contains comprehensive information on how to do this on a wide variety of browsers and devices. You will find general information about cookies and details on how to delete cookies from your device.</p>
            `,
      },
      {
        title: " Contacting us",
        description: `
               <p>If you have any questions about this cookie policy or our use of cookies, please contact us.</p>
            `,
      },
    ];

    return { policyData, openPopup, buttonTypesEnum, popupVariantsEnum };
  },
});
</script>

<template>
  <main class="bg-background-main bg-fixed bg-35% bg-no-repeat bg-right">
    <div class="container mx-auto px-4 pt-6 pb-28">
      <div class="max-w-[900px] mx-auto mb-10">
        <h1
          class="text-base text-black font-medium mb-4 md:text-2xl lg:text-3xl text-center"
        >
          Cookie Policy
        </h1>
      </div>

      <ul class="space-y-2 md:space-y-3 lg:space-y-4 mb-11">
        <accordion-item v-for="(item, index) of policyData" :key="index">
          <template #header> {{ index + 1 }}. {{ item.title }} </template>

          <template #body>
            <template v-if="item.description && item.description.length">
              <div
                class="space-y-2 md:space-y-3"
                v-html="item.description"
              ></div>
            </template>
          </template>
        </accordion-item>
      </ul>

      <action-link
        path-to="/"
        :text="'Back to Main page'"
        :type="buttonTypesEnum.Primary"
        class="max-w-[350px] mx-auto block text-center"
      />
    </div>
  </main>
</template>

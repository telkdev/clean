<script lang="ts">
import { defineComponent } from "vue";

import { PopupService } from "@/application/ports/popupVue";

import { StaticData } from "@/types/staticPagesTypes";

import { popupVariantsEnum } from "@/enums/popupEnum";
import { buttonTypesEnum } from "@/enums/buttonTypes";

import { usePopup } from "@/services/popupAdapterVue";

import ActionButton from "@/components/utils/ActionButton.vue";
import AccordionItem from "@/components/utils/AccordionItem.vue";

export default defineComponent({
  components: {
    "action-button": ActionButton,
    "accordion-item": AccordionItem,
  },
  setup() {
    const { openPopup }: PopupService = usePopup();

    const policyData: StaticData[] = [
      {
        title: "Accuracy",
        description: `
              <p>Rules (regulations, rules, laws or ordinances) related to short term rentals change on a regular basis. We cannot guarantee the accuracy of the rules referenced on this website, or provided in the results sections.  This information is intended to supplement your own independent research, and not to be relied on exclusively.
              </p>
            `,
      },
      {
        title: "No Legal Advice",
        description: `
               <p>The information and results provided on this website do not, and are not intended to, constitute legal advice and does not create an attorney-client relationship; instead, all information, content, and materials available on this site are for general informational purposes only.   </p>

               <p>Readers of this website should contact their attorney to obtain advice with respect to any particular legal matter, ordinance, regulation, or rule pertaining to a certain city, town, municipality, county, or state.  No reader, user, or browser of this site should act or refrain from acting on the basis of information on this site without first seeking legal advice from counsel in the relevant jurisdiction. </p>
            `,
      },
      {
        title: "Intellectual Property ",
        description: `
               <p>The service and its original content, features and functionality are and will remain the exclusive property of the company – Short Rule LLC - and its licensors, if any. </p>

               <p>The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. </p>

               <p>Our trademarks may not be used in connection with any product or service without the prior written consent of the Company. </p>
            `,
      },
      {
        title: "Order Cancellation",
        description: `
               <p>We reserve the right to refuse or cancel your order at any time for any reason.</p>
            `,
      },
      {
        title: "Refunds",
        description: `
               <p>Except when required by law, paid orders are non-refundable. </p>
               <p>Certain refund requests for orders may be considered by the company on a case-by-case basis and granted at the sole discretion of the company.  </p>
            `,
      },
      {
        title: "User Accounts",
        description: `
               <p>When You create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on our service. </p>
               <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of Your account. </p>
            `,
      },
      {
        title: "Links to Other Websites",
        description: `
               <p>Our service may contain links to third-party web sites or services that are not owned or controlled by the Company. </p>
               <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services. </p>
               <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit. </p>
            `,
      },
      {
        title: "Termination",
        description: `
               <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. </p>
               <p>Upon termination, your right to use the Service will cease immediately. </p>
            `,
      },
      {
        title: "Limitation of Liability",
        description: `
               <p>Notwithstanding any damages that you might incur, the entire liability of the company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you through the service.</p>
               <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law. </p>
               <p>To the maximum extent permitted by applicable law, in no event shall the company be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, reliance, interference with contract, loss of privacy arising out of or in any way related to the use of or inability to use the service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. </p>
            `,
      },
      {
        title: "Governing Law",
        description: `
               <p>The laws of Colorado, United States, shall govern these Terms and your use of the service. </p>
            `,
      },
      {
        title: "Disputes Resolution",
        description: `
        <p>If you have any concern or dispute about the service, you agree to first try to resolve the dispute informally by contacting the Company.  </p>
        `,
      },
      {
        title: "Contact Us",
        description: `
        <p>If you have any questions about these Terms and Conditions, you can contact us: </p>

        <ul class="list-disc pl-5 md:pl-10 space-y-1 py-1">
          <li>
           By email: <a href="mailto:info@shortrule.com" target="_blank" rel="nofollow noopener" class="text-xs lg:text-base text-lightblue-500 hover:text-darkblue-900 active:text-lightblue-600/60 focus:text-darkblue-600/70 outline-none">info@shortrule.com</a>
          </li>
        </ul>
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
          Terms and Conditions
        </h1>

        <p class="text-base text-black lg:text-lg text-center mb-4">
          By accessing or using the Service you agree to be bound by these Terms
          and Conditions. If you disagree with any part of these Terms and
          Conditions then you may not access the Service.
        </p>
        <div class="mb-4 flex items-start gap-2 md:gap-1">
          <svg
            class="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M11.1 14.04a.804.804 0 0 1-.593-.24.852.852 0 0 1-.224-.576V5.336c0-.235.075-.432.224-.592.16-.16.358-.24.592-.24.235 0 .427.08.576.24.16.16.24.357.24.592v7.888a.762.762 0 0 1-.256.576.768.768 0 0 1-.56.24Zm0 2.96c-.3 0-.56-.107-.785-.32a1.066 1.066 0 0 1-.32-.784c0-.31.107-.57.32-.784.224-.224.486-.336.784-.336.31 0 .571.112.784.336.214.213.32.475.32.784 0 .31-.112.57-.336.784-.213.213-.469.32-.768.32Z"
              fill="#000"
            />
            <circle cx="11" cy="11" r="10.5" stroke="#000" />
          </svg>
          <p class="text-base text-black lg:text-lg text-center">
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service.
          </p>
        </div>
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

      <action-button
        :text="'Back'"
        :type="buttonTypesEnum.Primary"
        class="max-w-[350px] mx-auto block"
        @handle-submit="openPopup(popupVariantsEnum.TermsAndConditions)"
      />
    </div>
  </main>
</template>

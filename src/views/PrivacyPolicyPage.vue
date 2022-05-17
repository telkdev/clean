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
        title:
          "Collecting and Using Your Personal Data (Types of Data Collected)",
        list: [
          {
            title: "Personal Data",
            description: `
              <p>While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
              </p>
              <p>Email address</p>
              <p>First name and last name</p>
              <p>Address, State, Province, ZIP/Postal code, City </p>
            `,
          },
          {
            title: "Usage Data",
            description: `
               <p>Usage Data is collected automatically when using the Service. </p>

               <p>Usage Data may include information such as your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. </p>

              <p> When you access the service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data. </p>

               <p>We may also collect information that your browser sends whenever you visit our service or when you access the service by or through a mobile device. </p>
            `,
          },
          {
            title: "Use of Your Personal Data",
            description: `
               <div>
               The Company may use Personal Data for the following purposes:
               
                <ul class="list-disc pl-5 md:pl-10 space-y-1 py-1">
                  <li>
                    To provide and maintain our Service, including to monitor the usage of our Service. 
                  </li>
                  <li>
                     To manage your Account: to manage your registration as a user of the Service.   
                  </li>
                  <li>
                   For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with us through the Service. 
                  </li>
                  <li>
                   To contact You: To contact you by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation. 
                  </li>
                  <li>
                   To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information. 
                  </li>
                  <li>
                   To manage your requests: To attend and manage your requests to us. 
                  </li>
                  <li>
                   For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by us about our service users is among the assets transferred. 
                  </li>
                  <li>
                   For other purposes: We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our service, products, services, marketing and your experience. 
                  </li>
                </ul>
               </div>
               <div>
               We may share your personal information in the following situations: 
               
                <ul class="list-disc pl-5 md:pl-10 space-y-1 py-1">
                  <li>
                    With Service Providers: We may share your personal information with Service Providers to monitor and analyze the use of our service, for payment processing, to contact you. 
                  </li>
                  <li>
                    For business transfers: We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. 
                  </li>
                  <li>
                   With Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners or other companies that we control or that are under common control with us. 
                  </li>
                  <li>
                   With business partners: We may share your information with our business partners to offer you certain products, services or promotions. 
                  </li>
                  <li>
                   With other users: When you share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.  
                  </li>
                  <li>
                   With Your consent: We may disclose your personal information for any other purpose with Your consent. 
                  </li>
                </ul>
               </div>
            `,
          },
          {
            title: "Retention of Your Personal Data",
            description: `
               <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>

               <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our service, or we are legally obligated to retain this data for longer time periods.</p>
            `,
          },
          {
            title: "Retention of Your Personal Data",
            description: `
               <p>Your information, including Personal Data, is processed at the company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>

               <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>

               <p>The Company will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
            `,
          },
          {
            title: "Disclosure of Your Personal Data",
            description: `
              <p class="text-lg">Business Transactions </p>

              <p>If the Company is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy. </p>

              <p class="text-lg">Law enforcement </p>

              <p> Under certain circumstances, the Company may be required to disclose your Personal Data if required to do so by law  or in response to valid requests by public authorities (e.g. a court or a government agency). </p>

              <p class="text-lg">Other legal requirements </p>

              The Company may disclose Your Personal Data in the good faith belief that such action is necessary to: 
              
              <ul class="list-disc pl-5 md:pl-10 space-y-1 py-1">
                <li>
                  Comply with a legal obligation 
                </li>
                <li>
                  Protect and defend the rights or property of the Company
                </li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with the Service 
                </li>
                <li>
                  Protect the personal safety of users of the service or the public 
                </li>
                <li>
                  Protect against legal liability 
                </li>
              </ul>
            `,
          },
        ],
      },
      {
        title: "Analytics",
        description: `
        <p>We may use third-party service providers to monitor and analyze the use of our service.</p>

        <p class="text-lg">Google Analytics</p>

        <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy" target="_blank" rel="nofollow noopener" class="text-xs lg:text-base text-lightblue-500 hover:text-darkblue-900 active:text-lightblue-600/60 focus:text-darkblue-600/70 outline-none">https://policies.google.com/privacy</a></p>

        <p class="text-lg">Email Marketing</p>

        <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to You. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us. We may use email marketing service providers to manage and send emails to You.</p>
        `,
      },
      {
        title: "Payments",
        description: `
        <p>We may provide paid products and/or services within the service. In that case, we may use third-party services for payment processing (e.g. payment processors). We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>

        <p class="text-lg">Stripe</p>

        <p>Their Privacy Policy can be viewed at <a href="https://stripe.com/us/privacy" target="_blank" rel="nofollow noopener" class="text-xs lg:text-base text-lightblue-500 hover:text-darkblue-900 active:text-lightblue-600/60 focus:text-darkblue-600/70 outline-none">https://stripe.com/us/privacy</a></p>
        `,
      },
      {
        title: "Links to Other Websites",
        description: `
        <p>Our service may contain links to other websites that are not operated by us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site you visit.</p>

        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
        `,
      },
      {
        title: "Changes to this Privacy Policy",
        description: `
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        
        <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>

        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        `,
      },
      {
        title: "Contact Us",
        description: `
        <p>If you have any questions about this Privacy Policy, you can contact us:</p>

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
      <h1
        class="text-base text-black font-medium mb-14 md:text-2xl lg:text-3xl text-center"
      >
        Privacy Policy
      </h1>

      <ul class="space-y-2 md:space-y-3 lg:space-y-4 mb-11">
        <accordion-item v-for="(item, index) of policyData" :key="index">
          <template #header> {{ index + 1 }}. {{ item.title }} </template>

          <template #body>
            <template v-if="item.list && item.list.length">
              <ul
                class="pl-6 md:pl-12 lg:pl-24 space-y-2 md:space-y-3 lg:space-y-4"
              >
                <accordion-item
                  v-for="(subitem, subindex) of item.list"
                  :key="subindex"
                >
                  <template #header>
                    <span
                      class="font-medium font-el-messiri text-base md:text-2xl"
                    >
                      {{ subitem.title }}
                    </span>
                  </template>

                  <template #body>
                    <div
                      class="space-y-2 md:space-y-3"
                      v-html="subitem.description"
                    ></div>
                  </template>
                </accordion-item>
              </ul>
            </template>

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

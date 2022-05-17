import { UserName, Email, Phone } from "@/types/commonTypes";
// Ports were added to tell otside layers what inner layers need from them using interfaces;
export interface ContactUsService {
  // eslint-disable-next-line no-unused-vars
  contactUsRequest(contactUsInfo: ContactUsInfo): void;
}

export interface ContactUsInfo {
  username: UserName;
  email: Email;
  phone: Phone;
  message: string;
}

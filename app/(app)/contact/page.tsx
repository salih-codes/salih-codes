import type { Metadata } from "next";
import type React from "react";
import ContactScreen from "@/modules/contact/templates";

export const metadata: Metadata = {
  title: "Contact | Salih.codes",
};
export default function ContactPage() {
  return <ContactScreen />;
}

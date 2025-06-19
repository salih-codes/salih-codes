import type { Metadata } from "next";
import type React from "react";
import ContactScreen from "@/modules/contact/templates";

export const metadata: Metadata = {
  title: "Ways to reach Mohammed Salih",
};
export default function ContactPage() {
  return <ContactScreen />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | John Chloe — WordPress, Shopify & Webflow",
  description:
    "Start your WordPress, Shopify, or Webflow project. Send project details and get a reply within 24 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

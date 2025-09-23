import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "../components/vendor/ph-provider";

export const metadata: Metadata = {
  title: "Expenses Tracker",
  description: "Track your expenses with ease!",
};

export const dynamic = "force-dynamic"; // Optional if you have dynamic server-side logic

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-200">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}

import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";
export const metadata = {
  title: "AI Viral Video Generator and Editor",
  description: "Created By Karnati Ashwin",
};

const outfit = Outfit({subsets:['latin']})
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
      className={outfit.className}
      >
        <Provider>
        {children}
        <Toaster/>
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}

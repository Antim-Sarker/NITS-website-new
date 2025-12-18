// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nazihar IT Solution Limited",
  description: "NITS is a new way to create and manage your brand.",
  // Add the icons property to include your favicon
  icons: {
    icon: "/logo.png", // Path to your favicon.ico in the public directory
    apple: "/apple-touch-icon.png", // Path to your Apple Touch Icon in the public directory
    // You can add more icon sizes/types here if you have them, e.g.:
    // shortcut: '/shortcut-icon.png',
    // other: [
    //   { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
    //   { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
              {children}
            </main>
            <footer className="flex w-full items-center justify-center py-3"></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}

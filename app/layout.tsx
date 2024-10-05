"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("Injecting chat support script");

    (function (a: Document, b: string, c: any, d: string) {
      console.log("Chat script initialization function called");

      c[d] =
        c[d] ||
        function () {
          (c[d].q = c[d].q || []).push(arguments);
        };
      c["_lsAlias"] = c[d];
      const e = a.createElement(b) as HTMLScriptElement;
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://app.chatsupport.co/api/client/get/script/LS-e127443f";
      const f = function () {
        const g = a.getElementsByTagName(b)[0];
        console.log("Inserting chat script into DOM");
        g.parentNode?.insertBefore(e, g);
      };
      if (a.readyState === "complete") {
        f();
      } else {
        c.addEventListener("load", f);
      }
    })(document, "script", window, "_ls");

    (window as any)._ls("init", { projectId: "LS-e127443f" });
  }, []);

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-200 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

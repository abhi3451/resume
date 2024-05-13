import Link from "next/link";
import React from "react";
import "../app/globals.css";
import { MdArrowUpward } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <div className="w-full flex justify-center  ">
        <Link href="/#home" className="  mb-10 px-4 text-center text-gray-100">
          <div className="border rounded-full h-12 w-12 flex justify-center cursor-pointer  hover:bg-slate-800 ">
            <MdArrowUpward className="text-[36px] transition p-1 duration-300  animate-bounce" />
          </div>
        </Link>
      </div>

      <footer className="mb-10 px-4 text-center text-gray-900 dark:text-gray-500">
        <small className="mb-2 block text-xs">
          &copy; 2024 Abhishek. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </footer>
    </>
  );
}

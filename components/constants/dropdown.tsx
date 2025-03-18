/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  FileText,
  Layers,
  Scan,
  Shield,
  FileCheck,
  FileLock,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  //   {
  //     title: "Compress",
  //     items: [{ name: "Compress PDF", icon: FileText, link: "/compress-pdf" }],
  //   },
  {
    title: "Convert to PDF",
    items: [
      { name: "Word to PDF", icon: FileText, link: "/word-to-pdf" },
      { name: "Excel to PDF", icon: FileText, link: "/excel-to-pdf" },
      { name: "PPT to PDF", icon: FileText, link: "/ppt-to-pdf" },
      { name: "JPG to PDF", icon: FileText, link: "/jpg-to-pdf" },
    //   { name: "PDF OCR", icon: Scan, link: "/pdf-ocr" },
    ],
  },
  {
    title: "Convert from PDF",
    items: [
      { name: "PDF to Word", icon: FileText, link: "/pdf-to-word" },
      { name: "PDF to Excel", icon: FileText, link: "/pdf-to-excel" },
      { name: "PDF to PPT", icon: FileText, link: "/pdf-to-ppt" },
      { name: "PDF to JPG", icon: FileText, link: "/pdf-to-jpg" },
    ],
  },
  {
    title: "Convert",
    items: [
      { name: "PDF Converter", icon: Layers, link: "/convert-pdf" },
      { name: "AI PDF Summarizer", icon: FileText, link: "/ai-pdf-summarizer" },
      { name: "Translate PDF", icon: FileText, link: "/translate-pdf" },
      {
        name: "AI Question Generator",
        icon: FileText,
        link: "/ai-question-generator",
      },
    ],
  },
  {
    title: "Organize",
    items: [
      { name: "Merge PDF", icon: Layers, link: "/merge-pdf" },
      { name: "Split PDF", icon: Layers, link: "/split-pdf" },
      { name: "Rotate PDF", icon: Layers, link: "/rotate-pdf" },
      { name: "Delete PDF Pages", icon: Layers, link: "/delete-pdf-pages" },
      { name: "Extract PDF Pages", icon: Layers, link: "/extract-pdf-pages" },
    ],
  },
  {
    title: "View & Edit",
    items: [
      { name: "Edit PDF", icon: FileText, link: "/edit-pdf" },
      { name: "PDF Annotator", icon: FileText, link: "/pdf-annotator" },
      { name: "PDF Reader", icon: FileText, link: "/pdf-reader" },
      { name: "Number Pages", icon: FileText, link: "/number-pages" },
      { name: "Crop PDF", icon: FileText, link: "/crop-pdf" },
      { name: "Redact PDF", icon: FileText, link: "/redact-pdf" },
      { name: "Watermark PDF", icon: FileText, link: "/watermark-pdf" },
    ],
  },

//   {
//     title: "Sign",
//     items: [
//       { name: "Sign PDF", icon: FileCheck, link: "/sign-pdf" },
//       {
//         name: "Request Signatures (Sign.com)",
//         icon: FileCheck,
//         link: "/request-signatures",
//       },
//     ],
//   },
//   {
//     title: "More",
//     items: [
//       { name: "Unlock PDF", icon: Shield, link: "/unlock-pdf" },
//       { name: "Protect PDF", icon: FileLock, link: "/protect-pdf" },
//       { name: "Flatten PDF", icon: Shield, link: "/flatten-pdf" },
//       { name: "Scan", icon: Scan, link: "/scan" },
//     ],
//   },
];

const NavigationMenuComponent = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="nav-link">
            PDF Tools
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[900px] bg-white fixed left-0 h-screen overflow-y-auto z-50 md:relative md:h-auto md:overflow-visible">
              {menuItems.map((menuItem) => (
                <div
                  key={menuItem.title}
                  title={menuItem.title}
                  className="flexCol items-start justify-items-start">
                  {menuItem.title}
                  {menuItem.items.map((item, i) => (
                    <NavigationMenuLink
                      asChild
                      key={i}
                      className="flex group  hover:bg-rose-500 hover:text-white transition">
                      <div className="flex items-center gap-2">
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 px-3 py-2 rounded-md ">
                          <item.icon size={16} className="hover:text-white" />
                          {item.name}
                        </Link>
                      </div>
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;

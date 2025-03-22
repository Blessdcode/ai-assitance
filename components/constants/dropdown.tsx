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
import { cn } from "@/lib/utils";

const menuItems = [
  //   {
  //     title: "Compress",
  //     items: [{ name: "Compress PDF", icon: FileText, link: "/compress-pdf" }],
  //   },
  {
    title: "Convert to PDF",
    id: "toPdf",
    items: [
      { name: "Word to PDF", icon: FileText, link: "/convert" },
      { name: "Excel to PDF", icon: FileText, link: "/convert" },
      { name: "PPT to PDF", icon: FileText, link: "/convert" },
      { name: "JPG to PDF", icon: FileText, link: "/convert" },
      //   { name: "PDF OCR", icon: Scan, link: "/pdf-ocr" },
    ],
  },
  {
    title: "Convert from PDF",
    id: "fromPdf",
    items: [
      { name: "PDF to Word", icon: FileText, link: "/convert" },
      { name: "PDF to Excel", icon: FileText, link: "/convert" },
      { name: "PDF to PPT", icon: FileText, link: "/convert" },
      { name: "PDF to JPG", icon: FileText, link: "/convert" },
    ],
  },
  {
    title: "Convert",
    id: "convert",
    items: [
      { name: "PDF Converter", icon: Layers, link: "/convert" },
      { name: "AI PDF Summarizer", icon: FileText, link: "/convert" },
      { name: "Translate PDF", icon: FileText, link: "/convert" },
      {
        name: "AI Question Generator",
        icon: FileText,
        link: "/ai-question-generator",
      },
    ],
  },
  {
    title: "Organize",
    id: "organize",
    items: [
      { name: "Merge PDF", icon: Layers, link: "/convert" },
      { name: "Split PDF", icon: Layers, link: "/convert" },
      { name: "Rotate PDF", icon: Layers, link: "/convert" },
      { name: "Delete PDF Pages", icon: Layers, link: "/convert" },
      { name: "Extract PDF Pages", icon: Layers, link: "/convert" },
    ],
  },
  {
    title: "View & Edit",
    id: "edit",
    items: [
      { name: "Edit PDF", icon: FileText, link: "/convert" },
      { name: "PDF Annotator", icon: FileText, link: "/convert" },
      { name: "PDF Reader", icon: FileText, link: "/convert" },
      { name: "Number Pages", icon: FileText, link: "/convert" },
      { name: "Crop PDF", icon: FileText, link: "/convert" },
      { name: "Redact PDF", icon: FileText, link: "/convert" },
      { name: "Watermark PDF", icon: FileText, link: "/convert" },
    ],
  },

  //   {
  //     title: "Sign",
  // id:""
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
  // id:""
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
                  className="flexCol items-start justify-items-start ">
                  <div
                    className={cn(
                      "p-2 rounded-lg text-white mb-3",
                      menuItem.id === "toPdf" && "bg-rose-500",
                      menuItem.id === "fromPdf" && "bg-green-500",
                      menuItem.id === "convert" && "bg-blue-500",
                      menuItem.id === "organize" && "bg-pink-500",
                      menuItem.id === "edit" && "bg-indigo-500"
                    )}>
                    {menuItem.title}
                  </div>
                  {menuItem.items.map((item, i) => (
                    <NavigationMenuLink
                      asChild
                      key={i}
                      className={cn(
                        "flex group  hover:text-white transition",
                        menuItem.id === "toPdf" && "hover:bg-rose-500",
                        menuItem.id === "fromPdf" && "hover:bg-green-500",
                        menuItem.id === "convert" && "hover:bg-blue-500",
                        menuItem.id === "organize" && "hover:bg-pink-500",
                        menuItem.id === "edit" && "hover:bg-indigo-500"
                      )}>
                      <div className="flex items-center gap-2">
                        <Link
                          href={item.link}
                          className="flex items-center gap-2  rounded-lg ">
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

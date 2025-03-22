import Image from "next/image";
import React from "react";
import { Header } from "./header";

interface DetailsProps {
  image: string;
  title: string;
  para: string;
}

const PdfDetails = ({ image, title, para }: DetailsProps) => {
  return (
    <section className="boxWidth marginY space-y-5">
      <Header
        label="Our CompanionAI PDF Summarizer is designed to make your life easier. With just a few clicks, you can summarize chapters, documents, or entire PDFs into clear, concise notes. Perfect for students, researchers, and anyone needing quick access to essential information."
        title="Summarize PDFs with AI—Fast and Easy"
      />
      <div className="flex flex-col md:flex-row items-center  md:justify-center boxMar">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src={image}
            // fill
            width={400}
            height={400}
            alt="hero-Image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center md:items-start space-y-5 w-full md:w-1/2 text-center md:text-left">
          <h2 className="heading3 tracking-tighter font-bold">{title}</h2>
          <p className=" text-gray-700">{para}</p>
        </div>
      </div>
    </section>
  );
};

export default PdfDetails;

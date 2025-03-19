import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroPage = () => {
  return (
    <section className="boxWidth marginY boxMar">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <div className="flex flex-col items-center md:items-start space-y-5 w-full md:w-1/2 text-center md:text-left">
          <h1 className="heading1 tracking-tighter font-bold">
            Making{" "}
            <span className="bg-gradient-to-r from-rose-500 to-rose-900 bg-clip-text text-transparent">
              Document
            </span>{" "}
            Easy to use
          </h1>
          <p className=" text-gray-700">
            Get the best tools to interact with your PDFs including summarizing
            by AI. All the tools you’ll need to be more productive and work
            smarter with documents.
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild variant="outline" className="border border-blue-500 hover:bg-blue-500 hover:text-white">
              <Link href="/payment">Start for free</Link>
            </Button>
            <Button asChild className="btn-primary">
              <Link href="/covert">Explore Services</Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/doc2.svg"
            // fill
            width={700}
            height={700}
            alt="hero-Image"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Services = () => {
  return (
    <section className="boxWidth marginY ">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/doc4.svg"
            // fill
            width={400}
            height={400}
            alt="hero-Image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center md:items-start space-y-5 w-full md:w-1/2 text-center md:text-left">
          <h2 className="heading3 tracking-tighter font-bold">
            Manage Documents—All in One Place
          </h2>
          <p className=" text-gray-700">
            No more working across multiple apps! Save time by storing,
            managing, and sharing files across devices—straight from our web
            platform.
          </p>

          <Button asChild variant="link" className="">
            <Link href="/payment">
              Start for free
              <MoveRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="boxWidth boxMar h-[70vh] flex flex-col justify-center items-center space-y-6">
      <div>
        <Image
          src="/file.svg"
          height={400}
          width={400}
          alt="page not found"
          className="w-full"
        />
      </div>
      <h2>Oops! page not found</h2>
      <p>Could not find requested resource</p>
      <Button className="rounded-full text-white btn-primary" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}

import Summary from "@/components/client/summary/summary";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

const page = async () => {
  return (
    <section className="min-h-screen boxWidth boxMar">
      <Summary />
    </section>
  );
};

export default page;

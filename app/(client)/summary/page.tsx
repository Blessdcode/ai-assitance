import Summary from "@/components/client/summary/summary";
import UploadPdf from "@/components/client/summary/uploadPdf";
// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

const page = async () => {
  return (
    <section className="min-h-screen boxWidth">
      <Summary />
      <UploadPdf
        onSubmit={onSubmit}
        
      />
    </section>
  );
};

export default page;

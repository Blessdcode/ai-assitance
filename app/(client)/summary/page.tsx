import Summary from "@/components/client/summary";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  console.log(user)

  if (!user) {
     redirect("/sign-in");
  }
  return (
    <div>
      <Summary />
    </div>
  );
};

export default page;

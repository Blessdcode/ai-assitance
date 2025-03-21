import HeroPage from "@/components/home/heroPage";
import Services from "@/components/home/services";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const user = await currentUser();
  console.log(user);

  return (
    <>
      <HeroPage />
      <Services />
    </>
  );
}

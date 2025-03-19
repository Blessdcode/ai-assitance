import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="xl:max-w-[1280px] w-full m-auto p-2 flexCenter">
      <SignUp />;
    </div>
  );
}

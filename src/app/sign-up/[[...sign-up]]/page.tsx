import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen w-full items-center justify-center">
      <SignUp path="/sign-up" />
    </div>
  );
}

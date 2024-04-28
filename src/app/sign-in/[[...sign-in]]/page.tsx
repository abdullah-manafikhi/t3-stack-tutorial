import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen w-full items-center justify-center">
      <SignIn path="/sign-in" />
    </div>
  );
}

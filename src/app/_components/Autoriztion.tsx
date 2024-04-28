"use client";
import { useUser, SignOutButton, SignInButton } from "@clerk/nextjs";
import React from "react";

const Autoriztion = () => {
  const user = useUser();
  console.log(user);

  return (
    <div>
      {user.isSignedIn && <SignOutButton />}
      {!user.isSignedIn && <SignInButton />}
    </div>
  );
};

export default Autoriztion;

import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const SignInPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }
  return <SignInView />;
};

export default SignInPage;

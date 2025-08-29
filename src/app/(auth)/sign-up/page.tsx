import { Card } from "@/components/ui/card";
import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";
import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const SignUpPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }
  return <SignUpView />;
};

export default SignUpPage;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { auth } from "@/lib/auth";
import { error } from "console";

export default function Home() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: (error) => {
          window.alert("Error signing up");
        },
        onSuccess: () => {
          window.alert("Success");
        },
      }
    );
  };

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password
    },
  {
    onError: (error) => {
      window.alert("Error signing in");
    },
    onSuccess: () => {
      window.alert("Successfully signed in");
    }
  })
  }

  if (session) {
    return (
      <div className="flex flex-col gap-y-4 w-xl justify-center items-center">
        <p>You are logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4 w-xl justify-between items-center">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>Sign In</Button>
      </div>
      <div className="p-4 flex flex-col gap-y-4 w-xl justify-between items-center">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Create User</Button>
      </div>
    </div>
  );
}

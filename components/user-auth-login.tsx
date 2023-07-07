"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";

import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IUser {
  email: string;
  password: string;
}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const res = await signIn<"credentials">("credentials", {
      ...user,
      redirect: false,
    });

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);

    setUser({
      email: "",
      password: "",
    });
    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <Button>
            {isLoading && (
              <Icons.spinner className="mr-2 h4 w-4 animate-spin" />
            )}
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
}

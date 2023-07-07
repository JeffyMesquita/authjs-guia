import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";

import CredentialProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  // @see https://github.com/prisma/issues/16117
  adapter: PrismaAdapter(db as any),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "jsmith" },
      },
      async authorize(credentials, req): Promise<any> {
        console.log("Authorize method", credentials);

        const user = {
          email: "jsmith@email.com",
          password: "password",
          name: "John",
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET!,
  debug: process.env.NODE_ENV === "development",
};

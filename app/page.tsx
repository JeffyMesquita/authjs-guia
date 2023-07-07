import { getCurrentUser } from "@/lib/session";

import Link from "next/link";

import ClientComponentAuth from "@/components/client-component-auth";
import ServerComponentAuth from "@/components/server-component-auth";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      <section className="space-y-2 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-12">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4">
          <div className="flex gap-2">
            {" "}
            <Link
              href="https://twitter.com/_Jeferson___"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no Twitter
            </Link>
            <Link
              href="https://www.threads.net/@jeferson.mesquita"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no Threads
            </Link>
            <Link
              href="https://www.instagram.com/jeferson.mesquita/"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Segue no Instagram
            </Link>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
            O melhor do Next.js 12, Next-Auth, Prisma e Shadcn-ui
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-base">
            Este é um projeto de exemplo para demonstrar como usar Next.js 13,
            Next-Auth, Prisma e Shadcn-ui.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Entrar
            </Link>
            <Link
              href="https://github.com/jeffymesquita"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
            {user !== undefined && (
              <Link
                href="/api/auth/signout"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Sair
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            {/* Components */}
            <ClientComponentAuth />
            <ServerComponentAuth />
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-300 py-8 dark:bg-transparent md:py-12"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Tech Stack
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg">
            Este projeto traz várias bibliotecas e um aplicativo moderno, com
            recursos atualizados do Next.js 13 e utilizando a melhor
            &quot;não&quot; biblioteca do comento shadcn/ui
          </p>
        </div>
      </section>
    </>
  );
}

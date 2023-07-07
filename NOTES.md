# Starting the project with NEXT.JS

## What is Next.js?

Next.js is a React framework that allows us to build server-side rendered React
applications. It is a framework that is built on top of React and Node.js
and it is used to build production-ready, full-stack React applications.

## Why Next.js?

Next.js is a framework that is built on top of React and Node.js and it is us
ed to build production-ready, full-stack React applications. It is a React framework
that allows us to build server-side rendered React applications.

## How to create a Next.js project?

To create a Next.js project, we can use the following command:

```bash
npx create-next-app@latest
```

## Using ShadcnUi with Next.js

To use ShadcnUi with Next.js, we need to install the following dependencies:

```bash
npx shadcn-ui@latest init
```

Some configs:

<h1 align="left">
    <img alt="configs" title="ShadcUI Configs" src=".github/configs.png" />
</h1>

## After install ShadcnUi, you can use the following commands to add a component:

```bash
npx shadcn-ui@latest add `any-component-name`
```

or

```bash
npx shadcn-ui@latest add
```

And select the component you want to add.

## How to run the project?

To run the project, we can use the following command:

```bash
npm run dev
```

## Working with Prisma

Prisma is a tool that allows us to interact with the database using a type-safe
query language called Prisma Client. It is a tool that allows us to interact
with the database using a type-safe query language called Prisma Client.

## Install Prisma

To install Prisma, we can use the following command:

```bash
npm install prisma --save-dev
```

## How to use Prisma?

To use Prisma, we need to create a file called `schema.prisma` in the root of
the project. In this file, we can define the database schema and the Prisma
Client will generate the database schema.

## Prisma with MongoDB

To use Prisma with MongoDB, we need to run the following command:

```bash
npx prisma init --datasource-provider mongodb
```

## How to connect Prisma with MongoDB?

To connect Prisma with MongoDB, we need to run the following command:

```bash
npx prisma db push
```

## How to generate the database schema?

To generate the database schema, we can use the following command:

```bash
npx prisma generate
```

## Using NextAuth.js with Next.js

NextAuth.js is a complete open source authentication solution for Next.js
applications. It is a complete open source authentication solution for Next.js
applications.

## Install NextAuth.js

To install NextAuth.js, we can use the following command:

```bash
npm install next-auth
```

## How to use NextAuth.js with MongoDB?

To use NextAuth.js with MongoDB, we need to install the following dependencies:

```bash
npm install @prisma/client @auth/prisma-adapter
```

And we need to edit the file `prisma/schema.prisma`, how the next example:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Account {
  id String @id @default(auto()) @db.ObjectId @map("_id")
  userId String @db.ObjectId
  type String
  provider String
  providerAccountId String
  refresh_token String? @db.String
  access_token String? @db.String
  expires_at Int?
  token_type String?
  scope String?
  id_token String? @db.String
  session_state String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model User {
  id String @id @default(auto()) @db.ObjectId @map("_id")
  name String?
  email String? @unique
  emailVerified DateTime?
  image String?
  hashedPassword String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  accounts Account[]
}
```

And after run the following command:

```bash
npx prisma db push
```

## Using bcrypt to hash the password

bcrypt.js is a library that allows us to hash the password. It is a library
that allows us to hash the password.

## Install bcrypt

To install bcrypt.js, we can use the following command:

```bash
npm install bcrypt
```

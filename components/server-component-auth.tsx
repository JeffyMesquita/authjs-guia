import { getCurrentUser } from "@/lib/session";

export default async function ServerComponentAuth() {
  const user = await getCurrentUser();

  return (
    <>
      {user !== undefined && (
        <div className="bg-slate-500 border gap-2 h-60 max-w-md overflow-scroll text-white">
          <h2>Server Component</h2>
          <pre>{JSON.stringify(user)}</pre>
        </div>
      )}
    </>
  );
}

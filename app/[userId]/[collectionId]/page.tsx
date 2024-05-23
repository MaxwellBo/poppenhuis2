import { QueryPreservingLink } from "@/app/QueryPreservingLink";
import { loadCollection } from "@/app/db";
import { Items } from "./ui";

export default async function Page({
  params,
  searchParams
}: {
  params: { userId: string, collectionId: string },
  searchParams: { manifest?: string }
}
) {
  const { collection, user } = await loadCollection({ params, searchParams });

  return <article>
    <header>
      <h1>
        <QueryPreservingLink to="/">poppenhuis</QueryPreservingLink> / <QueryPreservingLink to={`/${user.id}`}>{user.name}</QueryPreservingLink> / {collection.name}
      </h1>
    </header>
    <Items collection={collection} user={user} />
  </article>
}


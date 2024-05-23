import { QueryPreservingLink } from "../QueryPreservingLink";
import { User, loadUser } from "../db"
import { CollectionRow } from "./[collectionId]/ui";

export default async function Page({
  params,
  searchParams
}: {
  params: { userId: string },
  searchParams: { manifest?: string }
}) {
  const user: User = await loadUser({ params, searchParams })

  return (
    <article>
      <header>
        <h1>
          <QueryPreservingLink to="/">poppenhuis</QueryPreservingLink> / {user.name}
        </h1>
        <div className='padding-bottom-1rem'>{user.bio}</div>
      </header>
      {user.collections.map((collection) =>
        <CollectionRow key={collection.id} collection={collection} user={user} />)}
    </article>
  );
}
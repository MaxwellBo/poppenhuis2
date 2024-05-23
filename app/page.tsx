import { useSearchParams } from "next/navigation";
import React from "react";
import { QueryPreservingLink } from "./QueryPreservingLink";
import { loadUsers } from "./manifest";
      

export default async function Home({
  searchParams,
}: { searchParams: { manifest?: string }}) {
  const users = await loadUsers({ searchParams })

  return (
    <main>
      <article>
        <header>
          <h1>
            poppenhuis
          </h1>
        </header>
        <p className="short">
          poppenhuis (<i>Dutch for &quot;dollhouse&quot;</i>) is a site for displaying collections of 3D models.
          <br />
          <br />
          It was inspired by <a href="https://www.are.na/">are.na</a> and the wonderful <a href="https://www.dayroselane.com/hydrants">Hydrant&nbsp;Directory</a>.
          <br />
          <br />
          The following users have collections:
        </p>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <QueryPreservingLink to={user.id}>{user.name}</QueryPreservingLink>
            </li>
          ))}
        </ul>
        <br />
        <details>
          <summary>Want to host your own content here?</summary>
          {/* <ThirdPartyManifests /> */}
        </details>
      </article>
    </main>
  );
}

"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { MANIFEST_SCHEMA } from "./db";

const EXAMPLE_MANIFEST_URL = 'https://raw.githubusercontent.com/MaxwellBo/maxwellbo.github.io/master/poppenhuis-manifest.json'

export function ThirdPartyManifests() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname()
  const [manifest, setManifest] = React.useState<string>(searchParams.get('manifest') ?? '');
  const [fetchResult, setFetchResult] = React.useState<string | undefined>(undefined);
  const [fetchStatus, setFetchStatus] = React.useState<JSX.Element>(<div />);

  const loadManifest = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch manifest: ${response.statusText}`);
      }
      setFetchResult(JSON.stringify(await response.json(), null, 2));
      setFetchStatus(<span className='green'>SUCCESS, 3rd-party manifest spliced into the 1st-party manifest</span>);
      router.push(pathname + '?manifest=' + encodeURIComponent(url));
    } catch (e) {
      setFetchStatus(<span className='red'>{"ERROR: " + (e as any).message}</span>);
      setFetchResult(undefined);
    }
  }

  return (
    <>
      <h3>1st party manifest</h3>
      This site is a <a href="https://www.robinsloan.com/notes/home-cooked-app/">homecooked meal</a>, built primarily for my friends and family.
      Reach out to <a href="https://twitter.com/_max_bo_">me on Twitter</a> if you&apos;d like me to host your collection.
      <br />
      <br />
      <h3>3rd party manifests</h3>
      You can view and share your own content on this site with manifest files.
      <br />
      <br />
      Your 3rd party manifest will be merged with the site&apos;s 1st party manifest, and the manifest URL will be stored in <code>?manifest=</code> query param so you can share your collections with others.
      <br />
      <br />
      <details>
        <summary>Manifest schema</summary>
        <pre>{MANIFEST_SCHEMA}</pre>
      </details>
      <input style={{ width: "80%", fontSize: 13 }} placeholder={EXAMPLE_MANIFEST_URL} value={manifest} onChange={e => setManifest(e.target.value)} />
      <br />
      <button disabled={!manifest} onClick={() => loadManifest(manifest)}>Load custom manifest</button>
      <br />
      <button onClick={() => {
        setManifest(EXAMPLE_MANIFEST_URL)
        loadManifest(EXAMPLE_MANIFEST_URL)
      }}>Load placeholder manifest</button>

      <br />
      <br />
      {fetchStatus}
      <pre className='truncate border'>{fetchResult}</pre>
    </>
  )
}
"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function QueryPreservingLink(props: { to: string, children: React.ReactNode }) {
  const searchParams = useSearchParams();
  return <Link href={{ pathname: props.to, search: searchParams.toString() }}>{props.children}</Link>
}
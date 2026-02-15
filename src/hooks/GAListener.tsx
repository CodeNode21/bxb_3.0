"use client";
// https://medium.com/@aashari/google-analytics-ga4-implementation-guide-for-next-js-16-a7bbf267dbaa
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GAListener({ gaId }:{gaId:string}) {
  const pathname=usePathname();
  const searchParams=useSearchParams();

  useEffect(() => {
     if (typeof window === "undefined") return;
    // @ts-ignore
    if (!window.gtag) return;

    const qs = searchParams?.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;

    // @ts-ignore
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}
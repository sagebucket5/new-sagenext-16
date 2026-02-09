'use client';
import dynamic from "next/dynamic";
import PagesNotHaveTopbar from '@lib/topbarNotHaveUrls';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Header from "@components/Header";

const BottomTopbar = dynamic(() => import("@components/BottomTopBar"));
const NewFooter = dynamic(() => import("@components/Footer"));

function Layout({ children }) {
  const pathname = usePathname();
  const shouldIncludeTopbar = !PagesNotHaveTopbar.includes(pathname);

  useEffect(() => {
    // Normalize route
    let routeKey = pathname.replace(/^\/+|\/+$/g, ''); // remove leading/trailing slashes
    if (routeKey === '') routeKey = 'home'; // homepage

    // Detect base group (first segment)
    const routeGroup = routeKey.split('/')[0] || 'home';

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === 1 &&
            node.tagName === "SCRIPT" &&
            node.type === "application/ld+json"
          ) {
            const id = node.getAttribute("id") || "";
            if (
              !id.startsWith(`page_${routeGroup}_`) &&
              !id.startsWith("common_")
            ) {
              node.remove();
            }
          }
        });
      }
    });

    observer.observe(document.head, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);


  return (
    <>
      {shouldIncludeTopbar && <Header />}
      <main lang="en-US">{children}</main>
      <NewFooter />
      <BottomTopbar />
    </>
  );
}

export default Layout;
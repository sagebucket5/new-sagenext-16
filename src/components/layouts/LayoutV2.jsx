'use client';

import dynamic from "next/dynamic";
import PagesNotHaveTopbar from '@lib/topbarNotHaveUrls';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from "@components/Header";
import { openZohoChat } from "@/lib/zohoSalesIq";

const BottomTopbar = dynamic(() => import("@components/BottomTopBar"));
const NewFooter = dynamic(() => import("@components/Footer"));

function Layout({ children }) {
  const pathname = usePathname();
  const shouldIncludeTopbar = !PagesNotHaveTopbar.includes(pathname);

  const [chatLoading, setChatLoading] = useState(false);

  useEffect(() => {
    let routeKey = pathname.replace(/^\/+|\/+$/g, '');
    if (routeKey === '') routeKey = 'home';
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

  const handleChatClick = async () => {
    if (chatLoading) return;
    try {
      setChatLoading(true);
      await openZohoChat();
    } catch (e) {
      console.error(e);
      // optional: show toaster message
      // toast.error("Chat failed to load. Please try again.");
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <>
      {shouldIncludeTopbar && <Header />}
      <main lang="en-US">{children}</main>
      <NewFooter />
      <BottomTopbar />
      <div className="relative">
        <button type="button" onClick={handleChatClick} disabled={chatLoading}
          className="fixed bottom-5 right-5 z-[9999] rounded-full px-4 py-3 border-white bg-yellow-500 text-black shadow-[1px_1px_10px_-1px_#aaa] cursor-pointer"
        >
          {chatLoading ? "Opening…" :
            <div className="">
              <svg stroke="white" fill="white" strokeWidth="0" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><g id="Chat_1"><path d="M3.316,19.937A1.251,1.251,0,0,1,2.065,18.69l0-1.716L2.068,6.56a2.5,2.5,0,0,1,2.5-2.5H19.44a2.5,2.5,0,0,1,2.5,2.5v8.41a2.5,2.5,0,0,1-2.5,2.5H6.918a1.49,1.49,0,0,0-1.06.439L4.2,19.57A1.246,1.246,0,0,1,3.316,19.937ZM4.568,5.062a1.5,1.5,0,0,0-1.5,1.5L3.06,16.973l0,1.714a.25.25,0,0,0,.427.176L5.151,17.2a2.482,2.482,0,0,1,1.767-.732H19.44a1.5,1.5,0,0,0,1.5-1.5V6.562a1.5,1.5,0,0,0-1.5-1.5Z"></path></g></svg>
            </div>
          }
        </button>
        <div className="absolute flex flex-col text-left justify-center text-nowrap right-12 -top-10 w-[200px] h-[60px] p-[10px_15px] bg-white rounded-sm border border-gray-400 shadow-[1px_1px_10px_-1px_#aaa]">
          <p>We're Online!</p>
          <p className="!text-[13px] text-gray-600">How may I help you today?</p>
        </div>
      </div>
    </>
  );
}

export default Layout;
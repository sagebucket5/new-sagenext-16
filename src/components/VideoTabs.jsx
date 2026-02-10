"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function VideoTabs({ Classes, tabs = [], videos = [] }) {
  const [activeTab, setActiveTab] = useState(tabs?.[0] || "All");

  const filtered = useMemo(() => {
    const t = String(activeTab || "").toLowerCase();
    if (t === "all") return videos;

    return videos.filter(
      (v) => String(v.heading || "").toLowerCase() === t
    );
  }, [activeTab, videos]);

  return (
    <>
      {/* Tabs header */}
      <div className={`${Classes.ContentRef} text-center mb-5`}>
        <div
          role="tablist"
          aria-label="Video categories"
          className={Classes["button-title"]}
        >
          {tabs.map((tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={`${Classes["button-box"]} ${
                  isActive ? Classes["activeTab"] : ""
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className={`${Classes["result"]} mb-4`}>Showing Recent</div>

      {/* Single panel */}
      <div role="tabpanel" className={Classes["video-card"]}>
        {filtered.length === 0 ? (
          <p className="text-center">No videos found</p>
        ) : (
          filtered.map((item, idx) => (
            <div key={idx} className={Classes["video-card-1"]}>
              <div className={Classes["video-cont"]}>
                <div className={Classes["video-div"]}>
                  <iframe
                    src={item.link}
                    className={Classes["video-thumbnail"]}
                    allowFullScreen
                  />
                </div>

                <div className={Classes["content"]}>
                  <Link
                    href={item.target}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className={Classes["sub-title"]}>
                        {item.heading}
                      </span>

                      <h3
                        className={Classes["entry-title"]}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />

                      <p
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
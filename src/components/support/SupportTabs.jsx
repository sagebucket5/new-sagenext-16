'use client';

import { useState } from 'react';
import PopularPost from '@components/support/PopularPost';
import RecentPost from '@components/support/RecentPost';

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'popular', label: 'Popular' },
  { key: 'recent', label: 'Recent' },
];

export default function SupportTabs({ recentPosts }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="w-full mt-8">
      {/* Tabs header */}
      <div
        role="tablist"
        aria-label="Support tabs"
        className="flex border-b border-gray-200"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex-1 px-4 py-3 text-sm font-medium text-center transition
                ${isActive
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'border-b-2 border-transparent text-gray-600 hover:text-gray-900'}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <div className="pt-6">
        {activeTab === 'all' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentPosts.map((post) => (
                <RecentPost key={post.id} post={post} />
              ))}
            </div>

            <div className="mt-6">
              <PopularPost />
            </div>
          </>
        )}

        {activeTab === 'recent' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <RecentPost key={post.id} post={post} />
            ))}
          </div>
        )}

        {activeTab === 'popular' && (
          <div>
            <PopularPost />
          </div>
        )}
      </div>
    </section>
  );
}
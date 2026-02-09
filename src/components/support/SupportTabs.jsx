'use client';
import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PopularPost from '@components/support/PopularPost';
import RecentPost from '@components/support/RecentPost';

export default function SupportTabs({ recentPosts }) {
    const [value, setValue] = useState('all');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="w-full mt-8">
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="support tabs"
                variant="fullWidth"
                className="border-b border-gray-200"
            >
                <Tab value="all" label="All" />
                <Tab value="popular" label="Popular" />
                <Tab value="recent" label="Recent" />
            </Tabs>

            <Box className="pt-6">
                {value === 'all' && (
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

                {value === 'recent' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {recentPosts.map((post) => (
                            <RecentPost key={post.id} post={post} />
                        ))}
                    </div>
                )}
                {value === 'popular' && (
                    <div>
                        <PopularPost />
                    </div>
                )}

            </Box>
        </Box>
    );
}
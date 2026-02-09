import React from 'react'
import PagesNotHaveTopbar from '@lib/topbarNotHaveUrls';
import { usePathname } from 'next/navigation';
import Header from "@components/Header";
import Head from 'next/head';

const PageTopbar = () => {
    const url = usePathname();
    return (
        <>
            {!PagesNotHaveTopbar.includes(url) ? (
                <Header />
            ) : (
                <Head>
                    <link href="/longform.css" type="text/css" rel="stylesheet" />
                </Head>
            )}
        </>
    );
}

export default PageTopbar
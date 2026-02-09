import React from 'react'
import Classes from "@styles/pages/blog.module.css";
import Link from 'next/link';

const BlogAuthor = ({post, authorLink}) => {
    return (
        <div className={Classes.authorHolder}>
            <Link href={authorLink} target='_blank' className={Classes.imgHolder}>
                <img src={post[0]?._embedded?.author[0]?.avatar_full || post[0]?._embedded?.author[0]?.avatar_urls[96]} />
                <span>written by</span>
                <label>{post[0]?._embedded?.author[0]?.name || "Author"}</label>
            </Link>
            <span className={Classes.authorData}>
                <Link href={authorLink} target='_blank'>
                    <p className='font-semibold! text-[#0d63fd]! text-base!'>About Author</p>
                </Link>
                <label dangerouslySetInnerHTML={{ __html: `${post[0]?._embedded?.author[0]?.description || "No Additional Information Avaliable"}`, }} />
                {
                    authorLink.startsWith('/support') && (
                        <div className='flex gap-1.5'>
                            <Link href="https://www.linkedin.com/in/mohitgupta0077/" target='_blank'>LinkedIn</Link>
                        </div>
                    )
                }
            </span>
        </div>
    )
}

export default BlogAuthor
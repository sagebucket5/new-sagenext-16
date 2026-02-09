'use client';
import Link from 'next/link';
import Image from 'next/image';
import Classes from '@styles/pages/app-dir.module.css';

Image.defaultProps = {
  quality: 100,
  width: 85,
  height: 85,
  objectFit: 'cover',
};

export default function AppPost({ post }) {
  const featuredMedia = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const title = post?.acf?.short_name || 'No title';
  const excerpt = post?.excerpt?.rendered
    ? post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '').substr(0, 150) + '...'
    : 'No description available.';
  const categories = post?._embedded?.['wp:term']?.[0] || [];

  return (
    <aside className={`${Classes.postDataHolderContainer}`}>
      <Link href={`/app-directory/${post.slug}`} className={Classes.postDataHolder}>
        {featuredMedia && (
          <Image
            src={featuredMedia}
            alt={title}
            className="rounded-lg"
            width={100}
            height={100}
            loading="lazy"
          />
        )}

        <h3 className="mt-2">{title}</h3>

        <p className={Classes.postExcerpt}>
          {excerpt}
        </p>
      </Link>

      <span className={`${Classes.tags}`}>
        {categories.map((cat) => (
          <span href={`/app-directory/category/${cat.slug}`} key={cat.id} className="text-[10px] text-blue-600 border-[.5px] border-[#6262627a] rounded-full px-[12px] py-[2px]">
            {cat.name}
          </span>
        ))}
      </span>
    </aside>
  );
}
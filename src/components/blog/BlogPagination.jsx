'use client';
import { useRouter } from 'next/navigation';
import Pagination from '../utils/Pagination';

export default function BlogPagination({ currentPage, totalPages, type, basePath }) {
  const router = useRouter();

  const handleChange = (_, value) => {
    if (type == 'page') {
      router.push(`${basePath}/page/${value}`);
    } else {
      router.push(`${basePath}?page=${value}`);
    }
  };

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onChange={(page) => handleChange(null, page)}
    />
  );
}
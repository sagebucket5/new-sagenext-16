'use client';
import { useRouter } from 'next/navigation';
import { Pagination } from '@mui/material';

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
      count={totalPages}
      page={currentPage}
      color="primary"
      size="large"
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
      siblingCount={0}
      boundaryCount={1}
    />
  );
}
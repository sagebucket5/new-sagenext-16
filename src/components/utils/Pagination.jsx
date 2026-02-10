
"use client";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function getPaginationItems(current, total, siblingCount = 1) {
  if (total <= 1) return [1];

  const first = 1;
  const last = total;

  const left = Math.max(current - siblingCount, first + 1);
  const right = Math.min(current + siblingCount, last - 1);

  const showLeftDots = left > first + 1;
  const showRightDots = right < last - 1;

  const items = [first];

  if (showLeftDots) items.push("…");
  for (let i = left; i <= right; i++) items.push(i);
  if (showRightDots) items.push("…");

  items.push(last);
  return items;
}

export default function Pagination({
  totalPages = 1,
  currentPage = 1,
  onChange,
  siblingCount = 5,
  className = "",
}) {
  const total = Math.max(1, Number(totalPages) || 1);
  const page = clamp(Number(currentPage) || 1, 1, total);

  const items = getPaginationItems(page, total, siblingCount);

  const baseBtn =
    "inline-flex items-center justify-center rounded-md border px-3 py-1.5 outline:none cursor-pointer text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const normalBtn = `${baseBtn} border-gray-200 bg-white text-gray-700 hover:bg-gray-50`;
  const activeBtn = `${baseBtn} border-blue-600 bg-blue-600 text-white hover:bg-blue-700`;
  const ghostBtn = `${baseBtn} border-transparent bg-transparent text-gray-500 hover:bg-gray-50`;

  const goTo = (nextPage) => {
    if (!onChange) return;
    const np = clamp(nextPage, 1, total);
    if (np === page) return;
    onChange(np);
  };

  return (
    <nav
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
      aria-label="Pagination"
    >
      <button
        type="button"
        className={normalBtn}
        onClick={() => goTo(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        Prev
      </button>

      {items.map((it, idx) =>
        it === "…" ? (
          <span key={`dots-${idx}`} className={ghostBtn} aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={it}
            type="button"
            className={it === page ? activeBtn : normalBtn}
            onClick={() => goTo(it)}
            aria-current={it === page ? "page" : undefined}
          >
            {it}
          </button>
        )
      )}

      <button
        type="button"
        className={normalBtn}
        onClick={() => goTo(page + 1)}
        disabled={page >= total}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}
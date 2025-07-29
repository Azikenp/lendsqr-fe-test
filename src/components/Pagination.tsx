import { PaginationProps } from "../types/allTypes";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers: (number | string)[] = [];

  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Always include first two pages
    pageNumbers.push(1, 2);

    if (currentPage > 4) {
      pageNumbers.push("...");
    }

    // Add current page if it's not near start or end
    if (currentPage > 2 && currentPage < totalPages - 1) {
      pageNumbers.push(currentPage);
    }

    if (currentPage < totalPages - 3) {
      pageNumbers.push("...");
    }

    // Always include last two pages
    pageNumbers.push(totalPages - 1, totalPages);
  }

  const uniquePages = Array.from(new Set(pageNumbers));

  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {uniquePages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`px-3 py-1 border rounded ${
              currentPage === page ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

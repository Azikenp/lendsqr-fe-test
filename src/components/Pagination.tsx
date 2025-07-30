import { PaginationProps } from "../types/allTypes";
import prev from "../assets/icons/prev.png";
import next from "../assets/icons/next.png";
import "../scss/Pagination.scss";

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
    <div className="pagination-container">
      <div className="pagination-wrapper">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="prev-btn"
        >
          <img src={prev} alt="prev" />
        </button>

        {uniquePages.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} className="pages-in-btw">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`pages-in-btw ${
                currentPage === page ? "active-page" : ""
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="next-btn"
        >
          <img src={next} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

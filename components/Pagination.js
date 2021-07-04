import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="pt-10 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            rel="previous"
            className="cursor-auto disabled:opacity-50 text-gray-900 dark:text-gray-300 border px-2 py-1 border-gray-900 dark:border-gray-300"
            disabled={!prevPage}
          >
            &larr; Previous
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`}>
            <button
              rel="previous"
              className="text-gray-900 dark:text-gray-300 border px-2 py-1 border-gray-900 dark:border-gray-300"
            >
              &larr; Previous
            </button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next &rarr;
          </button>
        )}
        {nextPage && (
          <Link href={`/page/${currentPage + 1}`}>
            <button
              rel="next"
              className="text-gray-900 dark:text-gray-300 border px-2 py-1 border-gray-900 dark:border-gray-300"
            >
              Next &rarr;
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}

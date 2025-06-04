import { useEffect,useState } from "react";
import { fetchPopularMovies, searchMovies } from "@/lib/api/movies";
import MovieCard from "@/components/MovieCard";
import { useMovieStore } from "@/store";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    movies,
    page,
    totalPages,
    searchQuery,
    setMovies,
    setPage,
    setTotalPages,
    setSearchQuery,
  } = useMovieStore();

  const getMovies = async () => {
    setIsLoading(true);
    const data = searchQuery
      ? await searchMovies(searchQuery, page)
      : await fetchPopularMovies(page);
    setMovies(data.movies);
    setTotalPages(data.totalPages);
    setIsLoading(false);
  };


  useEffect(() => {
    getMovies();
  }, [searchQuery, page]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Movie Recommendations</h1>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading
          ? Array(6).fill(0).map((_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="h-[300px] w-full rounded-xl" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            ))
          : movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
      </div>
      <div className="mt-4">
        {!isLoading && (
            <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              />
            </PaginationItem>

            {/* First page */}
            <PaginationItem>
              <PaginationLink onClick={() => setPage(1)} isActive={page === 1}>
                1
              </PaginationLink>
            </PaginationItem>

            {/* Show ellipsis if there are many pages before current */}
            {page > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Pages around current page */}
            {page > 2 && (
              <PaginationItem>
                <PaginationLink onClick={() => setPage(page - 1)}>
                  {page - 1}
                </PaginationLink>
              </PaginationItem>
            )}
            {page > 1 && page < totalPages && (
              <PaginationItem>
                <PaginationLink isActive>{page}</PaginationLink>
              </PaginationItem>
            )}
            {page < totalPages - 1 && (
              <PaginationItem>
                <PaginationLink onClick={() => setPage(page + 1)}>
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* Show ellipsis if there are many pages after current */}
            {page < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Last page */}
            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  onClick={() => setPage(totalPages)}
                  isActive={page === totalPages}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        )}
      </div>
    </div>
  );
}

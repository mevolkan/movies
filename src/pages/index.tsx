import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "@/lib/api/movies";
import MovieCard from "@/components/MovieCard";
import { useMovieStore } from "@/store";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const { searchQuery, setSearchQuery } = useMovieStore();

  const getMovies = async () => {
    const data = searchQuery ? await searchMovies(searchQuery) : await fetchPopularMovies(page);
    setMovies(data);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-200 px-4 py-2 rounded text-black"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded text-black"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
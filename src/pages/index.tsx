import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "@/lib/api/movies";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const data = query ? await searchMovies(query) : await fetchPopularMovies(page);
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, [query, page]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Movie Recommendations</h1>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

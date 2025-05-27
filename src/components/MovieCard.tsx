type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <img
        className="w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
      <p className="text-sm text-gray-600">{movie.overview?.slice(0, 100)}...</p>
    </div>
  );
}

type Props = {
  movie: any;
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="p-2 border rounded-md shadow hover:shadow-lg transition">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
      <p className="text-sm text-gray-600">{movie.overview?.slice(0, 100)}...</p>
    </div>
  );
}
